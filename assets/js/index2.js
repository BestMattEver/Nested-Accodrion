var headings = $(".clickme").get(); //this should get all the heading elements.
console.log(headings);

$(".clickme").click(function(e){
  e.preventDefault();
  //console.log($(this).children().first().next());//this prints out the article element im looking for.
  //$(this).children().first().next().toggle().addClass("visible");//this toggles on and off the visible class on that article element
  $(this).siblings("#article").toggle().addClass("visible");
  $(this).find("#icon").addClass(".down");


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


  $(this).find(".nestlingArrow").toggle().addClass("down");//this makes the arrow work
});
// $("#closeModal").click(hideModal);
