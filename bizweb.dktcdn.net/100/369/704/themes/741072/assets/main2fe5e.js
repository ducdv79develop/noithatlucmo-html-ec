$(document).ready(function ($) {
	"use strict";
	awe_backtotop();
	awe_owl();
	awe_tab();
	if(navigator.userAgent.indexOf("Speed Insights") == -1) {
		awe_lazyloadImage();
	}
});

$(document).on('click','.overlay, .close-popup, .btn-continue, .fancybox-close', function() {   
	awe_hidePopup('.awe-popup'); 	
	setTimeout(function(){
		$('.loading').removeClass('loaded-content');
	},500);
	return false;
})

function awe_lazyloadImage() {
	var ll = new LazyLoad({
		elements_selector: ".lazy",
		threshold: 100
	});
} window.awe_lazyloadImage=awe_lazyloadImage;


/********************************************************
# SHOW NOITICE
********************************************************/
function awe_showNoitice(selector) {
	$(selector).animate({right: '0'}, 500);
	setTimeout(function() {
		$(selector).animate({right: '-300px'}, 500);
	}, 3500);
}  window.awe_showNoitice=awe_showNoitice;

/********************************************************
# SHOW LOADING
********************************************************/
function awe_showLoading(selector) {
	var loading = $('.loader').html();
	$(selector).addClass("loading").append(loading); 
}  window.awe_showLoading=awe_showLoading;

/********************************************************
# HIDE LOADING
********************************************************/
function awe_hideLoading(selector) {
	$(selector).removeClass("loading"); 
	$(selector + ' .loading-icon').remove();
}  window.awe_hideLoading=awe_hideLoading;

/********************************************************
# SHOW POPUP
********************************************************/
function awe_showPopup(selector) {
	$(selector).addClass('active');
}  window.awe_showPopup=awe_showPopup;

/********************************************************
# HIDE POPUP
********************************************************/
function awe_hidePopup(selector) {
	$(selector).removeClass('active');
}  window.awe_hidePopup=awe_hidePopup;


function awe_convertVietnamese(e){return e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.toLowerCase()).replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a")).replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e")).replace(/ì|í|ị|ỉ|ĩ/g,"i")).replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o")).replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u")).replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y")).replace(/đ/g,"d")).replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-")).replace(/-+-/g,"-")).replace(/^\-+|\-+$/g,"")}window.awe_convertVietnamese=awe_convertVietnamese;



/********************************************************
# OWL CAROUSEL
********************************************************/
function awe_owl() { 
	$('.owl-carousel:not(.not-dqowl)').each( function(){
		var xs_item = $(this).attr('data-xs-items');
		var md_item = $(this).attr('data-md-items');
		var lg_item = $(this).attr('data-lg-items');
		var sm_item = $(this).attr('data-sm-items');	
		var margin=$(this).attr('data-margin');
		var dot=$(this).attr('data-dot');
		var nav=$(this).attr('data-nav');
		var height=$(this).attr('data-height');
		var play=$(this).attr('data-play');
		var loop=$(this).attr('data-loop');
		if (typeof margin !== typeof undefined && margin !== false) {    
		} else{
			margin = 30;
		}
		if (typeof xs_item !== typeof undefined && xs_item !== false) {    
		} else{
			xs_item = 1;
		}
		if (typeof sm_item !== typeof undefined && sm_item !== false) {    

		} else{
			sm_item = 3;
		}	
		if (typeof md_item !== typeof undefined && md_item !== false) {    
		} else{
			md_item = 3;
		}
		if (typeof lg_item !== typeof undefined && lg_item !== false) {    
		} else{
			lg_item = 3;
		}
		if (typeof dot !== typeof undefined && dot !== true) {   
			dot= true;
		} else{
			dot = false;
		}
		$(this).owlCarousel({
			loop:loop,
			margin:Number(margin),
			responsiveClass:true,
			dots:dot,
			nav:nav,
			autoplay:play,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			autoHeight:false,
			navText: ["",""],
			responsive:{
				0:{
					items:Number(xs_item)				
				},
				600:{
					items:Number(sm_item)				
				},
				1000:{
					items:Number(md_item)				
				},
				1200:{
					items:Number(lg_item)				
				}
			}
		})
	})
} window.awe_owl=awe_owl;





