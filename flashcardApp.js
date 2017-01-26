var inquirer = require("inquirer");
var fs = require("fs");

var basicCard = require("./basicCard.js");
//var clozeCard = require("./clozeCard.js");

var count = 0;

var askCardType = function() {
    //prompt to the user
    inquirer.prompt([{
            //let the user to choose from Basic or Cloze
            type: "list",
            message: "Choose from the following: ",
            choices: ["Basic", "Cloze"],
            name: "chooseType"
        }

    ]).then(function(userInputs) {
        if (userInputs.chooseType === "Basic") {
            console.log("user choose Basic");
            askBasicQuestions();
        } else if (userInputs.chooseType === "Cloze") {
            console.log("user chosse Cloze");
            //askClozeQuestions();
        }else{
            askCardType();
        }
    });
}
//this function call is needed in order to go futher
askCardType();

//Basic Card constructor
function BasicCard(front, back) {
    console.log("basic card questions!");
    this.front = front;
    this.back = back;
};



function askBasicQuestions() {
    var newCard = new BasicCard(basicCard.basicQuestion[count].front,
        basicCard.basicQuestion[count].back);

    inquirer.prompt([{
        type: "input",
        message: newCard.front,
        name: "Answer"
    }]).then(function(user) {
        var correctAnswer = newCard.back;
        if (user.Answer === correctAnswer) {
            console.log("That's Corrent!!!");
            console.log("*.*.*.*.*.*.*.*.*.*.*.*.");
            count++;
            basicStartOver();
            askBasicQuestions();
        } else {
            console.log("That's Wrong, dude, the answer is: " + newCard.back);
            console.log("*.*.*.*.*.*.*.*.*.*.*.*.");
            count++;
            basicStartOver();
            askBasicQuestions();
        }
    });
}

function basicStartOver(){
	if(count === basicCard.basicQuestion.length){
		inquirer.prompt([
		{
			type:"confirm",
			message: "you want to play one more time?\n",
            name: "startOver"
			
		}]).then(function(player){
			if(player.startOver === true){
				count = 0;
				askCardType();
			}
			
		});
	}
}

basicStartOver();
