    var mask='<div class="mask hid" ></div>';
    var poperBox="";
    function initPoper(title,content,submitFn){
        changeTitle(title,content);
//      $("body").append(mask);
//      $("body").append(poperBox);
        
        $(".mask").removeClass("hid");
        $(".mask").height($(document).height());
        $("#tis").fadeIn();
        $(".mask").on("tap",function () {
            $(this).addClass("hid");
            $("#tis").fadeOut();
        });
        $("#tiBtn").on("tap",function(e){
        	e.stopPropagation();
        	submitFn();
        	 $(".mask").addClass("hid");
            $("#tis").fadeOut();
        	
        });
        $("#tiCtn").on("tap",function (e) {
        	e.stopPropagation();
            $(".mask").addClass("hid");
            $("#tis").fadeOut();
        });
        $("#tiClose").on("tap",function () {
             $(".mask").addClass("hid");
            $("#tis").fadeOut();
        })
    }
    function changeTitle(title,content) {
        poperBox ='<div class="poperDiv hid" id="tis">'+
			'<div class="innerPoper">'+
				'<div class="poperTop">'+
					'<div>'+title+'</div>'+
					'<img class="closePoper" id="tiClose" src="../../images/close.png">'+
				'</div>'+
				'<div class="poperBottom">'+
					'<div class="popContent">'+content+'</div>'+
					'<div class="btnList">'+
						'<input type="button" class="sure" id="tiBtn" value="确定" />'+
						'<input type="button" class="cancel" id="tiCtn" value="取消" />'+
					'</div>'+
				'</div>'+
			'</div>'+

		'</div>'
		};





