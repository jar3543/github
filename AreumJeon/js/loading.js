//로딩이미지 처리
  $(window).on('load',function(){
    $('.bg').fadeOut(2000);
  });


// 로딩이미지가 사라지고 태그(7초뒤에) 띄우기
  $(function(){
    $(window).on('load',function(){
      $('.maintext1').animate({
        opacity:1
      },7000);
    })
  })


  $(function(){
    $(window).on('load',function(){
      $('.intro').animate({
        opacity:1
      },8000);
    })
  })
