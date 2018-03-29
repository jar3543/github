$(function(){//시작

  deskTopSlide=new Swiper('.desktop-slide',{
    navigation:{
      nextEl:'.desktop-slide .swiper-button-next',
      prevEl:'.desktop-slide .swiper-button-prev',
    },
    slidesPerView:3,
    loop:true,
  });

  mobileSlide1=new Swiper('.mobile-slide1',{
    navigation:{
      nextEl:'.mobile-slide1 .swiper-button-next',
      prevEl:'.mobile-slide1 .swiper-button-prev',
    },
    slidesPerView:2,
    loop:true,
  });

  mobileSlide2=new Swiper('.mobile-slide2',{
    navigation:{
      nextEl:'.mobile-slide2 .swiper-button-next',
      prevEl:'.mobile-slide2 .swiper-button-prev',
    },
    slidesPerView:2,
    loop:true,
  });

  // 로그인 팝업 열기
  $('.textchange').on('click',function(){
    $('.popup-login-form-wrap, .icon.icon-cancel').show();
  })
  // 로그인 팝업 닫기
  $('.icon.icon-cancel').on('click',function(){
    $('.popup-login-form-wrap, .icon.icon-cancel').hide();
  })
  // 쇼핑백 팝업 열기
  $('.icon.icon-shopping-bag').on('click',function(){
    $('.popup-icon-shop, .icon.icon-cancel').show();
    console.log('open');
  })
  // 쇼핑백 팝업 닫기
  $('.icon.icon-cancel').on('click',function(){
    $('.popup-icon-shop, .icon.icon-cancel').hide();
    console.log('close');
  })

  // 로그아웃 화면
  //로그인/회원가입 -> My page 로그아웃 (text바꾸기)
  $('.black').on('click',function(){
    $('.textchange').text('My page 로그아웃');
  })

   //네비게이션 focusin/focusout
    $('.gnb-nav li a').on('focusin',function(){
      $('.gnb-nav li ul').show();
      $('.gnb-nav .nav-bg').show();
    $('.gnb-nav li a').on('focusout',function(){
      $('.gnb-nav li ul').hide();
      $('.gnb-nav .nav-bg').hide();
    })
  })

  //모바일 메인 아코디언
  $('#main-accordion a').click(function(e){
    e.preventDefault();
    $(this).next().slideToggle();
  })
  //모바일 푸터 아코디언
  // var $devWidth;
  // var $limitSize=767;
  // $(window).resize(function(){
  //   $devWidth=$('body').width();
  //   if($devWidth<$limitSize){
  //     $('#accordion .tab1').on('click', function(e){
  //       e.preventDefault();
  //       //모바일
  //       $(this).next().stop().slideToggle();
  //     })
  //   }else{
  //     $('#accordion .tab1').on('click', function(e){
  //       e.preventDefault();
  //       $(this).next().css('display','block');
  //     })
  //   }
  // }).resize();

  $('#accordion .tab1').on('click', function(e){
    e.preventDefault();
    $('#accordion .category .fnaviaccodi1').slideToggle();
  })
  $('#accordion .tab2').on('click', function(e){
    e.preventDefault();
    $('#accordion .customer .fnaviaccodi2').slideToggle();
  })

  // 모바일 토글메뉴
   $('#btn-menu').on('click',function(){
     console.log('click');
     $('header').toggleClass('on');
     $('#btn-menu i').toggleClass('icon-menu-1 icon-cancel');
   })


})//종료
