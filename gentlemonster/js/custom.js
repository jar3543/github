$(document).ready(function(){


	//#navi li를 클릭햇을 때
	$("#navi li").on("click",function(){

		//변수 i에 현재 클릭한 li의 순서 값을 저장
		var i = $(this).index();
		//변수 posNavi에 변수 i와 1000을 곱한 값을 저장
		var posNavi = 1000*i;
		//모든 #navi li와 article의 클래스를 제거
		$("#navi li, article").removeClass();
		//현재 클릭한 #navi li에만 클래스를 추가
		$(this).addClass("on");
		//문서의 스크롤 거리를 변수 posNavi에 저장한 값으로 변경
		$("html,body").scrollTop(posNavi);
	});



	//변수 numAc에 article의 갯수 저장
		var numAc = $("article").size();
		//변수 widSec에 article의 넓이에 개수를 곱한 값을 저장(article요소의 총 넓이)
		var widSec = 200*numAc;
		//변수 widTital에 widSec에 600을 더한 값을 저장(패널이 하나 열렸을시의 총 넓이)
		var widTotal = widSec+600;

		//변수 widTotal에 저장된 넓이를 section의 넓이값으로 대입
		$("section").width(widTotal);
		//변수 widSec에 저장된 넓이를 body의 높이값으로 대입
		$("body").height(widSec);
		//문서의 스크롤 거리를 변수 widSec의 넓이만큼 변경
		$("html,body").animate({"scrollTop":widSec},2000);




	//문서를 제일 아래쪽인 4000 위치로 스크롤한다
	$("html,body").scrollTop(4000);




	//브라우저를 스크롤할 때
	$(window).on("scroll",function(){
		//변수 scroll에 현재 스크롤한 만큼의 거리를 저장
		//scrollTop = height
		var scroll = $(this).scrollTop();
		//section의 left 값을 스크롤한 거리만큼 마이너스 값으로 이동
		$("section").stop().animate({"left":-scroll},600);
	});





	//해당 article의 h2를 클릭했을 때
	$("article h2").on("click",function(e){
		e.preventDefault();


		//변수 index에 현재 클릭한 h2의 부모인 article의 순서 값을 저장
		var index = $(this).parent().index();
		//변수 src에 현재 클릭한 h2의 자식 요소인 a의 href 값을 저장
		var src = $(this).children("a").attr("href");
		//변수 posAc에 현재 클릭한 article의 순서 값에 200을 곱한 값을 저장
		var posAc = 200*index;

		//먼저 모든 article의 'on' 클래스를 지움
		$("article").removeClass("on");


		//내가 클릭한 순서의 article에만 'on' 클래스 추가
		$(this).parent().addClass("on");
		//모든 article p img의 이미지 속성 값을 지움
		$("article p img").attr({"src":""});
		//현재 클릭된 article의 형제 요소 중 p를 찾아 다시 그 자식인 img의 주소 값을
		//변수 src 값으로 변경
		$(this).siblings("p").children("img").attr({"src":src});
		//문서의 스크롤 위치 값을 변수 posAc 값으로 변경
		$("html,body").scrollTop(posAc);


	});



	//닫기 버튼 클릭 시
	$("span").on("click",function(){
		//모든 article의 'on'의 클래스 제거
		$("article").removeClass("on");
	});


	// 메뉴 토클
	$("#btn_menu").on("click",function(){
		$("header").toggleClass("on");
		$(this).children("i").toggleClass("fa-bars fa-times");
	})

	// 로그인 팝업
	$('#btn_login').on('click',function(){
		$('.popup_login').slideDown();
	})

	//로그인 input포커스
	$('#id, #password').on('focus',function(){
		$(this).prev('label').addClass('change');
	}).on('focusout',function(){
		$(this).prev('label').removeClass('change');
	})

	//팝업닫기
	 $('.popup .fa-times').on('click',function(){
		 $('.popup').slideUp();
	 })

	 //통합검색창
	var searchFlag=true;
	$('#btn_search_open').on('click',function(){
		if(searchFlag){
			$(this).find('span').text('close');
			searchFlag=false;
		}else{
			$(this).find('span').text('search');
			$('.search_form input').val('');
			searchFlag=true;
		}
		$(this).find("i").toggle("fas fa-times");
		$('.search_form').toggle();
	})











});//end
