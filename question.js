//constructor of questions
  
function Question(text, choices, answer){
  this.question = text;
  this.choices = choices;
  this.answer = answer;
}
  //new Question(question, choices, answer)
var questions = [
new Question("What roll is a natural crit", ["20", "1"], "20"),
new Question("In Star Wars, is Jar Jar Binks cool?", ["OMG I love that guy!!", "No. A thousand times no."], "No. A thousand times no."),
new Question("Whose a good boy?", ["me?", "You are!"], "You are!")];

//this creates the quiz with the quiz function and questions variable as the parameter and stores //that info in the quiz var.

var quiz = new quiz(questions);

//show it
QuizUI.displayNext();

Question.prototype.isCorrectAnswer = function (choice) {
  return this.answer === choice;
}