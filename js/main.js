/// <reference types="../@types/jquery" />



 let aboutOffset=$("#about").offset().top;

$(window).scroll( function(){
   let Wscroll= $(window).scrollTop();
   if( Wscroll > aboutOffset -50){
      $("#main-nav").css("backgroundColor" , " rgba(0,0,0,0.4) ");
      $("#main-nav").addClass(".pad");
      $("#btnUp").fadeIn(500);
   }
   else
   {
      $("#main-nav").css("backgroundColor" , " transparent");
      $("#main-nav").removeClass(".pad");
      $("#btnUp").fadeOut(500);
   
   }
});

$("#btnUp").click( function(){
  $("html,body").animate( {scrollTop:0}, 3000)
});

$('services').click( function(){
   let servicesLink= $('services').offset().top;
   $("html,body").animate( {scrollTop:servicesLink}, 3000)

})