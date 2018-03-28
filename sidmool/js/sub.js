// 상세 페이지 네비게이션
$(function(){
  $('#box1').click(function(){
    $('html, body').stop().animate({
      scrollTop:'1100'
    },1000,'easeInOutExpo');
  })

  $('#box3').click(function(){
    $('html, body').stop().animate({
      scrollTop:'8950'
    },1000,'easeInOutExpo');
  })

  $('#box4').click(function(){
    $('html, body').stop().animate({
      scrollTop:'9550'
    },1000,'easeInOutExpo');
  })

  // 필독공지 모달 팝업 열기/닫기
  $('#btn-modal').click(function(){
    $('#myModal2').modal('toggle');
  })
  $('#btn-modal-close').click(function(){
    $('#myModal2').modal('hide');
  })

  // 리뷰 게시판 툴팁 호출
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


})
