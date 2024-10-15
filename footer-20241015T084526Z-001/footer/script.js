$(document).ready(function () {
    $(".ic-4").click(function () {
        $(this).parents(".box-1a").next(".list").find(".dropdown2").slideToggle();
        $(this).toggleClass("fa-plus");
        $(this).toggleClass("fa-minus");
        console.log("c---");
    });

    // $(document).on("click",".fa-plus",function() {
    //      $(".dropdown2").slideToggle();
    //      console.log("c---");
    //  });
    

    //  $(document).on("click",".fa-minus",function() {
    //     $(".dropdown2").slideToggle();
    //     console.log("c---");
    // });

   $(".btn1").click(function () {
  //   $(".popup").show();
  //  $(".overlay").show();
   $(".main-popup-box").show();
   $("body").css("overflow", "hidden");
   console.log("c----");

   });


   $(".ic-5").click(function () {
  //   $(".popup").hide();
  //  $(".overlay").hide();
   $(".main-popup-box").hide();
   $("body").css("overflow", "auto");
   console.log("c----");
 
    });

    // $(".btn1").click(function(){
    //     $(".popup").css("overflow", "auto");
    //  console.log("c-----");   
    // })

    // $(".btn1").click(function () {
    //  $("body").css("overflow", "auto");
        
    //     console.log("c----");
     
    //     })

});