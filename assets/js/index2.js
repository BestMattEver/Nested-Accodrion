var headings = $(".clickme").get(); //this should get all the heading elements.
console.log(headings);

$(".clickme").click(function(e){
  e.preventDefault();
  console.log($(this).children().first().next());//this prints out the article tag im looking for.
  $(this).children().first().next().toggle().addClass("visible");

});
// $("#closeModal").click(hideModal);
