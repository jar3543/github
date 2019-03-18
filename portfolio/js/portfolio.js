// 네비게이션===================================================================
$(window).scroll(function(){
  var a=$('#about').offset().top;
  var b=$('#skill').offset().top;
  var c=$('#work').offset().top;
  var d=$('#contact').offset().top-100;
  var windowTop=$(window).scrollTop();
  console.log(a,b,c,d,windowTop);

  var index;
  if(windowTop>=a && windowTop<b){
    index=1;
  }else if(windowTop>=b && windowTop<c){
    index=2;
  }else if(windowTop>=c && windowTop<d){
    index=3;
  }else if(windowTop>=d){
    index=4;
  }

  $('.nav ul li a').removeClass('active');
  $('.nav ul li').eq(index).find('a').addClass('active');

  // p (네비 : on 으로 보여주기)
  $('.nav ul li p').removeClass('on');
  $('.nav ul li').eq(index).find('p').addClass('on');

  //네비게이션 a-100지점에 고정시키기
  if(windowTop>=(a-100)){
    $('header').addClass('fixed');
    $('.nav button').addClass('fixed');
    $('#goTop').addClass('on');
    $('#goDown').addClass('on');
  }else{
    $('header').removeClass('fixed');
    $('.nav button').removeClass('fixed');
    $('#goTop').removeClass('on');
    $('#goDown').removeClass('on');
  }

})//scroll 이벤트 종료==========================================================



// 슬라이드 ===========================================================
var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
//end==========================================================================



// 네비게이션 메뉴 눌럿을 때 해당 컨텐츠로 이동하기
$('.nav ul li a').click(function(e){
  if(this.hash !==""){
  e.preventDefault();
  var hash=this.hash;
  $('html, body').animate({
    scrollTop:$(hash).offset().top-100
  },800,function(){
    window.location.href=hash;
    });
  }
})



// 모바일 환경에서의 네이게이션 모습==============================================
$(function(){
  $('div.nav button').on('click',function(){
    $('.nav').toggleClass('on');
    $(this).find('i').toggleClass('fa-bars fa-times');
  })
})

$(function(){
  $('.nav ul li').click(function(){
    $('.nav').toggleClass('on');
    $('.nav button').find('i').toggleClass('fa-bars fa-times');
  })
})
//end==========================================================================



// home으로 가기
$('#ha').click(function(){
  console.log('home');
  $('html, body').animate({
    scrollTop:0
  },800);
})

// 맨위로 가기
$('#goTop').click(function(){
  $('html, body').animate({
    scrollTop:0
  },800);
})

// 맨아래로 가기
$('#goDown').click(function(){
  $('html, body').animate({
    scrollTop:4900
  },800);
})

// 아래로 클릭 시, 메인 슬라이드 보여주기
$('.intro button').click(function(){
  $('html, body').animate({
    scrollTop:$('#about').offset().top-50
  },800);
})




// wow========================================================================
new WOW().init();

// portfolio - isotope====================================================================
$(function(){
  $('.html,body').css('.overflow','hidden');

    var qsRegex;

    //isotope 초기화
    var $grid=$('.grid').isotope();
    //카테고리 버튼 클릭시 필터링처리
    $('#portfolio ul li').on('click',function(e){
      e.preventDefault();
      $('#portfolio ul li').removeClass('active');
      $(this).addClass('active');
      var sortValue=$(this).attr('data-sort-value');
      console.log(sortValue);
      $grid.isotope({filter:sortValue});
      searchCount();//카테고리 클릭 시 검색 갯수 정렬
    })


})//end=======================================================================



// about_button 메세지 띄우기
$('.about_button button').on('click',function(){
  alert('준비중입니다.');
  console.log('준비중입니다.');
})
// sns 메세지 띄우기
$('.sns li a img:nth-child(1)').on('click',function(){
  alert('준비중입니다.');
  console.log('준비중입니다.');
})
