$(function() {
    $("#list li").mouseenter(function() {
        var i = $(this).index(); //当前索引值
       $("#list li").eq(i).addClass("list-active");

    })
    $("#list li").mouseleave(function() {
        var i = $(this).index(); //当前索引值
        $("#list li").eq(i).removeClass("list-active");
    })
})
