$(function(){
  //팝업열기
    $('img').click(function(){
      var name=$(this).attr('alt');
      var src=$(this).attr('src');

      $('#popup h3').text(name);
      $('#popup img').attr({
        'src':src,
        'alt':name
      })
      $('#popup').fadeIn();
    })

  //men에 있는 이미지를 클릭했을 때 팝업띄우기
    $('#men .contents').click(function(){
      var src=$(this).prev().attr('src');
      var name=$(this).prev().attr('alt');
      $('#popup h3').text(name);
      $('#popup img').attr({
        'src':src,
        'alt':name
      })
      $('#popup').fadeIn();
    })

  //팝업 닫기 == 아이디가 팝업(닫기버튼),클로즈(팝업백그라운드)클릭 시, 닫힌다.
    $('#close,#popup').click(function(){
      $('#popup').fadeOut();
    })

  //스크롤을 하단으로 일정길이만큼 이동시에 위로가기 버튼 활성화
    $(window).scroll(function(){
      var windowTop=$(window).scrollTop();

      console.log(windowTop);
      if(windowTop > 100){//스크롤의 위치값이 100보다 크면 버튼 활성화
        $('#goTop').addClass('on');
      }else{
        $('#goTop').removeClass('on');//100보다 작아지면 버튼 비활성화
      }

    }).scroll();

  //위로 가기 버튼 클릭 시, 스크롤이 상단으로 이동
    $('#goTop').click(function(){
      $('html, body').animate({
        scrollTop:0
      }, 1000)
    })

    //네비게이션 메뉴 클릭 시 해당 위치로 이동처리:active 초기화->옮긴다
    $('nav ul li a').click(function(){
      //메뉴활성화위치 변경
      $('nav ul li a').removeClass('active');
      $(this).addClass('active');

      var href=$(this).attr('href');
      console.log(href);
      $('html, body').stop().animate({
        scrollTop:($(href).offset().top)
      }, 1000)
    })

    //슬라이드 이미지
    var i=0;//증가, 감소를 위한 인덱스 변수
    //이전버튼 눌렀을 때
    $('.prev').click(function(){
      i--;//감소
      if(i<0){//i의 값이 3보다 작아지면
        i=3;//최대값으로 변경
        $('#msg').text('마지막이미지로 이동').fadeIn(2000).fadeOut();
      }
      console.log(i);
      $('.slide-contents ul').animate({
        'left':-(i*260)
      }, 1000)
    })

    //다음버튼을 눌럿을 때
    $('.next').click(function(){
      i++;//증가
      console.log(i);
      if(i>3){
        i=0;//최소값으로 변경
        $('#msg').text('첫이미지로 이동').fadeIn(2000).fadeOut();
      }
      $('.slide-contents ul').animate({
        'left':-(i*260)
      }, 1000)
    })






})
//종료
