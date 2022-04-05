// JavaScript Document

/*     GNB_네비게이션     */
/*$(document).ready(function(){

	var sub_nav_boxWideh = $('.sub_nav_box').width() * 2;
	$('.sub_nav_box').css('width',sub_nav_boxWideh + "px");

});*/

var globalMenuOnOff = 'off';

function globalMenu(menu,mode)
{
	if(mode == 'open')
	{
		globalMenuOnOff = 'on';
		
		$('.sub_nav_box').hide();
		/*$('#sub_'+menu).show();*/
		$('#sub_'+menu).slideDown('fast');	

		for(var i=0;i<$('.menuImg').length;i++)
		{
			$('.menuImg').eq(i).attr('src',$('.menuImg').eq(i).attr('src').replace('_on.png','.png'));
		}

		$('#'+menu).find('.menuImg').attr('src',$('#'+menu).find('.menuImg').attr('src').replace('.png','_on.png'));

		$('#sub_'+menu).bind('mouseleave',function(){
			setTimeout("globalMenu('"+menu+"','close');",500);
		});
	}
	else if(mode == 'close' && globalMenuOnOff == 'off')
	{
		$('#sub_'+menu).hide();
		$('#'+menu).find('.menuImg').attr('src',$('#'+menu).find('.menuImg').attr('src').replace('_on.png','.png'));
	}
}

$(document).ready(function(){
	$('.m_nav .globalMenu').hover(
		function(){
			globalMenu($(this).attr('id'),'open');
		},
		function(){
			globalMenuOnOff = 'off';
			setTimeout("globalMenu('"+$(this).attr('id')+"','close');",500);
		}
	);

	$('.sub_nav_box').hover(
		function(){
			globalMenuOnOff = 'on';
		},
		function(){
			globalMenuOnOff = 'off';
		}
	);
	
	$('.sub_nav_box .sub_nav li').hover(
		function(){
			$(this).addClass('on');
		},
		function(){
			$(this).removeClass('on');
		}
	);
	
	/*$('.sub_nav_box .sub_nav li img').hover(
		function(){
			$(this).attr('src',this.src.replace('.gif','_on.gif'));
		},
		function(){
			$(this).attr('src',this.src.replace('_on.gif','.gif'));
		}
	);*/

	
});

/*     GNB_네비게이션     */

/* LNB_네비게이션 */
var lnbMenuOnOff = 'off';
		
function lnbMenu(menu,mode)
{
	if(mode == 'open')
	{
		$('.lnb').hide();
		/*$('#lnb_'+menu).show();*/
		$('#lnb_'+menu).slideDown('slow');

		for(var i=0;i<$('.lnbImg').length;i++)
		{
			$('.lnbImg').eq(i).attr('src',$('.lnbImg').eq(i).attr('src').replace('_on.gif','.gif'));
		}

		$('#lnbImg_'+menu).attr('src',$('#lnbImg_'+menu).attr('src').replace('.gif','_on.gif'));

		/*$('#lnb_'+menu).bind('mouseleave',function(){
			setTimeout("lnbMenu('"+menu+"','close');",500);
		});*/
	}
	else if(mode == 'close' && lnbMenuOnOff == 'off')
	{
		$('#lnb_'+menu).hide();
		$('#'+menu).find('.lnbImg').attr('src',$('#'+menu).find('.lnbImg').attr('src').replace('_on.gif','.gif'));
	}
}

$(document).ready(function(){
	$('.room_intro_nav .lnbMenu').click(
	
		function(){
		
			lnbMenu($(this).attr('id'),'open');
		}
	);
	

	$('.lnb').hover(
		function(){
			lnbMenuOnOff = 'on';
		},
		function(){
			lnbMenuOnOff = 'off';
		}
	)
	
	$('.lnb li').hover(
		function(){
			$(this).addClass('on');
		},
		function(){
			$(this).removeClass('on');
		}
	);
	
});

/* margin */
$(document).ready(function(){
	$(".numBox:last-child").css("margin","0 0 0 0");					   
	$(".img_list li:odd").css("margin","0 0 0 0");
});

/* 제품파인더_bg gary */
jQuery(function($){
	var loginWindow = $('.mw_login');

	// Hide Window
	loginWindow.find('>.bg').mousedown(function(event){
		loginWindow.removeClass('open');
		return false;
	});
});

