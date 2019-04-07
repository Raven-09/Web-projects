//Check off spacific ToDos By Clicking
$("ul").on('click',"li", function(){
	// $(this).css("color","gray");
	// $(this).css("text-decoration","line-through");
	//if li is black, turn it gray
	// if($(this).css("color")==="rgb(128, 128, 128)"){
	// 	$(this).css({
	// 	color: "black",
	// 	textDecoration: "none"
	// });
	// }
	// //else turn it black
	// else{
	// 	$(this).css({
	// 	color: "gray",
	// 	textDecoration: "line-through"
	// });
	// }
	$(this).toggleClass("completed");
});

//Click on X to delete To-Do
$("ul").on("click", "span",function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation(); 
});

$("input[type='text'").keypress(function(event){
   if (event.which===13) {
   	var todoText = ($(this).val());
   	$(this).val("");
   	//Create a new li and add to ul
   	 $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>")
   }
});

$(".fa-edit").click(function(){
   $("input[type='text'").fadeToggle();
});