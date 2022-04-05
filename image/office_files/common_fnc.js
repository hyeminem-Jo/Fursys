
function Host(){
	var Dns;
	Dns = location.href;
	Dns = Dns.split("//");
	Dns = Dns[1].substr(0, Dns[1].indexOf("/"));
	return Dns;fncMenuPath
}

/*
 * if ( isMobileBrowser(navigator.userAgent||navigator.vendor||window.opera)){}
 */
function isMobileBrowser(a){
	 return (/android|avantgo|blackberry|blazer|compal|elaine|fennec|hiptop|iphone|ipad|iris|kindle|lge |maemo|midp|mmp|opera mini|palm( os)?|plucker|pocket|pre\/|psp|smartphone|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce; (iemobile|ppc)|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))
}

//태블릿 모델 여부 : 플래시 대신 스크립트 적용 시 사용
function checkUseFlash(){
	var regPattern = /(iPad|iPhone|SHW-M180S|SHW-M180K|SHW-M180L|SHW-M180W|SCH-I800|SPH-P100|SGH-I987)/;

	if(navigator.userAgent.match(regPattern)){
		return false;
	}
	else{
		return true;
	}
}
//애플제품-아이폰,아이패드- 여부 : 동영상 처리 시 사용
function checkIsNotApple(){
	var regPattern = /(iPad|iPhone)/;

	if(navigator.userAgent.match(regPattern)){
		return false;
	}
	else{
		return true;
	}
}

//오른쪽 마우스 클릭 방지
function blockRightClick(){
	$("html").rightClick( function(e) {});
	$("html").rightMouseDown( function(e) {});
	$("html").rightMouseUp( function(e) {});
	$("html").noContext();
}

//아이디 유효성 체크
function isValid_id(str){
    var patten = new Array();
    var msg = new Array();
    var p;
    var ret_msg = new Array();

    patten["not_eng_num"] =/^[a-z0-9]+$/g;  //a-z와 0-9 이외의 문자가 있는지 확인
    msg["not_eng_num"] = "영문 소문자/숫자만 사용가능합니다.";
    patten["len"] = /^\w{6,12}$/;	// 문자열 길이
    msg["len"] = "6~12자리로 사용가능합니다.";
    patten["only_num"] = /[a-zA-Z]/;// 숫자만
    msg["only_num"] = "영문 대/소문자/숫자의 혼용으로 사용가능합니다(숫자만으로는 사용불가).";
    patten["only_alpha"] = /[0-9]/; // 영문만
    msg["only_alpha"] = "영문 대/소문자/숫자의 혼용으로 사용가능합니다(영문 대/소문자만으로 사용불가).";

	 var retVal = checkSpace( str );
	 if( retVal ) {
		 alert("아이디는 빈 공간 없이 연속된 영문 소문자와 숫자만 사용할 수 있습니다.");
		 return false;
	 }

	// 패턴 체크
	var i=0;
	for (x in patten)
	{
		p = eval(patten[x]);
		if(!p.test(str))
		{
			ret_msg[i] = msg[x];
			i++;
		}
	}

	if(i>0) {
		alert("6~12자리의 영문 소문자,숫자 혼용으로 사용가능합니다.");
		return false;
	}
	else return true;
}

//비밀번호 유효성 체크
function isValid_passwd( str )
{

	var patten = new Array();
	var msg = new Array();
	var p;
	var ret_msg = new Array();

	patten["not_eng_num"] =/^[a-zA-Z0-9]{6,12}$/;
	msg["not_eng_num"] = "영문 대/소문자, 숫자의 6~12자리로 사용가능합니다.";
	patten["only_num"] = /[a-zA-Z]/;// 숫자만
	msg["only_num"] = "영문 대/소문자,숫자의 혼용으로 사용가능합니다(숫자만으로는 사용불가).";
	patten["only_alpha"] = /[0-9]/; // 영문만
	msg["only_alpha"] = "영문 대/소문자,숫자의 혼용으로 사용가능합니다(영문 대/소문자만으로 사용불가).";
	// patten["same_4"] = /.{4,}/; // 반복문자 4개는 안됨
	// msg["same_4"] = "반복된 문자 4개 이상은 사용불가 합니다.";

	 var retVal = checkSpace( str );
	 if( retVal ) {
		 alert("비밀번호는 빈 공간 없이 연속된 영문 소문자와 숫자만 사용할 수 있습니다.");
		 return false;
	 }

	// 패턴 체크
	var i=0;
	for (x in patten)
	{
		p = eval(patten[x]);
		if(!p.test(str))
		{
			ret_msg[i] = msg[x];
			i++;
		}
	}

	if(i>0) {
		alert(ret_msg.join('\n'));
		return false;
	}
	else return true;

}

