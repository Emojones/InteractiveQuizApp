//constructor of questions
  
function Question(text, choices, answer){
  this.question = text;
  this.choices = choices;
  this.answer = answer;
}
  //new Question(question, choices, answer)
var quest1 = new Question("Question", "True", "False");
var quest2 = new Question("Question", "True", "False");
var quest3 = new Question("Question", "True", "False");

Question.prototype.isCorrectAnswer = function (choice) {
  return this.answer === choice;
}