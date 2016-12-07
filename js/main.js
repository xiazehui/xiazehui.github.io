$(function(){
	$(".list_item li").hover(
		function(){
			$(this).find(".item_content").stop().animate({opacity:"1"},400);
		},function(){
			$(this).find(".item_content").stop().animate({opacity:"0"},200);
		}
	);
});