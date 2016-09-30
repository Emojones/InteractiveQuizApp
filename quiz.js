function quiz (Question){
    this.score=0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
}

//checks thet anser then increments the total
quiz.prototype.guess = function(answer){
    if(this.getCurrentQuestion().isCorrectAnswer(answer)){
        this.score++;
    }
    this.currentQuestionIndex++;
};

//returns the current question
quiz.prototype.getCurrentQuestion = function(){
    return this.questions[this.currentQuestionIndex];  
};

//checks to see if the quiz is over
quiz.prototype.ended = function(){
    return this.currentQuestionIndex >= this.questions.length;
};