//동일ID 체크 포함함
function isValid_passwd_with_id( str, chk_id )
{

	var patten = new Array();
	var msg = new Array();
	var p;
	var ret_msg = new Array();

	patten["not_eng_num"] =/^[a-zA-Z0-9]{6,12}$/;
	msg["not_eng_num"] = "영문 대/소문자, 숫자의 6~12자리로 사용가능합니다.";
	patten["only_num"] = /[a-zA-Z]/;// 숫자만
	msg["only_num"] = "영문 대/소문자,숫자의 혼용으로 사용가능합니다(숫자만으로는 사용불가).";
	patten["only_alpha"] = /[0-9]/; // 영문만
	msg["only_alpha"] = "영문 대/소문자,숫자의 혼용으로 사용가능합니다(영문 대/소문자만으로 사용불가).";
	// patten["same_4"] = /.{4,}/; // 반복문자 4개는 안됨
	// msg["same_4"] = "반복된 문자 4개 이상은 사용불가 합니다.";

	var retVal = checkSpace( str );
	if( retVal ) {
		alert("비밀번호는 빈 공간 없이 연속된 영문 소문자와 숫자만 사용할 수 있습니다.");
		return false;
	}

	if(!contCheck(str, 4)) return;

	// ID랑 4개 이상 같으면 오류
	if(chk_id.length >= 4) {
		for(var i=3;i<chk_id.length;i++) {
			if(str.indexOf(chk_id.substring(i-3,i+1)) != -1){
				alert('ID와 동일한 4자리수 이상 동일한 비밀번호를 사용할수 없습니다');
		     	return false;
			}
		}
	}

	// 패턴 체크
	var i=0;
	for (x in patten)
	{
		p = eval(patten[x]);
		if(!p.test(str))
		{
			ret_msg[i] = msg[x];
			i++;
		}
	}

	if(i>0) {
		alert(ret_msg.join('\n'));
		return false;
	}
	else return true;

}

function isValid_passwd_with_id2( str, chk_id, msg_id )
{
    var patten = new Array();
    var msg = new Array();
    var p;
    var ret_msg = new Array();

    //patten["not_eng_num"] =/[a-zA-Z0-9_-]$/;  //a-z와 0-9 _ - 이외의 문자가 있는지 확인
    //msg["not_eng_num"] = "영문, 숫자 ,특수기호(_)만 사용가능합니다.";
    //patten["not_eng_num"] =/[a-zA-Z0-9]$/;  //a-z와 0-9 _ - 이외의 문자가 있는지 확인
    patten["not_eng_num"] =/^[a-zA-Z0-9]{6,12}$/;
    msg["not_eng_num"] = "영문 대/소문자, 숫자의 6~12자리로 사용가능합니다.";
    //patten["len"] = /^\w{6,12}$/;	// 문자열 길이
    //msg["len"] = "6~12자리로 사용가능합니다.";
    patten["only_num"] = /[a-zA-Z]/;// 숫자만
    msg["only_num"] = "영문 대/소문자,숫자의 혼용으로 사용가능합니다(숫자만으로는 사용불가).";
    patten["only_alpha"] = /[0-9]/; // 영문만
    msg["only_alpha"] = "영문 대/소문자,숫자의 혼용으로 사용가능합니다(영문 대/소문자만으로 사용불가).";
    //patten["same_4"] = /.{4,}/; // 반복문자 4개는 안됨
    //msg["same_4"] = "반복된 문자 4개 이상은 사용불가 합니다.";

	var retVal = checkSpace( str );
	if( retVal ) {
		 alertMsg( msg_id, "비밀번호는 빈 공간 없이 연속된 영문 소문자와 숫자만 사용할 수 있습니다.");
		 return false;
	}

	if(!contCheckMsg(str, 4, msg_id)) return;

	// ID랑 4개 이상 같으면 오류
	if(chk_id.length >= 4) {
		for(var i=3;i<chk_id.length;i++) {
			if(str.indexOf(chk_id.substring(i-3,i+1)) != -1){
		     	alertMsg( msg_id, "아이디와 동일한 4자리수 이상 동일한 비밀번호를 사용할수 없습니다.");
		     	return false;
			}
		}
	}

	// 패턴 체크
	var i=0;
	for (x in patten)
	{
		p = eval(patten[x]);
		if(!p.test(str))
		{
			//alert(msg[x]);
			alertMsg( msg_id, msg[x]);
			return false;
		}
		i++;
	}

	return true;

}

//동일문자가 이어지면 체크
function contCheck(str, num) {
	var i;
	var cnt = 0;
	for( i=1; i < str.length; i++) {
		if(str.substring(i-1,i) == str.substring(i,i+1)) {
			cnt++;
		}
		else {
			cnt = 0;
		}
		if(cnt >= num-1) {
			alert('동일한 문자를 '+num+'번이상 사용불가능 합니다.')
			return false;
		}
	}
	return true;
}

