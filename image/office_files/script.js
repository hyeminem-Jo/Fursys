//오른쪽 마우스 클릭 방지 
function blockRightClick(){
    document.oncontextmenu = new Function('return false');
    document.ondragstart = new Function('return false');
    document.onselectstart = new Function('return false');  
 }

function intPage() {
	blockRightClick();
	
	// item list width correct
	if ($(".sysListt1").length){
		$(".sysListt1 li:nth-child(3n)").css({"width":"214px"});
	}
	
	// award list
	if($(".furAward").length){
		$(".furAward li:nth-child(3n-2)").css("clear","left");
	}
	
	// tab check
	var tcheck = window.location.href.split("&tview=")[1];
	if (!tcheck==0 || !tcheck==null) {
		
		if($("#tabcon").length){
			var target=$("#tabcon").offset().top;
			$('html:not(:animated),body:not(:animated)').animate({scrollTop:target},800);
			var xno = (2*parseInt(tcheck))-1;
			$("#tabcon dt:nth-child("+xno+")").addClass("nowv").next("dd").slideDown(100);
		}
	}
	
	// feature view tab
	$("#tabcon dt").bind("click",function(){
		if($("#tabcon").length){
			if(!$(this).hasClass("nowv")){
			$(this).addClass("nowv").siblings().removeClass("nowv").end().next("dd").slideDown(200).siblings().filter("dd").slideUp(200);
			} else {
				$(this).removeClass("nowv").next("dd").slideUp(200).end().next("dd").filter("*").slideUp(100);
			}
		}
	});	
	$("#tabcon.feature dt").filter(":first").trigger("click");
		
	// panel view
	$("#quickBtn").toggle(function(){
		$("#quick").animate({"width":"309px","height":"600px"},300);
		$("#xnormal").fadeOut(300);
	},function(){
		$("#quick").animate({"width":"30px","height":"170px"},300);
		$("#xnormal").fadeIn(300);
	});
	
	
	// controll 1depth
	$(".pfinder strong.head1d").bind("click",function(){
		var hasCls = $(this).hasClass("nowv");
		if (hasCls) {
			//alert('xx');
			$(this).removeClass("nowv").next("ul").slideUp(150);
			var robj = $(this).find("img");
			robj.attr("src", robj.attr("src").replace("o.",".") );
		} else {
			$("strong.head1d").each(function(){
				$(this).removeClass("nowv").next("ul").slideUp(150);
				var robj = $(this).find("img");
				robj.attr("src", robj.attr("src").replace("o.",".") );
			});
			$(this).addClass("nowv").next("ul").slideDown(150);
			var robj = $(this).find("img");
			robj.attr("src", robj.attr("src").replace(".","o.") );
		}
	});
	
	// controll 2depth.
	$(".pfinder strong.head2d").bind("click",function(e){
		var objpf2d = $(this).hasClass("nowv");
		if (objpf2d) {
			$(this).removeClass("nowv").next("ul").slideUp(150);
		} else {
			$("strong.head2d").each(function(){
				$(this).removeClass("nowv").next("ul").slideUp(150);
			});
			$(this).addClass("nowv").next("ul").slideDown(150);
		}
		//$(this).addClass("nowv").next("ul").slideDown(150);
	});
		
	// product category
	$(".furPclist strong").bind("click", function(){
		if($(".furPclist").length){
			if (!$(this).hasClass("nowv")) {
			var obj = $(".furPclist");
			obj.find("ul").slideUp(200).end().find("strong").removeClass("nowv");
			$(this).next("ul").slideDown(200).end().addClass("nowv");
			} else {
				$(this).next("ul").slideUp(200).end().removeClass("nowv");
			}
		}
	});
	
	$(".optionList dt").toggle(function(){
		$(this).nextAll("dd").slideDown("fast");
	},function(){
		$(this).nextAll("dd").slideUp("fast");
	});

	/*
	// location tab controll		
	$(".mpTab li").click(function(e){
		$(this).addClass("nowv").siblings().removeClass("nowv");
		$(".mpTab li img").each(function(){
			$(this).attr("src", $(this).attr("src").replace("o.",".") );
		});
		var liobj = $(this).find("img");
		liobj.attr("src", liobj.attr("src").replace(".","o.") );
		
	}).filter(":nth-child("+pcd3+")").find("a").trigger("click");
	
	// location pointer controll
	$(".mpointer").click(function(){
		var orel = $(this).attr("rel");
		var otx = $(this).text();
		$(".mpopup").slideUp(200);
		if(pcd3==4){
			$(".xcap").remove();
			//$(".zslide").data('nivoslider').stop();
		}
		var mo = $(this).hasClass("on");
		if(orel){
			$("#mlp"+pcd3+otx+" .title").append("<span class='xcap'>"+orel+"</span>");
		}
		$(".mpointer").removeClass("on");
		if(!mo){
			$(this).addClass("on");
			
			if(pcd3==4){
				$("#mlp"+pcd3+otx+"").slideDown(200).find(".zslide").nivoSlider({
            		effect:'fade',
					slices:1,
					controlNav:true,
					directionNavHide:true,
					controlNavThumbs:false
        		});
			} else {
				$("#mlp"+pcd3+otx+"").slideDown(200);
			}
		}
	}).filter(":first").trigger("click");
	
	// location layer popup window
	$(".mpclose").click(function(){
		if(pcd3==4){
			$(".xcap").remove();
			$(".zslide").data('nivoslider').stop();
		}
		$(".mpopup").slideUp(200);
		$(".mpointer").removeClass("on");
	});
	*/
}

