/* 제품파인더_슬라이드 */
$(document).ready(function() { 
	
	var NEWproduct_search_box = $('.NEWproduct_search_box').height();
	var NEWproduct_search_box = NEWproduct_search_box + 42;
	$('.NEWproduct_search_box').css('top',-NEWproduct_search_box);
	
    $('.product_search .a').click(function(event) {
		$('.bg_gray').show();
		$('.bg_gray').animate({ bottom: -NEWproduct_search_box }, {
                  duration: 800
                });
        $('.product_re')
			.delay(200)
            .animate(	
                { bottom: -NEWproduct_search_box }, {
                  duration: 800
                });
		$('.btn_close').show(400);
		$('.btn_box').show();
		$('.mw_login').show();
		
		$('.product_search').find('.a').hide();
		$('.product_search').find('.b').delay(1000).show(0);
		$('.product_search').css("top","503px");
    });
    
    $('.product_search .b').click(function(event) {
    	$('.product_search .b').hide();
    	$('.product_search').find('.a').show();
		 $('.product_re')
		 .animate(
		     { bottom: NEWproduct_search_box }, {
		         duration: 1200
		     });	
		 $('.bg_gray').hide();
		 $('.mw_login').hide();	
		 $('.product_search').css("top","0");
    });
    
	
	/*$('.btn_close').click(function(){
		 $('.product_re')
            .animate(
                { bottom: product_search_box }, {
                    duration: 1200
                });	
		 $('.bg_gray').hide();
		 $('.mw_login').hide();
	});*/
	
	/* 통통튀는
		.animate(
			{ bottom: product_search_box }, {
				duration: 1200,
				easing: 'easeOutBounce'
			});	
	*/
	
    $('.header_search a img').click(function(){
		for(i=0 ; i<$('.header_search a img').length ; i++)
		{
			$('.header_search a img')[i].src = $('.header_search a img')[i].src.replace('_on.jpg','.jpg');
			
		};
			$(this).attr('src',this.src.replace('.jpg','_on.jpg'));
	});
});

/* e-카달로그 */
$(document).ready(function() {
	$(".btnE").click(
	  function () {
		$('.e_pl').show();
	  });
	$(".btn_close2").click(
	  function () {
		$('.e_pl').hide();
	  });
});

/* 상품 이미지/단품정보 오버시 박스 활성화 */
$(document).ready(function(){
	
	$('.box_type').append('<div class="cell_hover"></div>');
	$('.info div').append('<div class="info_hover"></div>');
	
	$('.a_box').hover(
		function(){
			$(this).find('.cell_hover').show();
		},
		function(){
			$(this).find('.cell_hover').hide()
		}
	);
	$('.info li').hover(
		function(){
			$(this).find('.info_hover').show();
		},
		function(){
			$(this).find('.info_hover').hide()
		}
	);
	
	$(document).ready(function(){
		$('.cros_pro2 li a').append("<p class='cell_hover'></p>");
		
		$('.cros_pro2 li a').mouseover(function(){
			$(this).find('.cell_hover').show();
		});
		$('.cros_pro2 li a').mouseleave(function(){
			$(this).find('.cell_hover ').hide();
		});
	});
});

/* 상품_색상정보/단품정보 */
$(document).ready(function(){
	$('.color li').eq(3).css('margin','0 0 15px 0');
	$('.info li').eq(2).css('margin','0 0 10px 0');
});

/* 상품_관련정보_높이값 */
$(document).ready(function(){
	var cros_pro = $('.cros_pro').height();
	var cros_pro = cros_pro + 300;
	$('.cros_pro').css('min-height',cros_pro + "px");
});

/* 이미지 갤러리 */
$(document).ready(function(){
	$('.photo li:odd').css('margin','0 0 5px 0');
});

/* 쇼룸_네비게이션 */
/*$(document).ready(function(){
    $('.room_intro_nav li a img').mouseover(function(){
    for(i=0 ; i<$('.room_intro_nav li a img').length ; i++)
    {
        $('.room_intro_nav li a img')[i].src = $('.room_intro_nav li a img')[i].src.replace('_on.gif','.gif');
        
    };
        $(this).attr('src',this.src.replace('.gif','_on.gif'));
    });
});*/

