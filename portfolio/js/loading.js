//로딩이미지 처리
  $(window).on('load',function(){
    $('.bg').fadeOut(1000);
  });


// 로딩이미지가 사라지고 텍스트 띄우기
  $(function(){
    $(window).on('load',function(){
      $('.maintext1').animate({
        opacity:1
      },8000);
    })
  })

  $(function(){
    $(window).on('load',function(){
      $('.maintext2').animate({
        opacity:1
      },5000);
    })
  })


  $(function(){
    $(window).on('load',function(){
      $('.intro').animate({
        opacity:1
      },8000);
    })
  })
