//=====================================declarations==========================================
var inquirer = require('inquirer'), fs = require('fs');
var constructor = require("./constructor.js");
var clozeStatement = [
    {
        type: "input",
        name: "question",
        message: "Type your question.",
        default: "George Washington was the first president of the US in Washington ."
    },
    {
        type: "input",
        name: "answer",
        message: 'Type your answer',
        default: "George Washington"
    }
];

var basicQuestion = [
    {
        type: "input",
        name: "question",
        message: "Type your question.",
        default: "Who was the first president of the United States?"
    },
    {
        type: "input",
        name: "answer",
        message: 'Type your answer',
        default: "George Washington"
    }
];

//========================================functions=============================================

//=======================================main program===========================================
inquirer.prompt([{
    type: 'list',
    name: 'select',
    message: 'Which card would you like to create?',
    choices: ['basic', 'missing']
}]).then(function (response){

    if(response.select ==="basic") {
        inquirer.prompt(basicQuestion).then(function (input) {
            var cardBasic = new constructor.BasicCard(input.question, input.answer);
            console.log("---Front text of card: %s", cardBasic.question);
            console.log("---Back text of card: %s", cardBasic.answer);
        });
    } else {
        inquirer.prompt(clozeStatement).then(function(input){
            var cardCloze = new constructor.ClozeCard(input.question, input.answer);
            console.log(cardCloze.partial());
        });
    }
});