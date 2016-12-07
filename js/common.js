//按钮单选
$.extend({
    btnChoice : function(btns){
        btns.on("click",function(){
            $(this).addClass("active").siblings().removeClass("active");
        });
    }
});
//按钮多选
$.extend({
    btnMoreChoice : function(btns){
        btns.on("click", function(){
            if (!$(this).hasClass("active")) {
                $(this).addClass("active");
            }else{
                $(this).removeClass("active")
            }
        });
    } 
});
//按钮对应视图切换
$.extend({
    btnChoiceView : function(btns, views){
        btns.on("click",function(){
            for (var i = 0; i < btns.length; i++) {
                if (this == btns[i]) {
                    $(btns[i]).addClass("active").siblings().removeClass("active");
                    $(views[i]).addClass("show").siblings().removeClass("show");
                }
            }
        });
    }    
});
//按钮对应视图切换---hover
$.extend({
    btnViewHover : function(btns, views){
        btns.hover(function(){
            for (var i = 0; i < btns.length; i++) {
                if (this == btns[i]) {
                    $(btns[i]).addClass("active");
                    $(views[i]).addClass("show");
                }
            }
        },function(){
            for (var i = 0; i < btns.length; i++) {
                if (this == btns[i]) {
                    $(btns[i]).removeClass("active");
                    $(views[i]).removeClass("show");
                }
            }
        });
    }    
});
//计数器
$.extend({
    inputNumber : function(box){
        var reduce = $(box).find("a.reduce");
        var add = $(box).find("a.add");
        $(reduce).on("click", function(){
            if (parseInt($(this).siblings("input").val()) < 1) {
                console.log("不能小于0");
            }else{
                $(this).siblings("input").val(parseInt($(this).siblings("input").val())-1);
            }   
        });
        $(add).on("click", function(){
            $(this).siblings("input").val(parseInt($(this).siblings("input").val())+1);
        });
    }    
});
//图片左右滑动
$.extend({
    slide : function(left_btn,right_btn,box,width){
        left_btn.on("click", function () {
            var list = $(box).find("li");
            var len = $(list).length;//获取list的长度
            if (!$(box).find("li").is(":animated")) {
                for (var i = 1; i < list.length; i++) {
                    var left = $(list[i]).css("left");//获取当前li的left
                    left = (parseInt(left) - width) + "px";
                    $(list[i]).animate({ "left": left }, 400);//每个li相对于当前位置向左移动200px
                }
                $(box).find("li:first").css({ "left": width * (len - 1) - width });//将第一个li的位置移到最后面
                $(box).find("li:first").insertAfter($(box).find("li:last"));//同时将第一个li这个标签移到最后面
            }
        });
        right_btn.on("click", function () {
            var list = $(box).find("li");//每次执行重新定位li
            var len = $(list).length;//获取list的长度
            if (!$(box).find("li").is(":animated")) {
                for (var i = 0; i < list.length - 1; i++) {
                    var left = $(list[i]).css("left");//获取当前li的left
                    left = (parseInt(left) + width) + "px";
                    $(list[i]).animate({ "left": left }, 400);//每个li相对于当前位置向右移动200px
                }
                $(box).find("li:last").css({ "left": width * 0 - width });//将最后一个li的位置移到最前面
                $(box).find("li:last").insertBefore($(box).find("li:first"));//同时将最后一个li这个标签移到最前面
            }
        });
    }    
});