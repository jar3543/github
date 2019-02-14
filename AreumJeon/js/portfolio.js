// 네비게이션===================================================================
$(window).scroll(function(){
  var a=$('#about').offset().top;
  var b=$('#skill').offset().top;
  var c=$('#work').offset().top;
  var d=$('#contact').offset().top;
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

  $('nav li a').removeClass('active');
  $('nav li').eq(index).find('a').addClass('active');

  // p (네비 : on 으로 보여주기)
  $('nav li p').removeClass('on');
  $('nav li').eq(index).find('p').addClass('on');

  //네비게이션 a-100지점에 고정시키기
  if(windowTop>=(a-1500)){
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

// 네비게이션 메뉴 눌럿을 때 해당 컨텐츠로 이동하기
$('nav a').click(function(e){
  if(this.hash !==""){
  e.preventDefault();
  var hash=this.hash;
  $('html, body').animate({
    scrollTop:$(hash).offset().top
  },800,function(){
    window.location.href=hash;
    });
  }
})

$(function(){
  $('.real').click(function(){
    $('html,body').stop().animate({
      scrollTop:$('.real_img').offset().top-2000
    },1000,'easeInOutElastic');
  })
})

// 모바일 환경에서의 네이게이션 모습
$(function(){
  $('.nav button').on('click',function(){
    // toggleClass에 클래스를 한개를 적용시키면 해당클래스가 들어간것과 없는것이 번갈아가면서 적용됨.
    $('nav').toggleClass('on');
    // $('nav').addClass('animated','fadeInright');
    // toggleClass에 클래스를 두개를 적용시키면 클래스가 번갈아가면서 적용됨.
    $(this).find('i').toggleClass('fa-bars fa-times');
  })
})


$(function(){
  $('nav ul li').click(function(){
    $('nav').toggleClass('on');
    $('.nav button').find('i').toggleClass('fa-bars fa-times');
  })
})
// 네비게이션 end===============================================================

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
    scrollTop:$('#slide').offset().top-50
  },800);
})



// 스와이퍼 슬라이드 ===================================================
var swiper = new Swiper('.swiper-container', {

      // auto:true,
      speed:1000,
      mousewheelControl: true,
      keyboardControl: true,
      autoplay:false,
      centeredSlides: true,
      loop:false,
      effect: "slide",
      direction: 'vertical',
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
    });




// wow========================================================================
new WOW().init();

// isotope====================================================================
$(function(){
  $('.html,body').css('.overflow','hidden');

  //검색에 사용되는 정규표현식 변수
  //*정규표현식 문자의 패턴을 정해서 그패턴에 맞는 걸 찾아내는 표현식
    var qsRegex;

    //isotope 초기화
    var $grid=$('.grid').isotope();
    //카테고리 버튼 클릭시 필터링처리
    $('#portfolio .nav li').on('click',function(e){
      e.preventDefault();
      $('#portfolio .nav li').removeClass('active');
      $(this).addClass('active');
      var sortValue=$(this).attr('data-sort-value');
      console.log(sortValue);
      $grid.isotope({filter:sortValue});
      searchCount();//카테고리 클릭 시 검색 갯수 정렬
    })

    //검색어 작성 후 검색버튼 누르면 필터링처리
    $('#btn-search').on('click',function(){
      var $quicksearch=$('.quicksearch').val();//텍스트입력창에 작성한 값을 얻는다.
      // console.log($quicksearch);

      qsRegex=new RegExp($quicksearch, 'gi');//grid안에 있는 문자를 전역에서 검색(대소문자 구분없이)
      //gi : global, i:대소문자구분없이
      //검색할 단어를 정규표현식과 일지치하는지 검사 후 일치하면 필터링 처리
      $grid.isotope({filter:function(){
        //삼황연산자 조건식?참일때수행할문장:거짓일때수행할문장
        return qsRegex ? $(this).text().match(qsRegex):true;
        //this -> grid를 가리킨다. text를 읽는다.
      }})
      $('.quicksearch').val('').focus();//다시 검색할 수 있도록 초기화하고 포커스 이동
      searchCount();//검색한 갯수 보여주기
    })

    //작업물 총 수/검색한 수 구하기
    //html(); ->태그를 포함하여 작성, text(); -> 문자
    //text(); ->get , text('안녕하세요'); ->set
    function searchCount(){
      var iso = $('.grid').data('isotope');
      $('.count').html('총 <span class="total">'+$('.grid .item').length+'</span>개'
                        +'/검색 <span class="search">'+iso.filteredItems.length+'</span>개');
    }
    //처음에 한번만 호출
    searchCount();

  })
