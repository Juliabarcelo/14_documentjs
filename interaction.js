$(document).ready(function(){
    $("img").hiden();
    $("li:first-child a").click(function(){
         $("li:first-child img").fadeIn();                       
});
    $("li:first-child a").dblclick(fuction(){
    $("li:first-child img").fadeOut();                           

});
});