/* 이미지_롤오버 */
$(document).ready(function(){
						   
    $('.img_over').mouseover(function(){
		for(i=0 ; i<$('.img_over').length ; i++)
		{
			$('.img_over')[i].src = $('.img_over')[i].src.replace('_on.gif','.gif');
			
		};
        $(this).attr('src',this.src.replace('.gif','_on.gif'));
    });
	
	$('.img_over').mouseout(function(){
        $(this).attr('src',this.src.replace('_on.gif','.gif'));
    });
	
	$('.img_overPng').mouseover(function(){
		for(i=0 ; i<$('.img_overPng').length ; i++)
		{
			$('.img_overPng')[i].src = $('.img_overPng')[i].src.replace('_on.png','.png');
			
		};
        $(this).attr('src',this.src.replace('.png','_on.png'));
    });
	
	$('.img_overPng').mouseout(function(){
        $(this).attr('src',this.src.replace('_on.png','.png'));
    });
	
	$(document).ready(function(){
	$('.img_overBtn').mouseover(function(){
		for(i=0 ; i<$('.img_overBtn').length ; i++)
		{
			$('.img_overBtn')[i].src = $('.img_overBtn')[i].src.replace('_on.png','.png');
			
		};
		$(this).attr('src',this.src.replace('.png','_on.png'));
	});
	
	$('.img_overBtn').mouseout(function(){
		$(this).attr('src',this.src.replace('_on.png','.png'));
	});
});
		
});

/* 주요_남풉사례_뷰 */
$(document).ready(function(){
	
	$('.point_box_type').append('<div class="cell_hover"></div>');
	
	$('.point_box').hover(
		function(){
			$(this).find('.cell_hover').show();
		},
		function(){
			$(this).find('.cell_hover').hide()
		}
	);
	
});

/* input_focus border */
$(document).ready(function(){
	
	$(':input[type=text]').focus(
		function(){
			$(':input[type=text]').removeClass('t1_on');
			$(':input[type=text]').addClass('t1');
			$(this).addClass('t1_on');
		}
	);
	
	$('#searchWord').focus(
		function(){
			$(this).css({"border":"1px solid red","background":"#fff"});
		}
	);

});

/* 주요 클라이언트 */
function movePixelCalc(num)
{
	var movePixel = 0;
	var currentPos = 0;

	for(var i=0;i<$('.h_list').children().length;i++)
	{
		if(i == num)
	{
		break;
	}

	movePixel += $('.h_list').children().eq(i).height();
}

	currentPos = parseInt($('.h_list').css('top'));

	return movePixel + currentPos;
}
$(document).ready(function(){
	var h_listHeight = $('.h_list').height();
	$('.h_listBox').css('height',h_listHeight);
	
	var aa = $('.h_list').height() - $('.item15_1').height();
	
	$('.h_num li').click(function(){
	
	for(var i=0;i<$('.img_over2').length;i++)
		{
			$('.img_over2').eq(i).attr('src',$('.img_over2').eq(i).attr('src').replace('_on.gif','.gif'));
		}
			$(this).find('img').attr('src',$(this).find('img').attr('src').replace('.gif','_on.gif'));
		
			var menuNum = parseInt($(this).attr('class').replace('item','')) -1;
		
			movePos = movePixelCalc(menuNum);
		
			$('.h_list').animate({'top':'-='+movePos},'slow');
	});
 
});

/* 주요 납품사례 */
var num = 0;

function delivery_text(type,number){
	if(type != 'click'){
		num++;
	}
	if(num > 3)
	{
		num = 0;
	}
	for(var i=0;i<4;i++)
	{
		$('.delivery_text ul').children().eq(i).removeClass('on');
	}

	if(type == 'click'){
		move = Math.abs(number - num);
	
		if(number < num)
		{
			move = move * -1;
		}

		num = number;
		}else
		{
			if(num == 0)
		{
			move = -3;
		}else
		{
			move = 1;
		}
	}

	$('.delivery_text ul').children().eq(num).addClass('on');
	
	var movePixel = move * 660;
		
	$('.point_delivery_box .banner .delivery_img img').hide();
	$('.point_delivery_box .banner .delivery_img img').eq(num).fadeIn('slow');
 
};

$(document).ready(function(){

	$('.delivery_text ul li').click(function(){
		clearInterval(timer);
		
		selectNum = $(this).attr('name').replace('text','');
		
		delivery_text('click',selectNum);
		
		timer = setInterval("delivery_text()",3000);
	});

	var timer = setInterval("delivery_text()",3000);
	
	/*$('.stop').click(
		function(){
			clearTimeout(timer);
		}				 
	);
	$('.play').click(
		function(){
			timer = setInterval("delivery_text()",3000);
		}				 
	);*/
	
});

