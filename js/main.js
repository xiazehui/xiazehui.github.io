$(function(){
	var list = $(".list_item li");
	list.hover(
		function(){
			for (var i = 0; i < list.length; i++) {
				if (this == list[i]) {
					$(this).find(".item_content").stop().animate({opacity:"1"},400);
				}
			}
		},function(){
			for (var i = 0; i < list.length; i++) {
				if (this == list[i]) {
					$(this).find(".item_content").stop().animate({opacity:"0"},200);
				}
			}
		}
	);
});