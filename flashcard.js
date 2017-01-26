var inquirer = require("inquirer");
var fs = require("fs");

var basicCard = require("./basicCard.js");
var clozeCard = require("./clozeCard.js");

//Basic Card constructor

function BasicCard(front, back) {
    console.log("basic card questions!");
    this.front = front;
    this.back = back;
};

var count = 0;

var askCardType = function(){
	if(count < basicCard.basicQuestion.length){
		inquirer.prompt([
		{
			name:"response",
			message: basicCard.basicQuestion[count].front
		}
			
		]).then(function(answers){
			if(answers.response === basicCard.basicQuestion[count].back){
				console.log("Fine, you smart!");

			} else{
				console.log("The answer is " + basicCard.basicQuestion[count].back);
			}
			count++;
			askCardType();
		});
	}
}