var questionPos = 1;
var question1;
var question2 = [];
var q2length = 0;
var question3 = [];
var q3length = 0;
var question4;
var q4length = 0;
var question5;


// PAGE 1_____________

$('.submit1').click(function() {
  question1 = $('.q1 .input').val();
  // console.log(question1);
  $('.q2 h1').html(question1);
  $('.q5 h2').html("What might be the benefits of an attempt or partial success of "+question1);


// PAGE 2_____________

  $('#myCarousel').carousel('next');
  $('.carousel-control.left').css('display','block');
  questionPos++;
  $('#myBar').animate({width: "20%"});
});

$('#btn_createList').click(function(){
    // $('.ol_current').append($('<li>', {
    //      text:$('#input_listName').val()
    // }));
    if(q2length<5){
    question2.push($('#input_listName').val());
    // console.log(question2);
    $('.ol_current2').append('<li><input name="Q'+questionPos+'-'+q2length+'"  value="'+ $('#input_listName').val() +'"></li>');
    q2length++;
  } else{
    //$('#input_listName').attr('disabled', true);
  }
});

// PAGE 3_____________

$('.submit2').click(function() {
  q2length = 0
  $('#myCarousel').carousel('next');
  $('.carousel-control.left').css('display','block');
  questionPos++;
  $('#myBar').animate({width: "40%"});
  $('.ol_current3').html('');
  for(var i=0; i<question2.length; i++){
    $('.ol_current3').append('<li><input name="Q'+questionPos+'-'+q2length+'"  value="'+ question2[i] +'"></li>');
    q2length++;
  };
});

// PAGE 4_____________

$('.submit3').click(function() {
  for(var i=0; i<question2.length; i++){
    question3.push($('.ol_current3 li:nth-child(i)'));
  }; console.log(question3);
  $('#myCarousel').carousel('next');
  $('.carousel-control.left').css('display','block');
  questionPos++;
  $('#myBar').animate({width: "60%"});
});

// PAGE 5_____________

$('.submit4').click(function() {
  $('#myCarousel').carousel('next');-
  $('.carousel-control.left').css('display','block');
  questionPos++;
  $('#myBar').animate({width: "80%"});
});

// PAGE 6_____________

$('.submit5').click(function() {
  // $('#myCarousel').carousel('next');
  // $('.carousel-control.left').css('display','block');
  // questionPos;
  $('#myBar').animate({width: "100%"});
   $( "#fearForm" ).submit();
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
