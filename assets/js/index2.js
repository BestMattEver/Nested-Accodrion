var headings = $(".clickme").get(); //this should get all the heading elements.
console.log(headings);

$(".clickme").click(function(e){
  e.preventDefault();
  $(this).siblings("#article").toggle().addClass("visible");

//this closes all the article elements EXCEPT the one i clicked on.
  for(var i=0;i<headings.length;i++)
  {
    if(headings[i] === this)
    {
      console.log(true);
    }
    else
    {
      $(headings[i]).siblings("#article").css("display","none");
      // $(headings[i]).siblings("#article").removeClass("visible");
      console.log(false);
    }
  }
  /*
  console.log($(this).children().first().children().first().find("#icon"));//this line navigates through the hierarchy to get the thing i want
  console.log($(this).find("#icon"));//this one searches through all descendents and finds the instance of #icon among them.
  //but the result is the same.
  */
});

$(".nestling-click").click(function(e){
  e.preventDefault();
  $(this).siblings(".nestlingContent").toggle().addClass("visible");//this SHOULD show the nestling content.
  console.log($(this).siblings(".nestlingContent"));
  //$(this).find(".nestlingArrow").toggle().addClass("down");//this makes the arrow work
});//end nestling click
