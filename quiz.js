//quiz constructor

function quiz (questions){
    this.score=0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
}

quiz.prototype.guess = function(answer){
    if(this.getCurrentQuestion().isCorrect(answer)){
        this.score++;
    }
    this.currentQuestionIndex++;
};

quiz.prototype.getCurrentQuestion = function(){
    return this.questions[this.currentQuestionIndex];  
};

quiz.prototype.ended = function(){
    return this.currentQuestionIndex >= this.questions.lenght;
};