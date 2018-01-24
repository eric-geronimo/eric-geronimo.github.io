var questionPos = 1;
var question1;
var question2;
var q2length = 0;
var question3;
var q3length = 0;
var question4;
var question5;


$('.submit1').click(function() {
  question1 = $('.q1 .input').val();
  console.log(question1);
  $('.q2 h1').html(question1);

$('#btn_createList').click(function(){
    // $('.ol_current').append($('<li>', {
    //      text:$('#input_listName').val()
    // }));
    if(q2length<5){
    $('.ol_current').append('<li><input name="Q2-List" disabled value="'+ $('#input_listName').val() +'"></li>');
    q2length++;
  } else{
    $('#input_listName').attr('disabled', true);
  }
});

  $('#myCarousel').carousel('next');
  $('.carousel-control.left').css('display','block');
  questionPos++;
  $('#myBar').animate({width: "20%"});
});

$('.submit2').click(function() {
  $('#myCarousel').carousel('next');
  $('.carousel-control.left').css('display','block');
  questionPos++;
  $('#myBar').animate({width: "40%"});
});

$('.submit3').click(function() {
  $('#myCarousel').carousel('next');
  $('.carousel-control.left').css('display','block');
  questionPos++;
  $('#myBar').animate({width: "60%"});
});

$('.submit4').click(function() {
  $('#myCarousel').carousel('next');-
  $('.carousel-control.left').css('display','block');
  questionPos++;
  $('#myBar').animate({width: "80%"});
});

$('.submit5').click(function() {
  // $('#myCarousel').carousel('next');
  // $('.carousel-control.left').css('display','block');
  // questionPos;
  $('#myBar').animate({width: "100%"});
});


$('#myCarousel').on('slide.bs.carousel', function () {
           console.log("sliding started");
});
$('#myCarousel').on('slid.bs.carousel', function () {
           console.log("sliding ended");
           if (questionPos == 1){
           		$('.carousel-control.left').css('display','none');
           }
});

$('.carousel-control.left').click(function() {
  questionPos--;
  $('#myBar').animate({width: "-=20%"});
});