function contCheckMsg(str, num, msg_id) {
	var i;
	var cnt = 0;
	for( i=1; i < str.length; i++) {
		if(str.substring(i-1,i) == str.substring(i,i+1)) {
			cnt++;
		}
		else {
			cnt = 0;
		}
		if(cnt >= num-1) {
			alertMsg( msg_id, '동일한 문자를 '+num+'번이상 사용불가능 합니다.');
			return false;
		}
	}
	return true;
}

function checkSpace( str )
{
	 if(str.search(/\s/) != -1){
		return true;
	 } else {
		return false;
	 }
}

function ShowFlash(obj,strMediaURL,obj_width,obj_height){
	document.writeln('<OBJECT CLASSID="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ');
	document.writeln(' 	type="application/x-shockwave-flash" \n');
	document.writeln('  CODEBASE="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" ');
	document.writeln(' 	ID='+obj+'  WIDTH='+obj_width+' HEIGHT='+obj_height+'>\n');
	document.writeln('  <PARAM NAME="movie" VALUE="'+strMediaURL+'">\n');
	document.writeln('  <PARAM NAME=play VALUE=true>\n');
	document.writeln('  <PARAM NAME=loop VALUE=true>\n');
	document.writeln('  <PARAM NAME=menu VALUE=true>\n');
	document.writeln('  <PARAM NAME=quality VALUE=high>\n');
	document.writeln('  <PARAM NAME=wmode VALUE=transparent>\n');
	document.writeln('  <EMBED SRC="'+strMediaURL+'" name='+obj+' ');
	document.writeln(' 	type=application/x-shockwave-flash ');
	document.writeln(' 	SWLiveConnect=TRUE ');
	document.writeln(' 	play=true ');
	document.writeln(' 	loop=false ');
	document.writeln(' 	menu=false ');
	document.writeln(' 	width='+obj_width+' ');
	document.writeln(' 	height='+obj_height+' ');
	document.writeln(' 	scale=showall ');
	document.writeln(' 	quality=best ');
	document.writeln(' 	salign=BR ');
	document.writeln(' 	loop=true ');
	document.writeln(' 	pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"></EMBED>\n');
	document.writeln('</OBJECT>\n');
}

function ShowMovie(obj,strMediaURL,obj_width,obj_height){
	document.writeln('<object id="' + obj + '" width="' + obj_width + '" height="' + obj_height + '" ');
	document.writeln('	classid="CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95" ');
	document.writeln('	codebase="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=6,4,7,1112" ');
	document.writeln('	standby="Loading Microsoft Windows Media Player components..." ');
	document.writeln('	type="application/x-oleobject" align="middle">');
	document.writeln('<param name="src" value="' + strMediaURL + '">');
	document.writeln('<param name="FileName" value="' + strMediaURL + '">');
	document.writeln('<param name="ShowControls" value="ture">');
	document.writeln('<param name="ShowStatusBar" value="false">');
	document.writeln('<param name="ShowDisplay" value="false">');
	document.writeln('<param name="ShowPositionControls" value="true">');
	document.writeln('<param name="ShowAudioControls" value="true">');
	document.writeln('<param name="ShowTracker" value="true">');
	document.writeln('<param name="Volume" value="0">');
	document.writeln('<param name="DisplaySize" value="0">');
	document.writeln('<param name="AutoStart" value="true">');
	document.writeln('<param name="AutoRewind" value="true">');
	document.writeln('<embed type="application/x-mplayer2"');
	document.writeln('	pluginspage="http://www.microsoft.com/Windows/Downloads/Contents/Products/MediaPlayer/"');
	document.writeln('	name=MediaPlayer1');
	document.writeln('	showcontrols=1');
	document.writeln('	showstatusbar=0');
	document.writeln('	showdisplay=0');
	document.writeln('	showpositioncontrols=1');
	document.writeln('	showvolumecontrols=1');
	document.writeln('	showtracker=1');
	document.writeln('	volume=0');
	document.writeln('	displaysize=0');
	document.writeln('	autostart=1');
	document.writeln('	autorewind=1');
	document.writeln('	width=' + obj_width + '');
	document.writeln('	height=' + obj_height + '');
	document.writeln('	src="' + strMediaURL + '" filename="' + strMediaURL + '">');
	document.writeln('</embed>');
	document.writeln('</object>');
}

