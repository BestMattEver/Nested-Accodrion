

var top_part1 = document.querySelector("#top_part1");
var article1 = document.querySelector("#article1");

var top_part2 = document.querySelector("#top_part2");
var article2 = document.querySelector("#article2");

var top_part3 = document.querySelector("#top_part3");
var article3 = document.querySelector("#article3");

var top_part4 = document.querySelector("#top_part4");
var article4 = document.querySelector("#article4");

var toggle = false;
//working click alert directly below
//top_part1.addEventListener('click', function(){alert("hello");});

top_part1.addEventListener('click', whenClicked);



function whenClicked()
{
  toggle = !toggle;
  if(toggle)
  {
    article1.textContent = "Pinnacle hatred value evil ubermensch chaos contradict ideal ultimate convictions free decieve faith. Ocean free play right zarathustra prejudice morality strong endless deceptions overcome salvation madness disgust. Disgust deceptions faith joy moral morality moral strong free reason decrepit free ultimate.";
  }
  else {
    article1.textContent ="";
  }

    //article1.sytle.display = inline;
    //alert("hello");
}//end whenClicked
