$(function(){
    $(".hover1").hover(function(){
        $(".p-hover1").show();
    } , function(){
        $(".p-hover1").hide();
    });
 });
$(function(){
    $(".hover2").hover(function(){
        $(".p-hover2").show();
    } , function(){
        $(".p-hover2").hide();
    });
 });
$(function(){
    $(".hover3").hover(function(){
        $(".p-hover3").show();
    } , function(){
        $(".p-hover3").hide();
    });
 });
$(function(){
    $(".hover4").hover(function(){
        $(".p-hover4").show();
    } , function(){
        $(".p-hover4").hide();
    });
 });
$(function(){
    $(".hover5").hover(function(){
        $(".p-hover5").show();
    } , function(){
        $(".p-hover5").hide();
    });
 });

 let swiper = new Swiper(".mySwiper",{
    
pagination:{
    el:".swiper-pagination",
    dynamicBullets: true,
},

})