/* 생산공정 _ 동춘 */
$(document).ready(function() {
	$(".btn_x").click(
	  function () {
		$('.pop_process').hide();
	  });
	$("#pop_a1").click(
	  function () {
		$('#pop_b1').show();
	  });
	$("#pop_a2").click(
	  function () {
		$('#pop_b2').show();
	  });
	$("#pop_a3").click(
	  function () {
		$('#pop_b3').show();
	  });
	$("#pop_a4").click(
	  function () {
		$('#pop_b4').show();
	  });
	$("#pop_a5").click(
	  function () {
		$('#pop_b5').show();
	  });
	$("#pop_a6").click(
	  function () {
		$('#pop_b6').show();
	  });
	
});

/* 회사소개_미디어센터_리스트_메일레이어 */
$(document).ready(function() {
	$(".email").click(
	  function () {
		$('.popupLayer').show();
	  });
	$(".btn_close").click(
	  function () {
		$('.popupLayer').hide();
	  });
});

/* 마지막 border x */
$(document).ready(function(){
	$('.st_inner tr:last-child td').css("border","none");		   
	$('.listOk_box li:last-child .sTitle').css("border","none");
	$('.tableDD:last-child').css({border:"none",margin:"0",padding:"0"});
	$('.storyListView li:last-child').css("border","none");
});

/* page */
$(document).ready(function(){
	$('.paginate2').next().css({border:'none'});
});

/* 탭메뉴 */
$(document).ready(function(){
						   
	/*for(var i=0;i<$('.tabs li').length;i++){
		$('.tabs li').addClass('liTabs'+i);
	}*/
	
	$.each( $('.tabs li'), function(index, value){
		$(this).addClass('liTabs'+index);
	});
	
	$.each( $('.tab1'), function(index, value){
		$(this).addClass('liTabsMemo'+index);
	});
		
	$('.tabs li a img').click(function(){
		for(i=0 ; i<$('.tabs li a img').length ; i++)
		{
			$('.tabs li a img')[i].src = $('.tabs li a img')[i].src.replace('_on.jpg','.jpg');
			
		};
		$(this).attr('src',this.src.replace('.jpg','_on.jpg'));
	});
	
	$('.liTabs0').click(function(){
		$('.liTabsMemo0').show();
		$('.liTabsMemo1').hide();
		$('.liTabsMemo2').hide();
		$('.liTabsMemo3').hide();
		$('.liTabsMemo4').hide();
		$('.liTabsMemo5').hide();
	});
	
	$('.liTabs1').click(function(){
		$('.liTabsMemo0').hide();
		$('.liTabsMemo1').show();
		$('.liTabsMemo2').hide();
		$('.liTabsMemo3').hide();
		$('.liTabsMemo4').hide();
		$('.liTabsMemo5').hide();
	});
	
	$('.liTabs2').click(function(){
		$('.liTabsMemo0').hide();
		$('.liTabsMemo1').hide();
		$('.liTabsMemo2').show();
		$('.liTabsMemo3').hide();
		$('.liTabsMemo4').hide();
		$('.liTabsMemo5').hide();
	});
	
	$('.liTabs3').click(function(){
		$('.liTabsMemo0').hide();
		$('.liTabsMemo1').hide();
		$('.liTabsMemo2').hide();
		$('.liTabsMemo3').show();
		$('.liTabsMemo4').hide();
		$('.liTabsMemo5').hide();
	});
	
	$('.liTabs4').click(function(){
		$('.liTabsMemo0').hide();
		$('.liTabsMemo1').hide();
		$('.liTabsMemo2').hide();
		$('.liTabsMemo3').hide();
		$('.liTabsMemo4').show();
		$('.liTabsMemo5').hide();
	});
	
	$('.liTabs5').click(function(){
		$('.liTabsMemo0').hide();
		$('.liTabsMemo1').hide();
		$('.liTabsMemo2').hide();
		$('.liTabsMemo3').hide();
		$('.liTabsMemo4').hide();
		$('.liTabsMemo5').show();
	});
	
	
});