function ShowMusic(obj,obj_width,obj_height){
	document.writeln('<object classid="clsid:22D6F312-B0F6-11D0-94AB-0080C74C7E95" ');
	document.writeln(' 	width="' + obj_width + '" ');
	document.writeln(' 	height="' + obj_height + '" ');
	document.writeln(' 	vspace="1" ');
	document.writeln(' 	hspace="1" ');
	document.writeln(' 	align="middle" ');
	document.writeln(' 	id="Music" ');
	document.writeln(' 	style="left:0px;top:0px;">');
	document.writeln('<param name="AllowChangeDisplaySize" value="true">');
	document.writeln('<param name="AllowScan" value="true">');
	document.writeln('<param name="AnimationAtStart" value="true">');
	document.writeln('<param name="AudioStream" value="-1">');
	document.writeln('<param name="AutoRewind" value="true">');
	document.writeln('<param name="AutoSize" value="false">');
	document.writeln('<param name="AutoStart" value="true">');
	document.writeln('<param name="Balance" value="0">');
	document.writeln('<param name="BufferingTime" value="5">');
	document.writeln('<param name="ClickToPlay" value="true">');
	document.writeln('<param name="CurrentMarker" value="0">');
	document.writeln('<param name="CurrentPosition" value="-1">');
	document.writeln('<param name="CursorType" value="0">');
	document.writeln('<param name="DisplayBackColor" value="0">');
	document.writeln('<param name="DisplayForeColor" value="16777215">');
	document.writeln('<param name="DisplayMode" value="0">');
	document.writeln('<param name="DisplaySize" value="2">');
	document.writeln('<param name="EnableContextMenu" value="true">');
	document.writeln('<param name="Enabled" value="true">');
	document.writeln('<param name="EnableFullScreenControls" value="false">');
	document.writeln('<param name="EnablePositionControls" value="true">');
	document.writeln('<param name="EnableTracker" value="true">');
	document.writeln('<param name="InvokeURLs" value="true">');
	document.writeln('<param name="Language" value="-1">');
	document.writeln('<param name="Mute" value="false">');
	document.writeln('<param name="PlayCount" value="1">');
	document.writeln('<param name="PreviewMode" value="false">');
	document.writeln('<param name="Rate" value="1">');
	document.writeln('<param name="SelectionEnd" value="-1">');
	document.writeln('<param name="SelectionStart" value="-1">');
	document.writeln('<param name="SendErrorEvents" value="true">');
	document.writeln('<param name="SendKeyboardEvents" value="false">');
	document.writeln('<param name="SendMouseClickEvents" value="true">');
	document.writeln('<param name="SendMouseMoveEvents" value="false">');
	document.writeln('<param name="SendOpenStateChangeEvents" value="true">');
	document.writeln('<param name="SendPlayStateChangeEvents" value="true">');
	document.writeln('<param name="SendWarningEvents" value="true">');
	document.writeln('<param name="ShowAudioControls" value="true">');
	document.writeln('<param name="ShowCaptioning" value="false">');
	document.writeln('<param name="ShowControls" value="true">');
	document.writeln('<param name="ShowDisplay" value="false">');
	document.writeln('<param name="ShowGotoBar" value="false">');
	document.writeln('<param name="ShowPositionControls" value="true">');
	document.writeln('<param name="ShowStatusBar" value="false">');
	document.writeln('<param name="ShowTracker" value="true">');
	document.writeln('<param name="TransparentAtStart" value="false">');
	document.writeln('<param name="VideoBorder3D" value="true">');
	document.writeln('<param name="VideoBorderColor" value="0">');
	document.writeln('<param name="VideoBorderWidth" value="0">');
	document.writeln('<param name="Volume" value="2000">');
	document.writeln('<param name="WindowlessVideo" value="false">');
	document.writeln('<embed type="application/x-mplayer2"');
	document.writeln('	pluginspage="http://www.microsoft.com/Windows/Downloads/Contents/Products/MediaPlayer/"');
	document.writeln('	name=MediaPlayer1');
	document.writeln('	AllowChangeDisplaySize=1');
	document.writeln('	AllowScan=1');
	document.writeln('	AnimationAtStart=1');
	document.writeln('	AudioStream=-1');
	document.writeln('	AutoRewind=1');
	document.writeln('	AutoSize=0');
	document.writeln('	AutoStart=1');
	document.writeln('	Balance=0');
	document.writeln('	BufferingTime=5');
	document.writeln('	ClickToPlay=1');
	document.writeln('	CurrentMarker=0');
	document.writeln('	CurrentPosition=-1');
	document.writeln('	CursorType=0');
	document.writeln('	DisplayBackColor=0');
	document.writeln('	DisplayForeColor=16777215');
	document.writeln('	DisplayMode=0');
	document.writeln('	DisplaySize=2');
	document.writeln('	EnableContextMenu=1');
	document.writeln('	Enabled=1');
	document.writeln('	EnableFullScreenControls=0');
	document.writeln('	EnablePositionControls=1');
	document.writeln('	EnableTracker=1');
	document.writeln('	InvokeURLs=1');
	document.writeln('	Language=-1');
	document.writeln('	Mute=0');
	document.writeln('	PlayCount=1');
	document.writeln('	PreviewMode=0');
	document.writeln('	Rate=1');
	document.writeln('	SelectionEnd=-1');
	document.writeln('	SelectionStart=-1');
	document.writeln('	SendErrorEvents=1');
	document.writeln('	SendKeyboardEvents=0');
	document.writeln('	SendMouseClickEvents=1');
	document.writeln('	SendMouseMoveEvents=0');
	document.writeln('	SendOpenStateChangeEvents=1');
	document.writeln('	SendPlayStateChangeEvents=1');
	document.writeln('	SendWarningEvents=1');
	document.writeln('	ShowAudioControls=1');
	document.writeln('	ShowCaptioning=0');
	document.writeln('	ShowControls=1');
	document.writeln('	ShowDisplay=0');
	document.writeln('	ShowGotoBar=0');
	document.writeln('	ShowPositionControls=1');
	document.writeln('	ShowStatusBar=0');
	document.writeln('	ShowTracker=1');
	document.writeln('	TransparentAtStart=0');
	document.writeln('	VideoBorder3D=1');
	document.writeln('	VideoBorderColor=0');
	document.writeln('	VideoBorderWidth=0');
	document.writeln('	Volume=2000');
	document.writeln('	WindowlessVideo=0');
	document.writeln('	width=' + obj_width + '');
	document.writeln('	height=' + obj_height + '');
	document.writeln('</embed>');
	document.writeln('</object>');
}

