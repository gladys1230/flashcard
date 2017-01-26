var inquirer = require("inquirer");
var fs = require("fs");
var BasicStyle = require("./BasicFlashCard");
var ClozeStyle = require("./Cloze");

//prompt to the user

inquirer.prompt([
{	
	//let the user to choose from Basic or Cloze
	type: "list",
	message: "Choose from the following: ",
	choices:["Basic", "Cloze"],
	name: "chooseType"
},

{
	type: "input",
	name: "question",
	message: "Choose a question: "
},
{
	type: "input",
	name: "answer",
	message: "The correct answer is: "
}

])