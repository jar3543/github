var starLength=50;
for(var i=0; i<starLength; i++){
  if(i%2==0){
    $('.main_parallax_bg').append('<a href="#"></a>');
  }else{
    $('.main_parallax_bg').append('<a href="#"></a>');
  }
}
console.log("별의 수:",starLength);
//함수 호출(처음에 한번만 실행됨.)
starMove();

//디바이스 크기 리사이징
$(window).resize(function(){
  //크기가 변경될 때마다 별 이동
  starMove();
})


//별 이동하기
function starMove(){
  for(var i=0; i<starLength; i++){

    var maxX=$('.main_parallax_bg').width();
    var maxY=$('.main_parallax_bg').height();

    var x=Math.floor(Math.random()*maxX);//0~최대max값까지의 정수가 랜덤으로 발생
    var y=Math.floor(Math.random()*maxY);

    console.log(x,y);
    $('.main_parallax_bg a').eq(i).css({
      'left':x,
      'top':y,
    })
  }
}
//star end