$('.owl_countdown').owlCarousel({
	loop:false,
	margin:15,
	responsiveClass:true,
	dots:false,
	nav:true,
	autoplay:false,
	autoplayTimeout:3000,
	autoplayHoverPause:true,
	autoHeight:true,
	navText: ["",""],
	lazyLoad:true,
	responsive:{
		0:{
			items: 1			
		},
		600:{
			items: 1			
		},
		1000:{
			items: 1				
		},
		1200:{
			items: 1			
		}
	}
})

$('.owl-blog-index').owlCarousel({
	loop:false,
	margin:15,
	responsiveClass:true,
	dots:false,
	nav:true,
	autoplay:false,
	autoplayTimeout:3000,
	autoplayHoverPause:true,
	autoHeight:true,
	navText: ["",""],
	lazyLoad:true,
	responsive:{
		0:{
			items: 1			
		},
		600:{
			items: 2			
		},
		1000:{
			items: 2				
		},
		1200:{
			items: 2			
		}
	}
})

$('.module-category-owl').owlCarousel({
	loop:false,
	margin:15,
	responsiveClass:true,
	dots:false,
	nav:false,
	autoplay:false,
	autoplayTimeout:3000,
	autoplayHoverPause:true,
	autoHeight:false,
	lazyLoad:true,
	responsive:{
		0:{
			items: 2			
		},
		600:{
			items: 3			
		},
		1000:{
			items: 4				
		},
		1200:{
			items: 5			
		}
	}
})


