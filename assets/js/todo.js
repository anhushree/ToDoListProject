//Check off Specific Todos by clicking 
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
}); 

//Click on X to delete Todos
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();

	});
	event.stopPropagation();
	
})
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var Todotext=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>"+ Todotext +"</li>");

	}
});	
 
$(".fa-pencil-alt").click(function(){
	$("input[type='text']").fadeToggle("slow");

})