$(function(){
/*
    $('img').erro(function(){
        $('img').attr("src","img/erro.jpg");

    });
*/
/*
    $('img').erro(function(){
        var imagem = $(this).attr("src");
        alert('Imagem '+imagem+' Indisponivel!');
        $('img').attr("src","img/erro.jpg");
    });
*/
/* Ajustar imagem de acordo com o resize
    $('img').width($(window).width()).height($(window).height());
    $(window).resize(function(){

        $('img').width($(window).width()).height($(window).height());

    });
*/
/*    $(window).scroll(function(){
        $('img').fadeOut('1000');
    });
*/
    $('body').css("height","5000px");
/*
    $(window).scroll(function(){
        var topo = $(window).scrollTop();
        alert(topo);
    });
*/
    $(window).scroll(function(){
        var topo = $(window).scrollTop();
    });
});
