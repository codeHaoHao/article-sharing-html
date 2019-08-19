$(function(){
	image_text_display();
	
})
function display_inline(){
	$(".image-text").css("display","inline");
}
function display_none(){
	$(".image-text").css("display","none");
}
//显示图片文字
function image_text_display(){
	$(".carousel-inner").each(function(){
		$(this).on("mouseover",display_inline);
		$(this).on("mouseout",display_none);
	})
	$(".carousel-indicators").on("mouseover",display_inline);
	$(".carousel-indicators").on("mouseout",display_none);
	$(".image-text").on("mouseover",display_inline);
	$(".image-text").on("mouseout",display_none);
	$(".right.carousel-control").on("mouseover",display_inline);
	$(".right.carousel-control").on("mouseout",display_none);
	$(".left.carousel-control").on("mouseover",display_inline);
	$(".left.carousel-control").on("mouseout",display_none);
}