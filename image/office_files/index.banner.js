/*
 * Simple Web Banner
 * On jQuery(version 1.2.6)
 * Copyright (c) 2010 Lee Dong-Hoon <208@ag.co.kr>
 * 

*******************************************************************************/

var banner = {}

	banner.BannerMgr = function(id,instance,items,rollInterval,motionTime,width,height){
		this.id = id;
		this.dStyle = "horizontal";
		this.instance = instance;
		this.items        = items;
		this.rollInterval = rollInterval;
		this.motionTime   = motionTime;
		this.currentNum   = 0;
		this.totalNum     = this.items.length;
		this.width        = width;
		this.height       = height;
		this.intervalId   = 0;
		this.motionId     = 0;
		this.numberingOption = null;
		this.isMotion     = false;

	}

	banner.BannerMgr.prototype = {
		make : function(){
			var str = '';
			str += '<div style="width:'+this.width+'px; height:'+this.height+'px;overflow:hidden;position:relative;">';
			if(this.numberingOption)
			{
				str +=this.numberingHTML();
			}
			var cw;
			var ch;
			if(this.dStyle=="horizontal"){
				cw = this.width*this.totalNum;
				ch = this.height;
			}else{
				ch = this.height*this.totalNum;
				cw = this.width;
			}
			str += '<div style="width:'+cw+'px;height:'+ch+'px;left:0px;">';
			str += this.itemsHTML();
			str += '</div>';
			str += '</div>';

			$("#"+this.id).html(str);

			this.num_backgroundOver(0,-1);
			this.currentNum   = 1;
		    this.startRolling();
		},
		numberingHTML : function(){
			var t;
			var l;
			var p1 = parseInt(this.numberingOption.align.p1);
			var p2 = parseInt(this.numberingOption.align.p2);
			var iw = parseInt(this.numberingOption.size.w);
			var ih = parseInt(this.numberingOption.size.h);
			var g  = parseInt(this.numberingOption.size.g);

			switch(this.numberingOption.align.o){
				case "TL":
					t = p1;
					l = p2;
				break;
				case "TR":
					t = p1;
					l = this.width - (this.totalNum*(iw+g)+p2);
				break;
				case "BL":
					t = this.height - (ih+p1);
					l = p2;
				break;
				case "BR":
					t = this.height - (ih+p1);
					l = this.width - (this.totalNum*(iw+g)+p2);
				break;
			}
			var str = '<div style="position:absolute;z-index:100;top:'+t+'px;left:'+l+'px">';
			for(var i=0 ; i<this.totalNum ; ++i)
			{
				var obj = this.items[i];
				var _id = this.id+"btn"+i;
				str += '<div id= "'+_id+'" style="float:left; width:'+(iw+g)+'px; height:'+iw+'px; cursor:hand; overflow:hidden; background: url('+obj.num+') no-repeat 0 0; background-position:0 0px;"';
				str += 'onclick     = "'+this.instance+'.num_click('+i+');" ';
				str += 'onmouseover = "'+this.instance+'.num_over('+i+');" ';
				str += 'onmouseout  = "'+this.instance+'.num_out('+i+');"></div>';

			}
			str += '</div>';
			return str;
		
		},
		itemsHTML : function(){
			var str = '';

			for(var i=0 ; i<this.totalNum ; ++i)
			{
				var obj = this.items[i];
				var _id = this.id+"item"+i;
				if(this.dStyle == "horizontal"){
					str += '<div id= "'+_id+'" style="position:absolute;left:'+(i*this.width)+'px;float:left;cursor:hand">';
				}else{
					str += '<div id= "'+_id+'" style="position:absolute;top:'+(i*this.height)+'px;cursor:hand">';
				}
				str += '<img  src="'+obj.img+'" ';
				str += 'onclick     = "'+this.instance+'.click('+i+');" ';
				str += 'onmouseover = "'+this.instance+'.over('+i+');" ';
				str += 'onmouseout  = "'+this.instance+'.out('+i+');" border = "0">';
				str+= '</div>';
			}
			return str;
		
		},

///롤링관련 --------------------------------------

		startRolling : function(){
			var _this = this;
			if(this.rollInterval>0){
				this.intervalId = setInterval(function(){
					_this.rolling.call(_this);
				},this.rollInterval);
			}
		},
		stopRolling : function(){
			if(this.rollInterval>0){
				clearInterval(this.intervalId);
			}
		},
		rolling : function(){
			this.pagingAction(1);
		},

///넘버링콘트롤 --------------------------------------

		num_over : function(n){
			this.stopRolling();
		},
		num_out : function(n){
			this.startRolling();
		},
		num_click : function(n){
			if(!this.isMotion)
			this.pagingAction((n+1) - this.currentNum);
		},
		num_backgroundOver : function(n0,n1){
			if(this.numberingOption == null)return;
			var ih = parseInt(this.numberingOption.size.h);
			if(n0>-1)
			$(("#"+this.id+"btn"+n0)).stop().css({backgroundPosition:"0 -"+ih+"px"});
			if(n1>-1)
			$(("#"+this.id+"btn"+n1)).stop().css({backgroundPosition:"0 0px"});
		},

///배너 콘트롤 --------------------------------------

		over : function(n){
			this.stopRolling();
		},
		out : function(n){
			this.startRolling();
		},
		click : function(n){
			var obj = this.items[n];
			if(obj.target == "_blank"){
				window.open(obj.link);
			}else{
				document.location = obj.link;
			}
		},


///이전 다음 ---------------------------------------
		prev : function(){
			if(!this.isMotion)
			this.pagingAction(-1);
		},
		next : function(){
			if(!this.isMotion)
			this.pagingAction(1);
		},
		pagingAction : function(direction){

			var tmpnum = this.currentNum;
				tmpnum+=direction;

			if(tmpnum > this.totalNum)tmpnum = 1;
			if(tmpnum < 1)tmpnum = this.totalNum;

			this.num_backgroundOver(tmpnum-1,this.currentNum-1);

			this.currentNum = tmpnum;

			this.isMotion = true;

			var tgap = this.dStyle == "horizontal"?this.width:this.height;
			var bgap = tgap*this.totalNum;
			var tpro = this.dStyle == "horizontal"?"left":"top";
			//log("this.isMotion = true \n");
			for(var i=0 ; i<this.totalNum ; ++i){
				var obj = this.items[i];
				var idstr = "#"+this.id+"item"+i;
				var pos =  parseInt($(idstr).css(this.dStyle == "horizontal"?"left":"top"));

					if(direction>0 && pos<0){
						pos += bgap;

					}else if(direction<0 && pos>=tgap){
						pos -= bgap;	
					}
					if(this.dStyle == "horizontal"){
						$(idstr).css({"left":pos});
					}else{
						$(idstr).css({"top":pos});
					}
					
					pos -= (direction*tgap);

				if(i == (this.currentNum-1)){
					var _this = this;
					this.motionId = setInterval(function()
					{
						_this.itemMotionComplete.call(_this);
					},this.motionTime);
				}
				if(this.dStyle == "horizontal"){
					$(idstr).animate({"left": pos },this.motionTime);
				}else{
					$(idstr).animate({"top": pos },this.motionTime);
				}
			}
			
		},

		itemMotionComplete : function(){
			//log("this.isMotion = false \n"+this);
			clearInterval(this.motionId);
			this.isMotion = false;
		}

	}

	

	function log(txt){
		var logDiv = document.getElementById("log");
		if(logDiv){
			var str = logDiv.innerHTML;
				str+= txt;
				str+= "<br>";
				logDiv.innerHTML = str;
				$("#log").scrollTop(logDiv.scrollHeight);
		}
		
	}

	