/********************************************************
# BACKTOTOP
********************************************************/
function awe_backtotop() { 
	if ($('.back-to-top').length) {
		var scrollTrigger = 100, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('.back-to-top').addClass('show');
				} else {
					$('.back-to-top').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('.back-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
} window.awe_backtotop=awe_backtotop;

/********************************************************
# TAB
********************************************************/
function awe_tab() {
	$(".e-tabs").each( function(){
		$(this).find('.tabs-title li:first-child').addClass('current');
		$(this).find('.tab-content').first().addClass('current');

		$(this).find('.tabs-title li').click(function(){
			var tab_id = $(this).attr('data-tab');
			var url = $(this).attr('data-url');
			$(this).closest('.e-tabs').find('.tab-viewall').attr('href',url);
			$(this).closest('.e-tabs').find('.tabs-title li').removeClass('current');
			$(this).closest('.e-tabs').find('.tab-content').removeClass('current');
			$(this).addClass('current');
			$(this).closest('.e-tabs').find("#"+tab_id).addClass('current');
		});    
	});
} window.awe_tab=awe_tab;

/********************************************************
# DROPDOWN
********************************************************/
$('.dropdown-toggle').click(function() {
	$(this).parent().toggleClass('open'); 	
}); 
$('.btn-close').click(function() {
	$(this).parents('.dropdown').toggleClass('open');
}); 
$('body').click(function(event) {
	if (!$(event.target).closest('.dropdown').length) {
		$('.dropdown').removeClass('open');
	};
});





/************************************/
/*Show hide Recoverpass*/
$('.recv-text #rcv-pass').click(function(){
	$('.form_recover_').slideToggle('500');
});
/*End*/

$('a.btn-support').click(function(e){
	e.stopPropagation();
	$('.support-content').slideToggle();
});
$('.support-content').click(function(e){
	e.stopPropagation();
});
$(document).click(function(){
	$('.support-content').slideUp();
});
/*dang ky*/
$(".accept_submit input").click(function() {
	if($(this).is(":checked"))
	{
		$('.button_register').removeAttr('disabled');
	}else {
		$('.button_register').attr('disabled', 'disabled');
	}
});




/***************************************/
$(document).ready(function(){
	var wDW = $(window).width();
	/*Footer*/
	if(wDW > 767){
		$('.toggle-mn').show();
	}else {
		$('.footer-click > .cliked').click(function(){
			$(this).toggleClass('open_');
			$(this).next('ul').slideToggle("fast");
			$(this).next('div').slideToggle("fast");
		});
	}
	if (wDW < 991) {
		$(".filter-group li span label").click(function(){
			$('.dqdt-sidebar').removeClass('openf');
			$('.open-filters').removeClass('openf');
			$('.opacity_filter').removeClass('opacity_filter_true');
		});
		$('.opacity_filter').click(function(e){
			$('.dqdt-sidebar').removeClass('openf');
			$('.open-filters').removeClass('openf');
			$('.opacity_filter').removeClass('opacity_filter_true');
		});
	}
	if (wDW > 992) {
		$(".button_clicked").click(function(){ 
			$('.search_pc').slideToggle('fast');
		})
	}
	$(".search_inner .fa").click(function(){ 
		$('.search_form').slideToggle('fast');
	})
});
$('.cate_padding  li .fa').click(function() {
	$(this).closest('li').find('> ul').slideToggle("fast");
	$(this).closest('i').toggleClass('fa-caret-down fa-caret-up');
	return false;              
}); 
/*Open filter*/
$('.open-filters').click(function(e){
	e.stopPropagation();
	$(this).toggleClass('openf');
	$('.opacity_filter').toggleClass('opacity_filter_true');
	$('.dqdt-sidebar').toggleClass('openf');
});

$('.button-menu').click(function(){
	$('.menu_mobile').slideToggle();
});

$('.ul_collections li > .fa').click(function(){
	$(this).parent().toggleClass('current');
	$(this).toggleClass('fa-angle-down fa-angle-up');
	$(this).next('ul').slideToggle("fast");
	$(this).next('div').slideToggle("fast");
});


$('.opacity_menu').click(function(e){
	$('.menu_mobile').removeClass('open_sidebar_menu');
	$('.opacity_menu').removeClass('open_opacity');
});
$('.ct-mobile li .ti-plus').click(function() {
	$(this).closest('li').find('> .sub-menu').slideToggle("fast");
	$(this).closest('i').toggleClass('show_open hide_close');
	return false;              
});



/*********************Login register modal **********************/
$('.op_login').click(function(e){
	$('.op_login').removeClass('op_login_true');
	$('.modal_register').hide();
	$('.modal_login').hide();
});
/*dang ky click*/
$('.register_click').click(function(e){
	$('.op_login').toggleClass('op_login_true');
	$('.modal_register').show();
});
/*dang nhap tư form dang ky*/
$('.login_form').click(function(e){
	$('.op_login').add('op_login_true');
	$('.modal_login').show();
	$('.modal_register').hide();
});
/*dang nhap click*/
$('.login_click').click(function(e){
	$('.op_login').toggleClass('op_login_true');
	$('.modal_login').show();
});
/*dang ky tu form dang nhap*/
$('.register_form').click(function(e){
	$('.op_login').add('op_login_true');
	$('.modal_register').show();
	$('.modal_login').hide();
});

$(".topbar-user>span").click(function(){
	if($(window).width() < 1200){
		$(this).next().slideToggle();
	}
});








// Create tab
$(".not-dqtab").each( function(e){
	var $this1 = $(this);
	var datasection = $this1.closest('.not-dqtab').attr('data-section');
	var view = $this1.closest('.not-dqtab').attr('data-view');
	$this1.find('.tabs-title li:first-child').addClass('current');
	$this1.find('.tab-content').first().addClass('current');
	$this1.find('.tabs-title.ajax li').click(function(){
		var $this2 = $(this),
			tab_id = $this2.attr('data-tab'),
			url = $this2.attr('data-url');
		var etabs = $this2.closest('.e-tabs2');
		etabs.find('.tab-viewall').attr('href',url);
		etabs.find('.tabs-title li').removeClass('current');
		etabs.find('.tab-content').removeClass('current');
		$this2.addClass('current');
		etabs.find("."+tab_id).addClass('current');
		//Náº¿u Ä‘Ă£ load rá»“i thĂ¬ khĂ´ng load ná»¯a
		if(!$this2.hasClass('has-content')){
			$this2.addClass('has-content');		
			getContentTab(url,"."+ datasection+" ."+tab_id,view);
		}
	});
});

//Xá»­ lĂ½ mobile

$('.not-dqtab .next').click(function(e){

	var count = 0
	$(this).parents('.content').find('.tab-content').each(function(e){
		count +=1;
	})

	var str = $(this).parent().find('.tab-titlexs').attr('data-tab'),
		res = str.replace("tab-", ""),
		datasection = $(this).closest('.not-dqtab').attr('data-section');
	res = Number(res);
	if(res < count){
		var current = res + 1;
	}else{
		var current = 1;
	}
	action(current,datasection);
})
$('.not-dqtab .prev').click(function(e){
	var count = 0
	$(this).parents('.content').find('.tab-content').each(function(e){
		count +=1;
	})

	var str = $(this).parent().find('.tab-titlexs').attr('data-tab'),
		res = str.replace("tab-", ""),
		datasection = $(this).closest('.not-dqtab').attr('data-section'),
		res = Number(res);	
	if(res > 1){
		var current = res - 1;
	}else{
		var current = count;
	}
	action(current,datasection);
})
// Action mobile
function action(current,datasection,view){
	$('.'+datasection+' .tab-titlexs').attr('data-tab','tab-'+current);
	var text = '',
		url = '',
		tab_id='';
	$('.'+datasection+' ul.tabs.tabs-title.hidden-xs li').each(function(e){

		if($(this).attr('data-tab') == 'tab-'+current){
			var $this3 = $(this);
			title = $this3.find('span').text();
			url = $this3.attr('data-url');
			tab_id = $this3.attr('data-tab');	
			//Náº¿u Ä‘Ă£ load rá»“i thĂ¬ khĂ´ng load ná»¯a
			if(!$this3.hasClass('has-content')){
				$this3.addClass('has-content');	

				getContentTab(url,"."+ datasection+" ."+tab_id,view);				
			}
		}
	})
	$("."+ datasection+" .tab-titlexs span").text(title);
	$("."+ datasection+" .tab-content").removeClass('current');
	$("."+ datasection+" .tab-"+current).addClass('current');
}
// Get content cho tab
function getContentTab(url,selector,view){
	if(view == 'grid_4'){
		url = url+"?view=ajaxload4";
	}else{
		url = url+"?view=ajaxload";
	}

	var dataLgg = $(selector).parent().find('.tab-1 .owl-carousel').attr('data-lgg-items');
	var loadding = '<div class="a-center"><svg height=30px style="enable-background:new 0 0 50 50"version=1.1 viewBox="0 0 24 30"width=24px x=0px xml:space=preserve xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink y=0px><rect fill=#333 height=10 opacity=0.2 width=4 x=0 y=10><animate attributeName=opacity attributeType=XML begin=0s dur=0.6s repeatCount=indefinite values="0.2; 1; .2"/><animate attributeName=height attributeType=XML begin=0s dur=0.6s repeatCount=indefinite values="10; 20; 10"/><animate attributeName=y attributeType=XML begin=0s dur=0.6s repeatCount=indefinite values="10; 5; 10"/></rect><rect fill=#333 height=10 opacity=0.2 width=4 x=8 y=10><animate attributeName=opacity attributeType=XML begin=0.15s dur=0.6s repeatCount=indefinite values="0.2; 1; .2"/><animate attributeName=height attributeType=XML begin=0.15s dur=0.6s repeatCount=indefinite values="10; 20; 10"/><animate attributeName=y attributeType=XML begin=0.15s dur=0.6s repeatCount=indefinite values="10; 5; 10"/></rect><rect fill=#333 height=10 opacity=0.2 width=4 x=16 y=10><animate attributeName=opacity attributeType=XML begin=0.3s dur=0.6s repeatCount=indefinite values="0.2; 1; .2"/><animate attributeName=height attributeType=XML begin=0.3s dur=0.6s repeatCount=indefinite values="10; 20; 10"/><animate attributeName=y attributeType=XML begin=0.3s dur=0.6s repeatCount=indefinite values="10; 5; 10"/></rect></svg></div>';

	$.ajax({
		type: 'GET',
		url: url,
		beforeSend: function() {
			$(selector).html(loadding);
		},
		success: function(data) {
			var content = $(data);

			$(selector).html(content.html());
			ajaxCarousel(selector,dataLgg);			
			//Fix app
			if(window.BPR)
				return window.BPR.initDomEls(), window.BPR.loadBadges();
		},
		dataType: "html"
	});
}
// Ajax carousel
function ajaxCarousel(selector,dataLgg){
	$(selector+' .owl-carousel.ajax-carousel').each( function(){
		var xss_item = $(this).attr('data-xss-items');
		var xs_item = $(this).attr('data-xs-items');
		var sm_item = $(this).attr('data-sm-items');
		var md_item = $(this).attr('data-md-items');
		var lg_item = $(this).attr('data-lg-items');
		if(dataLgg !== typeof undefined){
		}
		var lgg_item = dataLgg;
		var margin=$(this).attr('data-margin');
		var dot=$(this).attr('data-dot');
		var nav=$(this).attr('data-nav');
		if (typeof margin !== typeof undefined && margin !== false) {
		} else{
			margin = 30;
		}
		if (typeof xss_item !== typeof undefined && xss_item !== false) {
		} else{
			xss_item = 1;
		}
		if (typeof xs_item !== typeof undefined && xs_item !== false) {
		} else{
			xs_item = 1;
		}
		if (typeof sm_item !== typeof undefined && sm_item !== false) {

		} else{
			sm_item = 3;
		}
		if (typeof md_item !== typeof undefined && md_item !== false) {
		} else{
			md_item = 3;
		}
		if (typeof lg_item !== typeof undefined && lg_item !== false) {
		} else{
			lg_item = 4;
		}
		if (typeof lgg_item !== typeof undefined && lgg_item !== false) {

		} else{
			lgg_item = lg_item;			
		}

		if (typeof dot !== typeof undefined && dot !== true) {
			dot = dot;
		} else{
			dot = false;
		}
		if (typeof nav !== typeof undefined && nav !== true) {
			nav = nav;
		} else{
			nav = false;
		}
		$(this).owlCarousel({
			loop:false,
			margin:Number(margin),
			responsiveClass:true,
			dots:dot,
			nav:nav,
			navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
			responsive:{
				0:{
					items:Number(xss_item),
				},
				543:{
					items:Number(xs_item)
				},
				768:{
					items:Number(sm_item)
				},
				992:{
					items:Number(md_item)
				},
				1200:{
					items:Number(lg_item)
				},
				1500:{
					items:Number(lgg_item)
				}
			}
		})
	})
}

var ww = $(window).width();
if (ww >= 1200) {
	$('.xemthem').click(function(e) {
		e.preventDefault();
		$('ul.ul_menu>li').css('display', 'block');
		$(this).hide();
		$('.thugon').show();
	})
	$('.thugon').click(function(e) {
		e.preventDefault();
		$('ul.ul_menu>li').css('display', 'none');
		$(this).hide();
		$('.xemthem').show();
	})
} else {
	$('.xemthem').on('mouseover', function(e) {
		e.preventDefault();
		$('ul.ul_menu>li').css('display', 'block');
		$(this).hide();
		$('.thugon').show();
	})
	$('.thugon').on('mouseover', function(e) {
		e.preventDefault();
		$('ul.ul_menu>li').css('display', 'none');
		$(this).hide();
		$('.xemthem').show();
	})
}

if($(".site-nav-vetical .li_check").length <= 5){
	$(".xemthem").addClass("hidden-zz");
	$(".thugon").addClass("hidden-zz");
}


if (ww <= 1200) {
	$(".menu_mega").click(function(){
		$(".list_menu_header").toggleClass('openz');

	});
}




if ($(window).width() > 1100){
	
	
	var menu_limit = "5";
	if (isNaN(menu_limit)){
		menu_limit = 10;
	} else {
		menu_limit = 4;
	}
}else{
	
	
	var menu_limit = "5";
	if (isNaN(menu_limit)){
		menu_limit = 8;
	} else {
		menu_limit = 4;
	}
}
var sidebar_length = $('.menu-item-count').length;
if (sidebar_length > (menu_limit + 1) ){
	$('.nav-cate:not(.site-nav-mobile) > ul').each(function(){
		$('.menu-item-count',this).eq(menu_limit).nextAll().hide().addClass('toggleable');
		$(this).append('<li class="more"><a class="nd-categories-a" title="Xem thêm"><label>Xem thêm ... </label></a></li>');
	});
	$('.nav-cate > ul').on('click','.more', function(){
		if($(this).hasClass('less')){
			$(this).html('<a class="nd-categories-a" title="Xem thêm"><label>Xem thêm ...</label></a>').removeClass('less');
		} else {
			$(this).html('<a class="nd-categories-a" title="Thu gọn"><label>Thu gọn ... </label></a>').addClass('less');;
		}
		$(this).siblings('li.toggleable').slideToggle({
			complete: function () {
				var divHeight = $('#menu2017').height(); 
				$('.subcate.gd-menu').css('min-height', divHeight+'px');
			}
		});
	});
}


$('.header-nav .fa').click(function(e){		
	e.preventDefault();
	$(this).parent().parent().toggleClass('open');
});

$(document).on('keydown','.number-sidebar-z',function(e){-1!==$.inArray(e.keyCode,[46,8,9,27,13,110,190])||/65|67|86|88/.test(e.keyCode)&&(!0===e.ctrlKey||!0===e.metaKey)||35<=e.keyCode&&40>=e.keyCode||(e.shiftKey||48>e.keyCode||57<e.keyCode)&&(96>e.keyCode||105<e.keyCode)&&e.preventDefault()});