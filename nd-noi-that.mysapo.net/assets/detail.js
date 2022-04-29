$(document).ready(function () {
	$("#gallery_02").owlCarousel({
		navigation : true,
		nav: true,
		navigationPage: false,
		navigationText : false,
		slideSpeed : 1000,
		pagination : true,
		dots: false,
		margin: 5,
		autoHeight:true,
		autoplay:false,
		autoplayTimeout:false,
		autoplayHoverPause:true,
		loop: false,
		responsive: {
			0: {
				items: 3
			},
			543: {
				items: 4
			},
			768: {
				items: 4
			},
			991: {
				items: 4
			},
			992: {
				items: 4
			},
			1200: {
				items: 5
			},
			1500: {
				items: 5
			}
		}
	});

	/*** xử lý active thumb -- ko variant ***/
	var thumbLargeimg = $('.details-product .large-image a').attr('href').split('?')[0];
	var thumMedium = $('#gallery_02 .item a').find('img').attr('src');
	var url = [];

	$('#gallery_02 .item').each(function(){
		var srcImg = '';
		$(this).find('a img').each(function(){
			var current = $(this);
			if(current.children().size() > 0) {return true;}
			srcImg += $(this).attr('src');
		});
		url.push(srcImg);
		var srcimage = $(this).find('a img').attr('src').split('?')[0];
		if (srcimage == thumbLargeimg) {
			$(this).find('a').addClass('active');
		} else {
			$(this).find('a').removeClass('active');
		}

	});
	$('#gallery_02 img, .swatch-element label').click(function(e){
		e.preventDefault();
		$('.large-image .checkurl img').attr('src',$(this).attr('data-img'));
	})
});



var ww = $(window).width();
function addCommas(nStr)
{
	nStr += '';
	x = nStr.split(',');
	x1 = x[0];
	x2 = x.length > 1 ? ',' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + '.' + '$2');
	}
	return x1 + x2;
}
var selectCallback = function(variant, selector) {
	if (variant) {
		var form = jQuery('#' + selector.domIdPrefix).closest('form');

		for (var i=0,length=variant.options.length; i<length; i++) {

			var radioButton = form.find('.swatch[data-option-index="' + i + '"] :radio[value="' + variant.options[i] +'"]');				
			if (radioButton.size()) {
				radioButton.get(0).checked = true;
			}
		}

	}
	var addToCart = $('.form-product .btn-cart'),
		masp = $('.masp'),
		qtyBtn = $('.form-product .form-group .custom-btn-number'),
		labelbrn = $('.form-product .form-group .qty-nd'),
		form = $('.form-product .form-group'),
		productPrice = $('.details-pro .special-price .product-price'),
		qty = $('.inventory_quantity'),
		comparePrice = $('.details-pro .old-price .product-price-old');

	if (variant && variant.available) {
		if(variant.inventory_management == "bizweb"){
			if (variant.inventory_quantity != 0) {
				qty.html('<span class="a-stock">Tình trạng:</span> Còn hàng');
			} else if (variant.inventory_quantity == ''){
				if (variant.inventory_policy == "continue"){
					qty.html('<span class="a-stock">Tình trạng: </span>Còn hàng');
				} else {
					qty.html('<span class="a-stock a-stock-out">Tình trạng:</span> Hết hàng');
				}
			}
		}else{
			qty.html('<span class="a-stock">Tình trạng:</span> Còn hàng');
		}
		addToCart.html('<span class="txt-main">Thêm vào giỏ hàng</span>').removeAttr('disabled');	
		qtyBtn.removeClass('hidden');
		labelbrn.removeClass('hidden');
		if(variant.price == 0){
			productPrice.html('Liên hệ');
			comparePrice.hide();
			form.addClass('hidden');
		}else{
			form.removeClass('hidden');
			//productPrice.html(Bizweb.formatMoney(variant.price, ""));
			productPrice.html(addCommas(variant.price)+"₫");
			// Also update and show the product's compare price if necessary
			if ( variant.compare_at_price > variant.price ) {
				comparePrice.html(addCommas(variant.compare_at_price)+"₫").show();
			} else {
				comparePrice.hide();   
			}       										
		}

	} else {	
		qty.html('<span class="a-stock a-stock-out">Tình trạng:</span> Hết hàng');
		addToCart.html('<span class="txt-main">Hết hàng</span>').attr('disabled', 'disabled');
		qtyBtn.addClass('hidden');
		labelbrn.addClass('hidden');
		if(variant){
			if(variant.price != 0){
				form.removeClass('hidden');
				//productPrice.html(Bizweb.formatMoney(variant.price, ""));
				productPrice.html(addCommas(variant.price)+"₫");
				// Also update and show the product's compare price if necessary
				if ( variant.compare_at_price > variant.price ) {
					comparePrice.html(addCommas(variant.compare_at_price)+"₫").show();
				} else {
					comparePrice.hide();  
				}     
			}else{
				productPrice.html('Liên hệ');	
				comparePrice.hide();
				form.addClass('hidden');	
			}
		}else{
			productPrice.html('Hết hàng');	
			comparePrice.hide();
			form.addClass('hidden');
		}
	}
	/*begin variant image*/
	if (variant && variant.image) {  
		var originalImage = jQuery(".large-image img"); 
		var newImage = variant.image;
		var element = originalImage[0];
		Bizweb.Image.switchImage(newImage, element, function (newImageSizedSrc, newImage, element) {
			jQuery(element).parents('a').attr('href', newImageSizedSrc);
			jQuery(element).attr('src', newImageSizedSrc);
		});

		$('.large-image .checkurl').attr('href',$(this).attr('src'));
		if($(window).width() > 1200){
			setTimeout(function(){
				$('.zoomContainer').remove();
				$('#zoom_01').elevateZoom({
					gallery:'gallery_01', 
					zoomWindowOffetx: 10,
					easing : true,
					scrollZoom : true,
					zoomWindowWidth: 400,
					zoomWindowHeight: 400,
					cursor: 'pointer', 
					galleryActiveClass: 'active', 
					imageCrossfade: true
				});
			},300);
		}
	}

	/*end of variant image*/
};
jQuery(function($) {
	if(variantsize == true ){

		new Bizweb.OptionSelectors('product-selectors', {
			product: productJson,
			onVariantSelected: selectCallback,
			enableHistoryState: true
		});
	}

	// Add label if only one product option and it isn't 'Title'. Could be 'Size'.
	if(productOptionsSize == 1){
		$('.selector-wrapper:eq(0)').prepend('<label>'+ optionsFirst +'</label>');
	}

	// Hide selectors if we only have 1 variant and its title contains 'Default'.
	if(cdefault == 1){
		$('.selector-wrapper').hide();
	} 
	$('.selector-wrapper').css({
		'text-align':'left',
		'margin-bottom':'15px'
	});
});
$('#gallery_01 img').click(function(e){
	e.preventDefault();
	$('.large-image img').attr('src',$(this).parent().attr('data-zoom-image'));
});