function hasCheckedRadio(input) {
	if (input != null) {
		if (input.length != null) {
			if (input.length > 1) {
				for (var inx = 0; inx < input.length; inx++) {
					if (input[inx].checked) return true;
				}
			} else {
				if (input.checked) return true;
			}
		} else {
			if (input.checked) return true;
		}
	}
    return false;
}

function hasCheckedBox(input) {
    return hasCheckedRadio(input);
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0; a&&i<a.length&&(x=a[i])&&x.oSrc; i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
	var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
	if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
	d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
	if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
	obj.visibility=v; }
}

/**
 *
 * @param objType
 * 	F1 : 이미지
 * 	F2 : 문서
 * 	F3 : 플래시
 * 	F4 : 미디어(영상)
 * 	F5 : 이미지/문서
 * 	F6 : 이미지/미디어
 * 	F7 : 미디어(영상, 음원)
 * @param objFile
 * 	이미지
 * 		: .gif, .png, .jpg, bmp
 * 		: image/gif, image/png, image/jpeg, image/bmp
 * 	미디어
 * 		: .swf, .flv, .mp3, .wmv
 * 		: application/x-shockwave-flash, video/x-flv, audio/mpeg, video/x-ms-wmv
 * 	문서
 * 		: .txt, .xls, .doc, .pdf, .ppt, .hwp, .zip
 * 		: text/plain, application/vnd.ms-excel, application/msword, application/pdf, application/vnd.ms-powerpoint, application/hwp, application/zip
 *  플래쉬
 *  	: .swf, .flv
 *  	: application/x-shockwave-flash, video/x-flv
 * @return
 */
function checkFileType(objFile, objType){
	var objFileNm = objFile.toLowerCase();	// 파일명 소문자로 변환
	var returnType = "N";

	switch (objType) {
	case "F1" :
		if(/(\.gif|\.jpg|\.jpeg|\.png|\.bmp)$/i.test(objFileNm))	returnType = "Y";
		break;
	case "F2" :
		if(/(\.txt|\.xls|\.doc|\.pdf|\.ppt|\.hwp|\.zip)$/i.test(objFileNm))	returnType = "Y";
		break;
	case "F3" :
		if(/(\.swf|\.flv)$/i.test(objFileNm))	returnType = "Y";
		break;
	case "F4" :
		if(/(\.mp4|\.flv|\.wmv)$/i.test(objFileNm))	returnType = "Y";
		break;
	case "F5" :
		if(/(\.gif|\.jpg|\.jpeg|\.png|\.bmp|\.txt|\.xls|\.doc|\.pdf|\.ppt|\.hwp|\.zip)$/i.test(objFileNm))	returnType = "Y";
		break;
	case "F6" :
		if(/(\.gif|\.jpg|\.jpeg|\.png|\.bmp|\.swf|\.flv|\.mp4|\.wmv)$/i.test(objFileNm))	returnType = "Y";
		break;
	case "F7" :
		if(/(\.swf|\.flv|\.mp4|\.mp3|\.wmv)$/i.test(objFileNm))	returnType = "Y";
		break;
	}
	if(returnType=="Y")	return true
	else 				return false;
}

function CheckSpaceAll(str){
	var index;
	var len;

	while(true) {
		index=str.value.indexOf(" ");
		if(index==-1) break;
		len=str.value.length;
		str.value = str.value.substring(0,index) +
                str.value.substring((index+1),len);
	}
	return str.value;
}


