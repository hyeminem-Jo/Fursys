// JavaScript Document

/* 메인_배너 */

$(document).ready(function(){

	/*$('.m_visual').mouseover(function(){
		$(this).find('.btn_left').show();
		$(this).find('.btn_right').show();
	});
	$('.m_visual').mouseleave(function(){
		$(this).find('.btn_left').hide();
		$(this).find('.btn_right').hide();
	});*/


	$('.btn_left a').click(function(){
		rollingDirection = 'left';
		autoRolling();
		resetRolling();

		return false;
	});

	$('.btn_right a').click(function(){
		rollingDirection = 'right';
		autoRolling();
		resetRolling();
		return false;
	});


	//click 하면 이미지변함
	$('.cnt img').click(function(){

		if(rollingDirection == 'left')
		{
			bannerNum = parseInt($(this).attr('id').replace('bannerOpt','')) + 1;
		}
		else {
			bannerNum = parseInt($(this).attr('id').replace('bannerOpt','')) - 1;
		}


		autoRolling();
		resetRolling();
		return false;
	});


	autoRolling();
	resetRolling();
	version_chk();
});

var rollingDirection = 'right';
var bannerNum = 4;
var initialLoad = true;

function version_chk() {
	if(navigator.appVersion.indexOf("MSIE 6") != -1) {
		alert('인터넷 익스플로러 6은 지원하지 않습니다. \n인터넷 익스플로러7 또는 8을 이용해주세요.');
	}
}

function autoRolling(){

	var initialNum = bannerNum;

	//0, 1, 2, 3, 4

	if(rollingDirection == 'left')
	{
		bannerNum--;
		//0이면 -1 -> 4 // 1이면 -> 0
	}
	else if(rollingDirection == 'right')
	{
		bannerNum++;
	}

	if(bannerNum > 4)
	{
		bannerNum = 0;
	}
	else if(bannerNum < 0)
	{
		bannerNum = 4;
	}

	for(var i=0;i<5;i++)
	{
		$('#rollingBanner').children().eq(i).hide();
		$('#rollingBehind').children().eq(i).hide();
	}

	$('#rollingBehind').children().eq(bannerNum).show();

	if(initialLoad == true) {
		initialLoad = false;
	}else {
		$('#rollingBanner').children().eq(initialNum).show();
		$('#rollingBanner').children().eq(initialNum).fadeOut(1000);
	}

	$('.cnt img').attr('src',$('.cnt img').attr('src').replace('roll_p.png','roll_n.png'));
	$('.cnt img').eq(bannerNum).attr('src',$('.cnt img').eq(bannerNum).attr('src').replace('roll_n.png','roll_p.png'));
}

function resetRolling()
{
	if(typeof(autoTimer) != 'undefined')
	{
		clearInterval(autoTimer);
	}

	autoTimer = setInterval(function(){
		autoRolling();
	},7000);
}


function fncDetail(id) {
	var frm	= document.frmPerformance;
	frm.elements["keyParam"].value = "performanceView";
	frm.target = "_self";
	frm.action = "/fur_frt/performance/per_view.do?performanceId=" + id;
	frm.submit();
}



