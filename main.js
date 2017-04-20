'use strict'
let inquirer = require('inquirer');
let argv = require('argv');
let args = argv.run().targets;
let BasicCard = require('./flashcard.js').BasicCard;
let ClozeCard = require('./flashcard.js').ClozeCard;

function promptClozeCard() {
    inquirer.prompt([{
        type: 'input',
        name: 'full_text',
        message: 'Enter the full text of the question: '
    }, {
        type: 'input',
        name: 'cloze',
        message: 'Enter the term you want as the cloze: '
    }]).then(function(response) {
        let card = new ClozeCard(response.full_text, response.cloze);
        if (card.fullText && card.cloze) {
            card.printText();
        }
    });
};

function promptBasicCard() {
	inquirer.prompt([{
	    type: 'input',
	    name: 'front',
	    message: 'Enter the question you want on the card: '
	}, {
	    type: 'input',
	    name: 'back',
	    message: 'Enter the answer to the question: '
	}]).then(function(response) {
	    let card = new BasicCard(response.front, response.back);
	    card.printText();

	})
}


inquirer.prompt([
	{
		name: 'option',
		message: 'What kind of flash card do you want to create?',
		type: 'list',
		choices:  ['Basic', 'Cloze']
	}
]).then( function(response) {
	if(response.option === 'Basic'){
		promptBasicCard();
	}
	else{
		promptClozeCard();
	

	}
});


