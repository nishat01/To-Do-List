// alert("CONNECTED!");
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();  //to stop event bubbling
});

$("input[type='text']").keypress(function(event){
	//Code for Enter key = 13
	if(event.which === 13){		
		//extracting new todo text from input
		var todoText = $(this).val();
		// clear out the input
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});