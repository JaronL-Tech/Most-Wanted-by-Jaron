
function app(people) {
    displayWelcome();
    runSearchAndMenu(people);
    return exitOrRestart(people);
}

function displayWelcome() {
    alert('Hello and welcome to the Most Wanted search application!');
}

function runSearchAndMenu(people) {
    const searchResults = searchPeopleDataSet(people);

    if (searchResults.length > 1) {
        displayPeople('Search Results', searchResults);
    }
    else if (searchResults.length === 1) {
        const person = searchResults[0];
        mainMenu(person, people);
    }
    else {
        alert('No one was found in the search.');
    }
}

function searchPeopleDataSet(people) {

    const searchTypeChoice = validatedPrompt(
        'Please enter in what type of search you would like to perform.',
        ['id', 'name', 'traits']
    );

    let results = [];
    switch (searchTypeChoice) {
        case 'id':
            results = searchById(people);
            break;
        case 'name':
            results = searchByName(people);
            break;
        case 'traits':
            //! TODO
            results = searchByTraits(people);
            break;
        default:
            return searchPeopleDataSet(people);
    }

    return results;
}

function searchById(people) {
    const idToSearchForString = prompt('Please enter the id of the person you are searching for.');
    const idToSearchForInt = parseInt(idToSearchForString);
    const idFilterResults = people.filter(person => person.id === idToSearchForInt);
    return idFilterResults;
}

function searchByName(people) {
    const firstNameToSearchFor = prompt('Please enter the the first name of the person you are searching for.');
    const lastNameToSearchFor = prompt('Please enter the the last name of the person you are searching for.');
    const fullNameSearchResults = people.filter(person => (person.firstName.toLowerCase() === firstNameToSearchFor.toLowerCase() && person.lastName.toLowerCase() === lastNameToSearchFor.toLowerCase()));
    return fullNameSearchResults;
}
function searchByTraits(people) {
    const traitsTOSearchForString = validatedPrompt('Please enter one of the listed traits of the person you are searching for.', ["eyeColor", 'height', 'weight', 'gender', 'occupation', 'quit']);
    switch (traitsTOSearchForString){
        case "eyecolor":
            let peopleEyeColor = findPersonEyeColor(people)
            displayPeople("People by Eye Color", peopleEyeColor);
            break;
        case "height":
            let peopleheight = findPersonheight(people)
            displayPeople("People by Height", peopleheight);
            break;
        case "weight":
            let peopleweight = findPersonweight(people)
            displayPeople("People by Weight", peopleweight);
            break;
        case "gender":
            let peopleGender = findPersonGender(people)
            displayPeople("People by Gender", peopleGender);
            break;
        case "occupation":
            let peopleOccupation = findPersonOccupation(people)
            displayPeople("People by Occupation", peopleOccupation);
            break;
        case "quit":
            return;
        default:
            alert('Invalid input. Please try again.');
            return searchByTraits(people);
  }
  
}

function mainMenu(person, people) {

    const mainMenuUserActionChoice = validatedPrompt(
        `Person: ${person.firstName} ${person.lastName}\n\nDo you want to know their full information, family, or descendants?`,
        ['info', 'family', 'descendants', 'quit']
    );

    switch (mainMenuUserActionChoice) {
        case "info":
            //! TODO
            let PersonInfo = findPersonInfo(person)
             displayPersonInfo(person);
             console.log('Display person information.');
            break;
        case "family":
            //! TODO
             let personFamily = findPersonFamily(person, people);
             displayPeople('Family', personFamily);
             console.log('Display family infomation.');
            break;
        case "descendants":
            //! TODO
             let personDescendants = findPersonDescendants(person, people);
             displayPeople('Descendants', personDescendants);
             console.log('Display infomation of Descendants.');
            break;
        case "quit":
            return;
        default:
            alert('Invalid input. Please try again.');
    }

    return mainMenu(person, people);
}

function displayPeople(displayTitle, peopleToDisplay) {
    const formatedPeopleDisplayText = peopleToDisplay.map(person => `${person.firstName} ${person.lastName}`).join('\n');
    alert(`${displayTitle}\n\n${formatedPeopleDisplayText}`);
}

function validatedPrompt(message, acceptableAnswers) {
    acceptableAnswers = acceptableAnswers.map(aa => aa.toLowerCase());

    const builtPromptWithAcceptableAnswers = `${message} \nAcceptable Answers: ${acceptableAnswers.map(aa => `\n-> ${aa}`).join('')}`;

    const userResponse = prompt(builtPromptWithAcceptableAnswers).toLowerCase();

    if (acceptableAnswers.includes(userResponse)) {
        return userResponse;
    }
    else {
        alert(`"${userResponse}" is not an acceptable response. The acceptable responses include:\n${acceptableAnswers.map(aa => `\n-> ${aa}`).join('')} \n\nPlease try again.`);
        return validatedPrompt(message, acceptableAnswers);
    }
}

function exitOrRestart(people) {
    const userExitOrRestartChoice = validatedPrompt(
        'Would you like to exit or restart?',
        ['exit', 'restart']
    );

    switch (userExitOrRestartChoice) {
        case 'exit':
            return;
        case 'restart':
            return app(people);
        default:
            alert('Invalid input. Please try again.');
            return exitOrRestart(people);
    }

}

function findPersonEyeColor(people){
    let eyeColorValue = validatedPrompt("What eye color would you like to search for? ", ["brown", "blue", "hazel", "black", "green"])
    let peopleByEyeColor = people.filter(function (person) {
        if (person.eyeColor === eyeColorValue) {
            return true;
        } else {
            return false;
        }
    })
    return peopleByEyeColor;
}

{   
    function findPersonGender(people){
    let GenderValue = validatedPrompt("What Gender would you like to search for? ", ["Male", "Female"])
    let PeoplebyGender = people.filter(function (person) {
        if (person.Gender === GenderValue) {
            return true;
        } else {
            return false;
        }
    })
    return PeoplebyGender;}
{
   
{
    function findPersonheight(people){
    let HeightValue = parseInt("What height are you looking for? ", [71, 65, 76, 62, 70, 72, 66, 59, 69, 76, 74, 66, 58, 62, 61, 74, 71, 70, 63, 70, 67, 67])
    let Peoplebyheight = people.filter(function (person) {
        if (person.height === HeightValue) {
            return true;
        } else {
            return false;
        }
    })
    return Peoplebyheight;
}
    
    {
        function findPersonweight(people){
            let WeightValue = parseInt("Enter weight? ", [175, 162, 250, 115, 207, 256, 170, 137, 199, 205, 118, 179, 156, 235, 112, 184, 249, 187, 241, 110, 100, 100 ])
            let Peoplebyweight = people.filter(function (person) {
                if (person.Weight === WeightValue) {
                    return true;
                } else {
                    return false;
                }
            })
            return Peoplebyweight;
    }
}
{ 
    function findPersonOccupation(people){
        let OccupationValue = validatedPrompt("What occupation are you looking for?", ["Progammer", "assistant", "landscaper", "Nurse", "Student", "architect","Doctor", "Politician" ])
        let Peoplebyoccupation = people.filter(function (person){
            if (person.Occupation === OccupationValue) {
                return true;
            } else {
                return false;
            }
        })
        return Peoplebyoccupation;
    }

} {
    
}