jQuery('.swatch :radio').change(function() {
	var optionIndex = jQuery(this).closest('.swatch').attr('data-option-index');
	var optionValue = jQuery(this).val();
	jQuery(this)
		.closest('form')
		.find('.single-option-selector')
		.eq(optionIndex)
		.val(optionValue)
		.trigger('change');
});
if($(window).width() > 1200){
	setTimeout(function(){
		$('.zoomContainer').remove();				
		$('#zoom_01').elevateZoom({
			gallery:'gallery_01', 
			zoomWindowOffetx: 10,
			easing : true,
			scrollZoom : true,
			zoomWindowWidth: 400,
			zoomWindowHeight: 400,
			cursor: 'pointer', 
			galleryActiveClass: 'active', 
			imageCrossfade: true
		});
	},300);
}
$("#gallery_01 .item a").click(function(){
	var src = $(this).attr('data-zoom-image');
	$("#zoom_01").attr("src",src);
	$(".large_image_url").attr("href",src);
	
});
$(".dp-flex img").click(function(e){
	e.preventDefault();
	var hr = $(this).attr('data-src');
	$('#img_01').attr('src',hr);
	$('.pict').attr('src',hr);
	$('.large_image_url').attr('href',hr);
	$('#img_01').attr('data-zoom-image',hr);
});
$('#gallery_00 img, .swatch-element label').click(function(e){
	$('.checkurl').attr('href',$(this).attr('src'));
	if (ww >= 1200){
		setTimeout(function(){
			$('.zoomContainer').remove();				
			$('#zoom_01').elevateZoom({
				gallery:'gallery_01', 
				zoomWindowWidth: 400,
				zoomWindowHeight: 400,
				scrollZoom : true,
				cursor: 'pointer', 
				galleryActiveClass: 'active', 
				imageCrossfade: true
			});
		},300);
	}
});