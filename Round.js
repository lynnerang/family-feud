class Round {
    constructor(survey, answers, roundNum = 0) {
        this.survey = survey;
        this.surveyAnswers = answers; 
        this.guesses = [];
        this.roundNum = roundNum;
    }

    checkGuess() {
        //check against prev guesses
            //if a previous guess, say it's already been guessed and try again.  clear input.
            //if not guessed before, saveGuess() and checkifAnswer()
    }
        
    saveGuess() {
        //push guess into guesses array
    }

    checkIfAnswer() {
        //compare against answer array
            //if answer and answers.length is < 1
                //display on board
                //sort answers on board
                //increment player score
                //clear input
                //pop answer out of answer array
            //if answer and answers.length IS 1
                //check roundNum, and if 3 => checkForWinner()
                //check round, num and if < 3 => game.startNewRound()
            //if not answer, clear the input and toggleActivePlayer()
    }

    toggleActivePlayer() {
        //if active player is p1, active player = p2, else active player is p1.
        //run fn to indicate active player in the dom
    }
    

    displayAnswer() {
        //maybe for Index.js, for updating answer in the dom.
        //sortAnswers();
    }

    sortAnswers() {
        //maybe for Index.js, for sorting answers displayed in the dom by respondent num.
    }
}

export default Round;