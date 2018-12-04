var swiper1=new Swiper('.swiper1',{
  speed:600,
  parallax:true,
  direction:'vertical',
  pagination:{
    el:'.swiper-pagination',
    clickable:true,
  },
  navigation:{//수직
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev',
  },
  mousewheel:true,
  keyboard:{
    enabled:true,
  }
})//swiper 기본세팅

// 백그라운드 색상을 배열에 저장
var bgArray=['#291750','#36175e','#553285','#7b52ab'];

//슬라이드가 전환될 때 이벤트
// slideChange:함수 이름
swiper1.on('slideChange',function(){
  // console.log('페이지 전환됨.');

  // 페이지 전환 시 안내문구 제거
  // class 제거 = removeClass('') ----> .(점)안붙임 / 요소 제거 = remove
  // 버튼의 바운스 기능 제거,안내텍스트 제거
  $('.swiper-button-next').removeClass('bounce').find('strong').remove();

  var activeIndex=swiper1.activeIndex;
  console.log("현재페이지:",activeIndex);
  // 기본배경색상
  var bg="#291750";
  // 백그라운드 색상을 페이지가 변경될 때마다 변경처리 3가지 방법

  // switch (activeIndex) {
  //   case 0: bg=bgArray[0]; break;
  //   case 1: bg=bgArray[1]; break;
  //   case 2: bg=bgArray[2]; break;
  //   case 3: bg=bgArray[3]; break;
  // }

  // $('.parallax-bg').css('background',bgArray[0]); ========= 고정값

  $('.parallax-bg').css('background',bgArray[activeIndex]);

})

// 처음에 한번 실행하는 코드 작성 (별 만들기)
var starLenth=400;
for(var i=0; i<starLenth; i++){ //별의 수 만큼 반복한다
  if(i%2==0){//i를 2로 나눳을 때 0이 되는 경우,짝수번째
    $('.parallax-bg').append('<i class="fa fa-star" aria-hidden="true"></i>');
  }else{
    $('.parallax-bg').append('<i class="fa fa-star-o" aria-hidden="true"></i>');
  }
}
console.log('별의 수:',starLenth);
// 함수 호출(처음에 한번만 실행됨)
starMove();

//디바이스 크기 리사이징
$(window).resize(function(){
  // 크기가 변경될 때 마다 별 이동
  starMove();
})

// 함수호출
starMove();

// 별 이동하기
function starMove(){
  for(var i=0; i<starLenth; i++){
    // 별의 이동할 수 있는 최대 max값
    var maxX=$('.parallax-bg').width();
    var maxY=$('.parallax-bg').height();
    // console.log(maxX,maxY);

    // 별이 이동되는 위치값을 랜덤으로 구하기(소수점버리기)
    var x=Math.floor(Math.random()*maxX);//0~최대max값까지의 정수가 랜덤으로 발생
    var y=Math.floor(Math.random()*maxY);

    // 별의 색깔 랜덤으로 구하기(반올림처리)
    //알록달록한 별
    // var r=Math.round(Math.random()*255);
    // var g=Math.round(Math.random()*255);
    // var b=Math.round(Math.random()*255);

    //노란색 별
    var r=255;
    var g=Math.round(Math.random()*41)+214;
    var b=Math.round(Math.random()*255);

    //별의 크기
    var size=Math.round(Math.random()*10)+5;//5(최소값)~15

    console.log(x,y);
    $('.parallax-bg i').eq(i).css({
      'left':x,/*'x'  ====  문자열*/
      'top':y,
      'color':'rgb('+r+','+g+','+b+')',//문자열과 변수를 구분하기 위함','
      'fontSize':size
    })
    //기본적으로 위치설정이 되어있어야 위의 값대로 이동이 가능함.



  }
}
