$(document).ready(function(){
	var apropos=$("#apropos").html();
	var experience=$("#experience").html();
	var contact=$("#contact").html();


	$('.apropos').on("click",function(){
		$(".col-md-10").html(apropos);
	})

	$('.experience').on("click",function(){
		$(".col-md-10").html(experience);
	})

	$('.contact').on("click",function(){
		$(".col-md-10").html(contact);
	})
})