/* 회사소개_공장 및 종합물류센터 */
$(document).ready(function(){
	$('.com_map .map').click(function(){
		for(i=0 ; i<$('.com_map .map').length ; i++)
		{
			$('.com_map .map')[i].src = $('.com_map .map')[i].src.replace('_on.gif','.gif');
			
		};
		$(this).attr('src',this.src.replace('.gif','_on.gif'));
	});
	
	$('.c_fac01').click(function(){
		$('.tab1').show();
		$('.tab2').hide();
		$('.tab3').hide();
		$('.tab4').hide();
	});
	$('.c_fac02').click(function(){
		$('.tab1').hide();
		$('.tab2').show();
		$('.tab3').hide();
		$('.tab4').hide();
	});
	$('.c_fac03').click(function(){
		$('.tab1').hide();
		$('.tab2').hide();
		$('.tab3').show();
		$('.tab4').hide();
	});
	$('.c_fac04').click(function(){
		$('.tab1').hide();
		$('.tab2').hide();
		$('.tab3').hide();
		$('.tab4').show();
	});
	
	$('.c_cen01').click(function(){
		$('.tab1').show();
		$('.tab2').hide();
	});
	$('.c_cen02').click(function(){
		$('.tab1').hide();
		$('.tab2').show();
	});
});

/* 컨설팅 _ 사례연구 */
$(document).ready(function(){
	if($('.cun_rightBox').find('.memo').css('display') == "block"){
		$('.preBox').css({margin:"0 0 25px 0"});
	}						   
});

/* 사이트맵 */
$(document).ready(function(){
	$('.btnSitemap').click(function(){
		$('.siteMap_box').show();
	});		   
	$('.hBox .close').click(function(){
		$('.siteMap_box').hide();
		$('.viewct_box').hide();
	});
});

/* 공간이야기 */
$(document).ready(function(){
	$('.imgBox li').mouseover(function(){
		$(this).addClass('on');
	});
	$('.imgBox li').mouseleave(function(){
		$(this).removeClass('on');
	});
	
	$(document).ready(function(){
		$('.btnnewsLetter').click(function(){
			$('.newsLetterBox').show();
		});
		$('.btnClose').click(function(){
			$('.newsLetterBox').hide();
		});
	});
	
	$('.storyListLink').mouseover(function(){
		$(this).css("background","#fff");
	});
	$('.storyListLink').mouseleave(function(){
		$(this).css("background","#f2f2f2");
	});
	$('.storyListLink:last-child').css("border-bottom","none");
});

/* LOCATIOBN */
$().ready(function(){
	$('.o_title ul ul li:last-child').css({border:"none"});
	
	$('.o_title .right li').mouseover(function(){
		$('.o_title .right li ul').hide();
		$(this).find('ul').show();
	});
	$('.o_title .right li').mouseleave(function(){
		$(this).find('ul').hide();
	});
	
	$('.o_title .right ul ul a').mouseover(function(){
		$(this).addClass('on');
	});
	$('.o_title .right ul ul a').mouseleave(function(){
		$(this).removeClass('on');
	});
	
});

/* 주제별 보기 */
$(document).ready(function(){
	$('.storyViewBox a').click(function(){
		$(this).next().show();
	});
	$('.btnClose').click(function(){
		$('.storyListView').hide ();
	});
	$('.storyListView li a').mouseover(function(){
		$(this).css({"background":"#f3f3f3"})			
		$(this).append("<span class='blBG'><img src='/fur_frt/images/bl/bl_story.png' /></span>");
	});
	$('.storyListView li a').mouseleave(function(){
		$(this).css({"background":"none"})	
		$(this).find('.blBG').remove();
	});
});

/* height 체크 */
/*$(document).ready(function(){
	var LayHeight = $('.DPNUM2').height();	
	$('.DPNUM1').find('div').css({"height":LayHeight})
});*/

/* 픽토그램 */
function hoverBoxhide(){
	$('.hoverBox').hide();	
}
setTimeout("hoverBoxhide()",2000);

/* 사회공헌활동_생명의 숲 증서내용 보기 */
$(document).ready(function(){
	$('.viewF').click(function(){
		$('.viewct_box').show();	   
	});
});


/* 12.04.05_추가 footer에 groupware */
$(document).ready(function(){
	$('.none-block').mouseover(function(){
		$('.groupwareBtn').show();			   
	});
	$('.groupwareBtn').mouseleave(function(){
		$('.groupwareBtn').hide();			   
	});
});
















