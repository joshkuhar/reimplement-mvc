var QUESTIONS = [
    {
        text: '<:48:x<:65:=<:6C:$=$=$$~<:03:+$~<:ffffffffffffffbd:+$<:ffffffffffffffb1:+$<:57:~$~<:18:x+$~<:03:+$~<:06:x-$x<:0e:x-$=x<:43:x-$',
        answers: [
            '0815',
            '2B',
            'BAM128',
            'Barely'
        ],
        correct: 0
    },
    {
        text: '+0+0+0+0+0+0+0+2)+0+0+9)+7))+3)-0-0-0-0-0-0-0-9)+0+0+0+0+0+0+0+0+7)-8)+3)-6)-8)-7-0-0-0-0-0-0)',
        answers: [
            '0815',
            '2B',
            'BAM128',
            'Barely'
        ],
        correct: 1
    },
    {
        text: '*6*3p*4*3*2*0p*2*1*0pp>0*1*0p*5*4*0p*5*4*2*1*0p*4*3p*1*0p/+0p+0*6*5*2p+0*5*0p',
        answers: [
            '0815',
            '2B',
            'BAM128',
            'Barely'
        ],
        correct: 2
    },
    {
        text: ']xhhhhooooooooohhhhhhxooooooooxooooooxjjjxhoooohhhxhohhhhhhhxhhhhjjjhhhxhhhhooooooooohhhhhhxjjjxxjjjjjjjxjhhhhxjhhhhhhhhjjjhh~',
        answers: [
            '0815',
            '2B',
            'BAM128',
            'Barely'
        ],
        correct: 3
    }
];

//container for questions
var questionsPageElement = $('.questions-page');

//question tracker
var questionCurrentElement = $('.question-current');
var questionsTotalElement = $('.questions-total');

//question
var questionElement = $('.question');

//answer
var answersElement = $('.answers');

//results of quiz and restart button
var resultsPageElement = $('.results-page');
var scoreElement = $('.score');
var restartButtonElement = $('.restart-button');

//end of game and restart function
var showResults = function() {
    questionsPageElement.hide();
    resultsPageElement.show();
};
//start new game function
var showQuestions = function() {
    resultsPageElement.hide();
    questionsPageElement.show();
};
//resests score
var resetScore = function() {
    scoreElement.text(0);
};
//increases score by 1
var increaseScore = function() {
    var score = parseInt(scoreElement.text(), 10);
    scoreElement.text(score + 1);
};
//sets question
var setQuestion = function(questionIndex) {
    var question = QUESTIONS[questionIndex];
    questionCurrentElement.text(questionIndex);
    questionElement.text(question.text);
    answersElement.empty();
    for (var i=0; i<question.answers.length; i++) {
        var answer = question.answers[i];
        answersElement.append('<li><button type="button">' + answer + '</button></li>');
    }
};
//captures answer and determines if answer is correct
answersElement.on('click', 'button', function() {
    var choice = $(this).parent().index();
    var questionIndex = parseInt(questionCurrentElement.text(), 10);
    var question = QUESTIONS[questionIndex];
    if (question.correct === choice) {
        increaseScore();
    }

    if (questionIndex + 1 < QUESTIONS.length) {
        setQuestion(questionIndex + 1);
    }
    else {
        showResults();
    }
});
//listens for restart button being clicked
restartButtonElement.click(function() {
    setQuestion(0);
    resetScore();
    showQuestions();
});
//initial page load
$(document).ready(function() {
    questionsTotalElement.text(QUESTIONS.length);
    setQuestion(0);
});

/*
var Model = function(){
  this.questions = [["Question 1", "a"], ["Questions 2", "b"], ["Question 3", "c" ]];
  this.answers = ["a", "b", "c"];
  this.testQuestion = null;
};
Model.prototype.getQuestion = function(questionNumber){
  this.question = this.questions[questionNumber][0];
  console.log(this.question);
  console.log("Choices: " + this.answers);
};
Model.prototype.showAnswers = function(){
  console.log(this.answers);
};
Model.prototype.checkAnswer = function(answer, questionNumber){
  this.correct = this.questions[questionNumber][1];
  if(answer === this.correct){
    this.testQuestion = this.correct;
  }
};
var questionNumber = 1;
var quiz = new Model();

var View = function(){};

View.prototype.question = function(element, test){
  $(element).empty();
  $(element).append(test);
};

View.prototype.displayAnswers = function(element, answers){
  for(var answer in answers){
    $(element).append('<li><button type="button">' + answer + '</button></li>');
  }
};

answers = ['0815', '2B', 'BAM128', 'Barely'];
var view = new View();













*/

