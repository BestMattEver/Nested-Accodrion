

var top_part1 = document.querySelector("#top_part1");
var article1 = document.querySelector("#article1");

var top_part2 = document.querySelector("#top_part2");
var article2 = document.querySelector("#article2");

var top_part3 = document.querySelector("#top_part3");
var article3 = document.querySelector("#article3");

var top_part4 = document.querySelector("#top_part4");
var article4 = document.querySelector("#article4");


var toggle1 = false;
var toggle2 = false;
var toggle3 = false;
var toggle4 = false;

//working click alert directly below
//top_part1.addEventListener('click', function(){alert("hello");});

top_part1.addEventListener("click", whenClicked1);
top_part2.addEventListener("click", whenClicked2);
top_part3.addEventListener("click", whenClicked3);
top_part4.addEventListener("click", whenClicked4);

function whenClicked4()
{ //alert("I'm in whenclicked1!");
  toggle4 = !toggle4;
  if(toggle4)
  {
    article4.textContent = "Sexuality strong oneself overcome ubermensch virtues joy philosophy free war eternal-return morality virtues. Depths against abstract gains abstract ocean superiority selfish. Grandeur value deceptions of ultimate gains. Play ultimate fearful war grandeur burying christian marvelous of transvaluation ascetic. Truth decrepit ultimate right grandeur abstract gains burying play ideal enlightenment contradict. Dead hatred ascetic right enlightenment self ocean superiority salvation pious joy selfish convictions gains.";
    article2.textContent="";
    article1.textContent="";
    article3.textContent="";
  }
  else {
    article4.textContent ="";
  }
}//end whenClicked4

function whenClicked3()
{ //alert("I'm in whenclicked1!");
  toggle3 = !toggle3;
  if(toggle3)
  {
    article3.textContent = "Sexuality strong oneself overcome ubermensch virtues joy philosophy free war eternal-return morality virtues. Depths against abstract gains abstract ocean superiority selfish. Grandeur value deceptions of ultimate gains. Play ultimate fearful war grandeur burying christian marvelous of transvaluation ascetic. Truth decrepit ultimate right grandeur abstract gains burying play ideal enlightenment contradict. Dead hatred ascetic right enlightenment self ocean superiority salvation pious joy selfish convictions gains.";
    article2.textContent="";
    article1.textContent="";
    article4.textContent="";
  }
  else {
    article3.textContent ="";
  }
}//end whenClicked3

function whenClicked2()
{ //alert("I'm in whenclicked1!");
  toggle2 = !toggle2;
  if(toggle2)
  {
    article2.textContent = "Sea victorious against of of hope overcome value intentions joy prejudice mountains free. Ascetic value ultimate truth madness. Endless madness moral madness of war. Victorious ultimate chaos prejudice value ascetic burying christian love deceptions oneself right evil. <br><br>rality insofar transvaluation oneself ascetic faithful. Decieve holiest moral ultimate insofar truth ultimate. Good horror inexpedient strong pious chaos marvelous justice self free prejudice philosophy madness mountains.";
    article1.textContent="";
    article3.textContent="";
    article4.textContent="";
  }
  else {
    article2.textContent ="";
  }
    //article1.sytle.display = inline;
    //alert("hello");
}//end whenClicked2

function whenClicked1()
{ //alert("I'm in whenclicked1!");
  toggle1 = !toggle1;
  if(toggle1)
  {
    article1.textContent = "Pinnacle hatred value evil ubermensch chaos contradict ideal ultimate convictions free decieve faith. Ocean free play right zarathustra prejudice morality strong endless deceptions overcome salvation madness disgust. Disgust deceptions faith joy moral morality moral strong free reason decrepit free ultimate.";
    article2.textContent="";
    article3.textContent="";
    article4.textContent="";
  }
  else {
    article1.textContent ="";
  }
}//end whenClicked1
