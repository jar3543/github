$(function(){
  var $devWidth;
  var $limitSize=767;

  $(window).resize(function(){
    $devWidth=$('body').width();
    slideFlag=true;
    slideIndex=0;
    slideWidth=$devWidth;
    slideLength=$('.main_slide .slide > ul > li').length;
    $('.main_slide .slide > ul').width(slideWidth*slideLength);
    $('.main_slide .slide > ul > li').width(slideWidth);
  }).resize();

  // 슬라이드 이미지(pc)
  var mainSlideBG=['images/main-slide.png',
                    'images/main-slide1.png'];

    $('.main_slide .slide > ul > li').each(function(index){
      $(this).css('backgroundImage','url('+mainSlideBG[index]+')');
    });

  // pagination 설정
  for(var i=0; i<slideLength; i++){
    $('.pagination ul').append('<li><a href="#"><span class="skip">'+(i+1)+'</span></a></li>');
    if(i==0){
      //첫번째 리스트가 활성화되도록 처리
      $('.pagination li').addClass('active');
    }
  }

  //이전/다음 버튼 방향 초기화(다음을 기본으로 설정)
  var arrow=$('.slide .icon-right-open');

  //자동재생(5초마다 실행)
  play=setInterval(slide,5000);

  //슬라이드 함수작성
  function slide(){
    if(slideFlag){
      //다음에 slide함수를 호출 시 조건을 타지않도록 막아줌.(중복클릭을 막아줌)
      slideFlag=false;
      //페이지 활성화 초기화시키기(페이지가 중복되게 활성화되는 것을 방지함)
      $('.pagination li').removeClass('active');
      if(arrow.hasClass('icon-left-open')) slideIndex--;//이전이면 1감소
      else slideIndex++;//다음이면 1증가
      if(slideIndex < 0) slideIndex=slideLength-1;
      if(slideIndex >= slideLength) slideIndex=0;

      $('.slide > ul').animate({
        'left':-(slideIndex*slideWidth)
      },1000,function(){
        //슬라이드가 이동되고 난 다음에 다시 이동될 수 있도록 활성화
        slideFlag=true;
      })

      //현재 슬라이드에 해당되는 페이징 활성화
      $('.pagination li').eq(slideIndex).addClass('active');
    }
  }

  //정지시키는 함수작성
  function stop(){
    $('.slide .pagination button').removeClass('icon-pause').addClass('icon-play');
    controlBtn=false;
    clearInterval(play);//자동재생 정지시키기
  }

  //정지/재생버튼
  var controlBtn=true;
  $('.pagination button').on('click',function(){
    // console.log('정지');
    if(controlBtn){//정지
    stop();
  }else{//재생
    //다시 5초마다 돌아가도록 수행
    play=setInterval(slide,5000);
    $('.slide .pagination button').removeClass('icon-play').addClass('icon-pause');
    controlBtn=true;
    }
  })

  //이전/다음버튼
  $('.slide > button').on('click',function(){
    arrow=$(this)//이전/다음버튼
    stop();//자동재생 정지
    slide();//슬라이드이동처리
  })

  //페이지버튼(동적으로 만들어진 요소의 경우 아래의 패턴을 사용함.)
  $('.pagination').on('click','a',function(e){
    e.preventDefault();
    stop();//자동재생정지
    $('.pagination li').removeClass('active');
    var pageIndex=$('.pagination a').index(this);//클릭한 대상의 인덱스값 구하기
    $('.pagination li').eq(pageIndex).addClass('active');
    $('.slide > ul').animate({
      'left':-(pageIndex*slideWidth)
    },1000);
    //*중요:클릭한 인덱스값으로 슬라이드 인덱스값을 동일하게 변경처리
    slideIndex=pageIndex
  })

  // $('.slide > button').on('click',function(){
  //   console.log('클릭');
  // })




})
