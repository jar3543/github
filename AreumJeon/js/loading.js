//로딩이미지 처리
  $(window).on('load',function(){
    $('.bg').fadeOut(2000);
  });


// 로딩이미지가 사라지고 maintext (7초뒤에) 띄우기
  $(function(){
    $(window).on('load',function(){
      $('.maintext1, .intro').animate({
        opacity:1
      },7000);
    })
  })
