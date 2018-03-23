// 상세 페이지 네비게이션
$(function(){
  $('#box1').click(function(){
    $('html, body').stop().animate({
      scrollTop:'-=100'
    },1000,'easeInOutExpo');
    console.log('box1')
  })

  // $('#box2').click(function(){
  //   $('html, body').stop().animate({
  //     scrollTop:'+=100'
  //   },1000);
  // })

  $('#box3').click(function(){
    $('html, body').stop().animate({
      scrollTop:'0'
    },1000);
  })

  $('#box4').click(function(){
    $('html, body').stop().animate({
      scrollTop:$(document).height()
    },1000);
  })

})
