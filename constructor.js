//constructor.js

exports.BasicCard = function(front, back) {
    this.question = front;
    this.answer = back;
};

exports.ClozeCard = function  (text, cloze) {
    this.fullText = text;
    this.answer = cloze;
    this.partial = function () {

        //converting input to an array
        var textCopied = this.fullText, studyQuestion = textCopied.split(' ');
        var cardAnswer = this.answer.split(' ');

        //punctuation is not ignored in this loop, which means answer will not be masked when next to symbols
        for (var i = 0; i < studyQuestion.length; i++) {
            var match = studyQuestion[i];

            //searching for, and hiding answer in textCopied array, then returning modified statement
            if ((studyQuestion[i] === cardAnswer[0]) || (studyQuestion[i] === cardAnswer[1])) {
                textCopied = textCopied.replace(match, "*********");
            }
        }

        console.log("---Back text of card: " +this.answer.replace(/,/g, ' '));
        return console.log("---Front text of card: %s", textCopied);
    };
};