function fncMenuPath(objMenu){
	switch (objMenu) {
	case "0-0-0" :	//메인
		location.href	= "/fur_frt/common/main.do";
		break;
	case "0-0-1" :	//개인정보취급방침
		location.href	= "/fur_frt/common/agree_privacy.do";
		break;
	case "0-0-2" :	//이메일무단수집거부
		location.href	= "/fur_frt/common/agree_email.do";
		break;
	case "0-1-1" :	//퍼시스그룹
		window.open("http://www.fursysgroup.com/index.html");
		break;
	case "0-1-2" :	//글로벌퍼시스
		window.open("http://www.globalfursys.com");
		break;
	case "0-1-3" :	//인재채용
		//window.open("http://recruit.fursys.com");
		window.open("https://fursysgroup.recruiter.co.kr/appsite/company/index");
		break;
	case "0-1-4" :	//iloom
		window.open("http://www.iloom.com");
		break;
	case "0-1-5" :	//sidiz
		window.open("http://www.sidiz.com");
		break;
	case "0-1-6" :	//BAROS
		window.open("http://www.baros.co.kr");
		break;
	case "0-1-7" :	//목훈재단
		window.open("http://www.mokhoon.or.kr/main.do");
		break;
	case "0-1-8" :	//퍼시스 구매 및 입찰 내역 확인 사이트
		window.open("http://scm.fursys.com");
		break;
	case "0-1-9" :	//방문예약
		window.open("http://connectplus.co.kr/sr/showRoom/showroom_resv.do?com_brand=T60F01");
		break;
	case "0-1-10" : // DESKER
		window.open("http://www.desker.co.kr/");
		break;
	case "0-1-11" : // SLOU
		window.open("http://www.slou.co.kr/");
		break;
	case "0-1-12" : // Alloso
		window.open("http://www.alloso.co.kr/");
		break;

	case "0-2-1" : // Fursys FACEBOOK
		window.open("https://www.facebook.com/fursys.official/");
		break;
	case "0-2-2" : // Fursys INSTAGRAM
		window.open("https://www.instagram.com/fursys.official/");
		break;
	case "0-2-3" : // Fursys BLOG
		window.open("https://blog.naver.com/fursys_official");
		break;
	case "0-2-4" : // Fursys Youtube
		window.open("https://www.youtube.com/fursys_official");
		break;
	case "0-2-5" : // Fursys Naver
		window.open("https://post.naver.com/my.nhn?memberNo=6102713");
		break;


	case "1-1-1" :	//오피스 - 데스크 & 패널
		location.href	= "/fur_frt/productInfo/productInfoList.do?keyCategory1=PD_0001&keyCategory2=PD_0003";
		break;
	case "1-1-2" :	//오피스 - 프리미어클래스
		location.href	= "/fur_frt/productInfo/productInfoList.do?keyCategory1=PD_0001&keyCategory2=PD_0004";
		break;
	case "1-1-3" :	//오피스 - 중역용의자
		location.href	= "/fur_frt/productInfo/productInfoList.do?keyCategory1=PD_0001&keyCategory2=PD_0006";
		break;
	case "1-1-4" :	//오피스 - 사무용의자
		location.href	= "/fur_frt/productInfo/productInfoList.do?keyCategory1=PD_0001&keyCategory2=PD_0007";
		break;
	case "1-1-5" :	//오피스 - 회의용의자
		location.href	= "/fur_frt/productInfo/productInfoList.do?keyCategory1=PD_0001&keyCategory2=PD_0008";
		break;
	case "1-1-6" :	//오피스 - 로비의자
		location.href	= "/fur_frt/productInfo/productInfoList.do?keyCategory1=PD_0001&keyCategory2=PD_0009";
		break;
	case "1-1-7" :	//오피스 - 회의&강의 시스템
		location.href	= "/fur_frt/productInfo/productInfoList.do?keyCategory1=PD_0001&keyCategory2=PD_0005";
		break;
	case "1-1-8" :	//오피스 - 소파
		location.href	= "/fur_frt/productInfo/productInfoList.do?keyCategory1=PD_0001&keyCategory2=PD_0010";
		break;
	case "1-1-9" :	//오피스 - 소파테이블
		location.href	= "/fur_frt/productInfo/productInfoList.do?keyCategory1=PD_0001&keyCategory2=PD_0011";
		break;
	case "1-1-10" :	//오피스 - 액세서리
		location.href	= "/fur_frt/productInfo/productInfoList.do?keyCategory1=PD_0001&keyCategory2=PD_0012";
		break;
	case "1-1-11" :	//오피스 - 도서관&기숙사
		location.href	= "/fur_frt/productInfo/productInfoList.do?keyCategory1=PD_0001&keyCategory2=PD_0168";
		break;
	case "1-2-1" :	//헬스케어 - 의료장비
		location.href	= "/fur_frt/productInfo/productInfoList.do?keyCategory1=PD_0002&keyCategory2=PD_0013";
		break;
	case "1-2-2" :	//헬스케어 - 병실
		location.href	= "/fur_frt/productInfo/productInfoList.do?keyCategory1=PD_0002&keyCategory2=PD_0014";
		break;
	case "1-2-3" :	//헬스케어 - 진료실
		location.href	= "/fur_frt/productInfo/productInfoList.do?keyCategory1=PD_0002&keyCategory2=PD_0015";
		break;
	case "1-2-4" :	//헬스케어 - 간호스테이션
		location.href	= "/fur_frt/productInfo/productInfoList.do?keyCategory1=PD_0002&keyCategory2=PD_0016";
		break;
	case "1-2-5" :	//헬스케어 - 업무공간
		location.href	= "/fur_frt/productInfo/productInfoList.do?keyCategory1=PD_0002&keyCategory2=PD_0017";
		break;
	case "1-2-6" :	//헬스케어 - 휴게대기
		location.href	= "/fur_frt/productInfo/productInfoList.do?keyCategory1=PD_0002&keyCategory2=PD_0018";
		break;
	case "1-3-1" :	//랩 - 실험대
		location.href	= "/fur_frt/productInfo/productInfoList.do?keyCategory1=PD_0185&keyCategory2=PD_0186";
		break;
	case "1-3-2" :	//랩 - 기초장비
		location.href	= "/fur_frt/productInfo/productInfoList.do?keyCategory1=PD_0185&keyCategory2=PD_0187";
		break;
	case "1-3-3" :	//랩 - 초중고 과학실
		location.href	= "/fur_frt/productInfo/productInfoList.do?keyCategory1=PD_0185&keyCategory2=PD_0188";
		break;
	case "1-3-4" :	//랩 - 의자
		location.href	= "/fur_frt/productInfo/productInfoList.do?keyCategory1=PD_0185&keyCategory2=PD_0189";
		break;
	case "2-1-0" :	//컨설팅 - 사무환경 컨설팅
		location.href	= "/fur_frt/consulting/con_office.do";
		break;
	case "2-2-0" :	//컨설팅 - 분석방법
		location.href	= "/fur_frt/consulting/con_analys.do";
		break;
	case "2-7-0" :	//컨설팅 - 실적/사례
		location.href	= "/fur_frt/consulting/con_case_study.do";
		break;

	case "2-3-0" :	//컨설팅 - 퍼시스 사무환경지수
		location.href	= "/fur_frt/consulting/con_index.do";
		break;
/*
	case "2-4-0" :	//컨설팅 - 사례연구
		location.href	= "/fur_frt/consulting/con_case_list.do";
		break;
*/

	case "2-5-0" :	//컨설팅 - 컨설팅 문의
		location.href	= "/fur_frt/consulting/con_request.do";
		break;


	case "2-6-0" :	//오피스 컨설턴트
		location.href	= "/fur_frt/consulting/con_oc.do";
		break;
	case "2-6-1" :	//오피스 컨설턴트
		location.href	= "/fur_frt/consulting/con_oc_program.do";
		break;
	case "2-6-2" :	//오피스 컨설턴트
		location.href	= "/fur_frt/consulting/con_oc_recruit.do";
		break;
	case "2-6-3" :	// OC Story
		location.href	= "/fur_frt/consulting/con_oc_story.do";
		break;

	case "3-1-0" :	//납품실적 - 리스트
		location.href	= "/fur_frt/performance/per_list.do";
		break;
	case "3-2-0" :	//납품실적 - 클라이언트 목록
		location.href	= "/fur_frt/performance/per_client.do";
		break;
	case "4-1-1" :	//리서치 - R&D 센터 소개
		location.href	= "/fur_frt/research/res_intro.do";
		break;
	case "4-1-2" :	//리서치 - 디자인 철학
		location.href	= "/fur_frt/research/res_design.do";
		break;
	case "4-1-3" :	//리서치 - 연혁
		location.href	= "/fur_frt/research/res_history.do";
		break;
	case "4-1-4" :	//리서치 - 수상 및 인증
		location.href	= "/fur_frt/research/res_award.do";
		break;
	case "4-1-5" :	//리서치 - 역량
		location.href	= "/fur_frt/research/res_capacity.do";
		break;
	case "4-1-6" :	//리서치 - 글로벌 파트너
		location.href	= "/fur_frt/research/res_globalpartner.do";
		break;
	case "4-1-7" :	//리서치 - 공간과 일하는 방식
		location.href	= "/fur_frt/research/res_spaceworkway.do";
		break;
	case "4-2-0" :	//리서치 - 공간이야기 메인
		location.href	= "/fur_frt/research/space_main.do";
		break;
	case "4-2-1" :	//리서치 - 공간이야기 리스트
		location.href	= "/fur_frt/research/space_list.do";
		break;
	case "4-2-2" :	//리서치 - 뉴스레터 해지
		location.href	= "/fur_frt/research/newsletter.do";
		break;
	case "4-3-0" :	//리서치 - 퍼시스북스 리스트
		location.href	= "/fur_frt/research/book_list.do";
		break;

	/* 회사 소개 Renewal (2017. 08. 17, hyunsu han) */

	/*case "5-1-1" :	//회사소개 - 퍼시스소개
		location.href	= "/fur_frt/company/fursys.do";
		break;*/
	/*case "5-1-2" :	//회사소개 - 숫자로 보는 퍼시스
		location.href	= "/fur_frt/company/digitallyFursys.do";
		break;*/

	case "5-1-1" :	//회사소개 - 퍼시스그룹 가치관
		location.href	= "/fur_frt/company/groupValues.do";
		break;
	case "5-1-2" :	//회사소개 - 핵심경영원칙
		location.href	= "/fur_frt/company/coreRule.do";
		break;
	case "5-1-3" :	//회사소개 - 사회공헌
		location.href	= "/fur_frt/company/contributePublic.do";
		break;
	case "5-1-4" :	//회사소개 - 연혁
		location.href	= "/fur_frt/company/history.do";
		break;


	case "5-2-1" :	//퍼시스 - 브랜드 소개
		location.href	= "/fur_frt/company/fursys.do";
		break;
	case "5-2-2" :	//퍼시스 - 사무환경이 문화를 만듭니다
		/*location.href	= "/fur_frt/company/netBranch.do";*/
		break;


	case "5-3-1" :	//퍼시스 네트워크 - 본사
		location.href	= "/fur_frt/company/netHeadOffice.do";
		break;
	case "5-3-2" :	//퍼시스 네트워크 - 지역센터 및 쇼룸
		location.href	= "/fur_frt/company/netBranch.do";
		break;
	case "5-3-3" :	//퍼시스 네트워크 - 공장
		location.href	= "/fur_frt/company/netFactory.do";
		break;
	case "5-3-4" :	//퍼시스 네트워크 - 종합물류센터
		location.href	= "/fur_frt/company/netDistributionCenter.do";
		break;

	case "5-4-1" :	//미디어센터
		location.href	= "/fur_frt/notice/noticeList.do";
		break;

	case "5-5-1" :	//IR - 투자개요
		location.href	= "/fur_frt/investment/investmentView.do";
		break;
	case "5-5-2" :	//IR - 주가정보
		location.href	= "/fur_frt/company/irStockInfo.do";
		break;
	case "5-5-3" :	//IR - 결산공고
		location.href	= "/fur_frt/account/accountList.do";
		break;
	case "5-5-4" :	//IR - IR문의
		location.href	= "/fur_frt/requestIr/requestIrForm.do";
		break;


	case "6-1-0" :	//고객서비스 - 상담신청
		location.href	= "/fur_frt/requestAdvice/requestAdviceForm.do";
		break;
	case "6-2-0" :	//고객서비스 - 카탈로그신청
		location.href	= "/fur_frt/requestCatalog/requestCatalogForm.do";
		break;
	case "6-3-0" :	//고객서비스 - Q&A신청
		location.href	= "/fur_frt/requestAdvice/requestAdviceForm.do";
		break;
	case "6-4-0" :	//고객서비스 - A/S신청
		location.href	= "/fur_frt/requestAs/requestAsForm.do";
		break;
	case "6-5-0" :	//고객서비스 - 쇼룸안내
		location.href	= "/fur_frt/showRoom/showRoomSeoul.do";
		break;
	case "6-6-0" :	//고객서비스 - 대리점안내(일반대리점 검색)
		location.href	= "/fur_frt/dealer/dealerList.do";
		break;
	case "6-6-1" :	//고객서비스 - 대리점 개설안내
		location.href	= "/fur_frt/dealer/dealerOpenList.do";
		break;
	case "6-6-2" :	//고객서비스 - 대리점안내(전시대리점 소개)
		location.href	= "/fur_frt/dealer/dealerDisplay.do";
		break;
	case "6-7-0" :	//고객서비스 - 협력업체 등록안내
		location.href	= "/fur_frt/cooperation/cooperationRegister.do";
		break;
	case "6-8-0" :	//고객서비스 - 해외수출 프로그램 안내
		location.href	= "/fur_frt/overseas/overseasBusiness.do";
		break;
	default :
		location.href	= "/fur_frt/common/main.do";
		break;
	}
}
