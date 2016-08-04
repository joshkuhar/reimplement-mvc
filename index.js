//MODEL
var Model = function(){
  this.questions = [["<:48:x<:65:=<:6C:$=$=$$~<:03:+$~<:ffffffffffffffbd:+$<:ffffffffffffffb1:+$<:57:~$~<:18:x+$~<:03:+$~<:06:x-$x<:0e:x-$=x<:43:x-$", 
                     "0815"], 
                    ["+0+0+0+0+0+0+0+2)+0+0+9)+7))+3)-0-0-0-0-0-0-0-9)+0+0+0+0+0+0+0+0+7)-8)+3)-6)-8)-7-0-0-0-0-0-0)", 
                    "2B"], 
                    ["*6*3p*4*3*2*0p*2*1*0pp>0*1*0p*5*4*0p*5*4*2*1*0p*4*3p*1*0p/+0p+0*6*5*2p+0*5*0p", 
                    "BAM128" ], 
                    ["]xhhhhooooooooohhhhhhxooooooooxooooooxjjjxhoooohhhxhohhhhhhhxhhhhjjjhhhxhhhhooooooooohhhhhhxjjjxxjjjjjjjxjhhhhxjhhhhhhhhjjjhh~", 
                    "Barely"]
                    ];
  this.answers = ['0815', '2B', 'BAM128', 'Barely'];
  this.questionNumber = 0;
  this.numberCorrect = 0;
};

//VIEW
var View = function(){};

View.prototype.question = function(element, input){
  $(element).empty().append(input);
};
View.prototype.answers = function(answers){
   for(var answer in answers){
   $('ul').append('<li><button type="button" id="' + answers[answer] + '">' + answers[answer] + '</button></li>');
  }
};
View.prototype.results = function(numberCorrect, questionNumber){
  $('.score').text(numberCorrect);
  $('.questions-total').text(questionNumber);
};
View.prototype.showResults = function(){
  $('.questions-page').hide();
  $('.results-page').show();
};

//CONTROLLER
var Controller = function(model, view){
  this.questionNumber = model.questionNumber;
};
Controller.prototype.getQuestion = function(){
  model.question = model.questions[this.questionNumber][0];
  view.question('.question', model.question);
};
Controller.prototype.displayAnswers = function(answers){
  view.answers(model.answers);
};
Controller.prototype.checkAnswers = function(){
  $('.answers').on('click', 'button', function(event){
    event.preventDefault();
    if ($(this).attr('id') === model.questions[controller.questionNumber][1]){
      controller.questionNumber++;
      model.questionNumber++;
      model.numberCorrect++;
      if (controller.questionNumber < 4){
        controller.getQuestion();
      } else {
        view.results(model.numberCorrect, model.questionNumber);
        view.showResults();
      }
    } else if ($(this).attr('id') !== model.questions[controller.questionNumber][1]){
      controller.questionNumber++;
      model.questionNumber++;
      if (controller.questionNumber < 4){
        controller.getQuestion();
      } else {
        view.results(model.numberCorrect, model.questionNumber);
        view.showResults();
      }
    }
  })
};
Controller.prototype.restart = function(){
  $('.restart-button').click(function(event){
    event.preventDefault();
    $('.questions-page').show();
    $('.results-page').hide();
    model.questionNumber = 0;
    model.numberCorrect = 0;
    controller.questionNumber = 0;
  });
};

var model = new Model();
var view = new View();
var controller = new Controller(model, view);

controller.getQuestion();
controller.displayAnswers(model.answers);
controller.checkAnswers();
controller.restart();








