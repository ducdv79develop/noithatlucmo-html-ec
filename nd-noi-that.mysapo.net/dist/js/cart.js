function floatToString(t, r) {
    var e = t.toFixed(r).toString();
    return e.match(/^\.\d+/) ? "0" + e : e
}

function attributeToString(t) {
    return "string" != typeof t && (t += "", "undefined" === t && (t = "")), jQuery.trim(t)
}

"undefined" == typeof Bizweb && (Bizweb = {});

Bizweb.mediaDomainName = "http://bizweb.dktcdn.net/";

Bizweb.money_format = "$", Bizweb.onError = function (XMLHttpRequest, textStatus) {
    var data = eval("(" + XMLHttpRequest.responseText + ")");
    alert(data.message ? data.message + "(" + data.status + "): " + data.description : "Error : " + Bizweb.fullMessagesFromErrors(data).join("; ") + ".")
}, Bizweb.fullMessagesFromErrors = function (t) {
    var r = [];
    return jQuery.each(t, function (t, e) {
        jQuery.each(e, function (e, o) {
            r.push(t + " " + o)
        })
    }), r
}, Bizweb.onCartUpdate = function (t) {
    alert("There are now " + t.item_count + " items in the cart.")
}, Bizweb.onCartShippingRatesUpdate = function (t, r) {
    var e = "";
    r.zip && (e += r.zip + ", "), r.province && (e += r.province + ", "), e += r.country, alert("There are " + t.length + " shipping rates available for " + e + ", starting at " + Bizweb.formatMoney(t[0].price) + ".")
}, Bizweb.onItemAdded = function (t) {
    alert(t.title + " was added to your shopping cart.")
}, Bizweb.onProduct = function (t) {
    alert("Received everything we ever wanted to know about " + t.title)
}, Bizweb.formatMoney = function (amount, moneyFormat) {
    function getDefault(value, defaultValue) {
        if (typeof value == "undefined")
            return defaultValue;

        return value;
    }

    function formatMoney(amount, decimal, thousandSeperate, decimalSeperate) {
        decimal = getDefault(decimal, 2);
        thousandSeperate = getDefault(thousandSeperate, ",");
        decimalSeperate = getDefault(decimalSeperate, ".");

        if (isNaN(amount) || null == amount)
            return 0;

        amount = amount.toFixed(decimal);

        var amountParts = amount.split(".");
        var integer = amountParts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + thousandSeperate);
        var decimal = amountParts[1] ? decimalSeperate + amountParts[1] : "";

        return integer + decimal;
    }

    if (typeof amount == "string") {
        amount = amount.replace(".", "");
        amount = amount.replace(",", "");
    }

    var result = "";
    var moneyRegex = /\{\{\s*(\w+)\s*\}\}/;

    moneyFormat = moneyFormat || this.money_format;
    switch (moneyFormat.match(moneyRegex)[1]) {
        case "amount":
            result = formatMoney(amount, 2);
            break;
        case "amount_no_decimals":
            result = formatMoney(amount, 0);
            break;
        case "amount_with_comma_separator":
            result = formatMoney(amount, 2, ".", ",");
            break;
        case "amount_no_decimals_with_comma_separator":
            result = formatMoney(amount, 0, ".", ",")
    }

    return moneyFormat.replace(moneyRegex, result)
}, Bizweb.resizeImage = function (t, r) {
    try {
        if ("original" == r)
            return t;

        var thumbDomain = Bizweb.mediaDomainName + "thumb/" + r + "/";
        return t.replace(Bizweb.mediaDomainName, thumbDomain).split('?')[0];
    } catch (o) {
        return t
    }
}, Bizweb.addItem = function (t, r, e) {
    var r = r || 1,
        o = {
            type: "POST",
            url: "/cart/add.js",
            data: "quantity=" + r + "&VariantId=" + t,
            dataType: "json",
            success: function (t) {
                "function" == typeof e ? e(t) : Bizweb.onItemAdded(t)
            },
            error: function (t, r) {
                Bizweb.onError(t, r)
            }
        };
    jQuery.ajax(o)
}, Bizweb.addItemFromForm = function (t, r) {
    var e = {
        type: "POST",
        url: "/cart/add.js",
        data: jQuery("#" + t).serialize(),
        dataType: "json",
        success: function (t) {
            "function" == typeof r ? r(t) : Bizweb.onItemAdded(t)
        },
        error: function (t, r) {
            Bizweb.onError(t, r)
        }
    };
    jQuery.ajax(e)
}, Bizweb.getCart = function (t) {
    jQuery.getJSON("cart.json", function (r) {
        "function" == typeof t ? t(r) : Bizweb.onCartUpdate(r)
    })
}, Bizweb.pollForCartShippingRatesForDestination = function (t, r, e) {
    e = e || Bizweb.onError;
    var o = function () {
        jQuery.ajax("/cart/async_shipping_rates", {
            dataType: "json",
            success: function (e, n, a) {
                200 === a.status ? "function" == typeof r ? r(e.shipping_rates, t) : Bizweb.onCartShippingRatesUpdate(e.shipping_rates, t) : setTimeout(o, 500)
            },
            error: e
        })
    };
    return o
}, Bizweb.getCartShippingRatesForDestination = function (t, r, e) {
    e = e || Bizweb.onError;
    var o = {
        type: "POST",
        url: "/cart/prepare_shipping_rates",
        data: Bizweb.param({
            shipping_address: t
        }),
        success: Bizweb.pollForCartShippingRatesForDestination(t, r, e),
        error: e
    };
    jQuery.ajax(o)
}, Bizweb.getProduct = function (t, r) {
    jQuery.getJSON("/products/" + t + ".js", function (t) {
        "function" == typeof r ? r(t) : Bizweb.onProduct(t)
    })
}, Bizweb.changeItem = function (t, r, e) {
    var o = {
        type: "POST",
        url: "/cart/change.js",
        data: "quantity=" + r + "&variantId=" + t,
        dataType: "json",
        success: function (t) {
            "function" == typeof e ? e(t) : Bizweb.onCartUpdate(t)
        },
        error: function (t, r) {
            Bizweb.onError(t, r)
        }
    };
    jQuery.ajax(o)
}, Bizweb.removeItem = function (t, r) {
    var e = {
        type: "POST",
        url: "/cart/change.js",
        data: "quantity=0&variantId=" + t,
        dataType: "json",
        success: function (t) {
            "function" == typeof r ? r(t) : Bizweb.onCartUpdate(t)
        },
        error: function (t, r) {
            Bizweb.onError(t, r)
        }
    };
    jQuery.ajax(e)
}, Bizweb.clear = function (t) {
    var r = {
        type: "POST",
        url: "/cart/clear.js",
        data: "",
        dataType: "json",
        success: function (r) {
            "function" == typeof t ? t(r) : Bizweb.onCartUpdate(r)
        },
        error: function (t, r) {
            Bizweb.onError(t, r)
        }
    };
    jQuery.ajax(r)
}, Bizweb.updateCartFromForm = function (t, r) {
    var e = {
        type: "POST",
        url: "/cart/update.js",
        data: jQuery("#" + t).serialize(),
        dataType: "json",
        success: function (t) {
            "function" == typeof r ? r(t) : Bizweb.onCartUpdate(t)
        },
        error: function (t, r) {
            Bizweb.onError(t, r)
        }
    };
    jQuery.ajax(e)
}, Bizweb.updateCartAttributes = function (t, r) {
    var e = "";
    jQuery.isArray(t) ? jQuery.each(t, function (t, r) {
        var o = attributeToString(r.key);
        "" !== o && (e += "attributes[" + o + "]=" + attributeToString(r.value) + "&")
    }) : "object" == typeof t && null !== t && jQuery.each(t, function (t, r) {
        e += "attributes[" + attributeToString(t) + "]=" + attributeToString(r) + "&"
    });
    var o = {
        type: "POST",
        url: "/cart/update.js",
        data: e,
        dataType: "json",
        success: function (t) {
            "function" == typeof r ? r(t) : Bizweb.onCartUpdate(t)
        },
        error: function (t, r) {
            Bizweb.onError(t, r)
        }
    };
    jQuery.ajax(o)
}, Bizweb.updateCartNote = function (t, r) {
    var e = {
        type: "POST",
        url: "/cart/update.js",
        data: "note=" + attributeToString(t),
        dataType: "json",
        success: function (t) {
            "function" == typeof r ? r(t) : Bizweb.onCartUpdate(t)
        },
        error: function (t, r) {
            Bizweb.onError(t, r)
        }
    };
    jQuery.ajax(e)
}, jQuery.fn.jquery >= "1.4" ? Bizweb.param = jQuery.param : (Bizweb.param = function (t) {
    var r = [],
        e = function (t, e) {
            e = jQuery.isFunction(e) ? e() : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
    if (jQuery.isArray(t) || t.jquery) jQuery.each(t, function () {
        e(this.name, this.value)
    });
    else
        for (var o in t) Bizweb.buildParams(o, t[o], e);
    return r.join("&").replace(/%20/g, "+")
}, Bizweb.buildParams = function (t, r, e) {
    jQuery.isArray(r) && r.length ? jQuery.each(r, function (r, o) {
        rbracket.test(t) ? e(t, o) : Bizweb.buildParams(t + "[" + ("object" == typeof o || jQuery.isArray(o) ? r : "") + "]", o, e)
    }) : null != r && "object" == typeof r ? Bizweb.isEmptyObject(r) ? e(t, "") : jQuery.each(r, function (r, o) {
        Bizweb.buildParams(t + "[" + r + "]", o, e)
    }) : e(t, r)
}, Bizweb.isEmptyObject = function (t) {
    for (var r in t) return !1;
    return !0
});


function c() {
}

for (var d = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","), a; a = d.pop();) {
    b[a] = b[a] || c
}

((function () {
    try {
        console.log();
        return window.console;
    } catch (err) {
        return window.console = {};
    }
})());

/**
 * Page-specific call-backs
 * Called after dom has loaded.
 */
var GLOBAL = {
    common: {
        init: function () {
            $('.add_to_cart').bind('click', addToCart);
        }
    },

    templateIndex: {
        init: function () {

        }
    },

    templateProduct: {
        init: function () {

        }
    },

    templateCart: {
        init: function () {

        }
    }

}
var UTIL = {
    fire: function (func, funcname, args) {
        var namespace = GLOBAL;
        funcname = (funcname === undefined) ? 'init' : funcname;
        if (func !== '' && namespace[func] && typeof namespace[func][funcname] == 'function') {
            namespace[func][funcname](args);
        }
    },

    loadEvents: function () {
        var bodyId = document.body.id;

        // hit up common first.
        UTIL.fire('common');

        // do all the classes too.
        $.each(document.body.className.split(/\s+/), function (i, classnm) {
            UTIL.fire(classnm);
            UTIL.fire(classnm, bodyId);
        });
    }

};
$(document).ready(UTIL.loadEvents);
/**
 * Ajaxy add-to-cart
 */
Number.prototype.formatMoney = function (c, d, t) {
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "." : t,
        s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

function addToCart(e) {
    if (typeof e !== 'undefined') e.preventDefault();
    var $this = $(this);
    var form = $this.parents('form');

    $.ajax({
        type: 'POST',
        url: '/cart/add.js',
        async: false,
        data: form.serialize(),
        dataType: 'json',
        error: addToCartFail,
        beforeSend: function () {

        },
        success: addToCartSuccess,
        cache: false
    });
}

function addToCartSuccess(jqXHR, textStatus, errorThrown) {

    $.ajax({
        type: 'GET',
        url: '/cart.js',
        async: false,
        cache: false,
        dataType: 'json',
        success: function (cart) {
            awe_hidePopup('.loading');
            Bizweb.updateCartFromForm(cart, '.top-cart-content .mini-products-list');
            Bizweb.updateCartPopupForm(cart, '#popup-cart-desktop .tbody-popup');
        }
    });


    var url_product = jqXHR['url'];
    var class_id = jqXHR['product_id'];
    var name = jqXHR['name'];
    var textDisplay = ('<i style="margin-right:5px; color:red; font-size:13px;" class="fa fa-check" aria-hidden="true"></i>Sản phẩm vừa thêm vào giỏ hàng');
    var id = jqXHR['variant_id'];
    var dataList = $(".item-name a").map(function () {
        var plus = $(this).text();
        return plus;
    }).get();
    $('.title-popup-cart .cart-popup-name').html('<a href="' + url_product + '" title="' + name + '">' + name + '</a> ');
    var nameid = dataList,
        found = $.inArray(name, nameid);
    var textfind = found;

    var src = '';
    if (Bizweb.resizeImage(jqXHR['image'], 'small') == null || Bizweb.resizeImage(jqXHR['image'], 'small') == "null" || Bizweb.resizeImage(jqXHR['image'], 'small') == '') {
        src = 'dist/thumb/large/assets/themes_support/noimage.gif'
    } else {
        src = Bizweb.resizeImage(jqXHR['image'], 'small')
    }

    $(".item-info > p:contains(" + id + ")").html('<span class="add_sus" style="color:#898989;"><i style="margin-right:5px; color:#3cb878; font-size:14px;" class="fa fa-check" aria-hidden="true"></i>Sản phẩm vừa thêm</span>');


    var windowW = $(window).width();
    if (windowW > 768) {
        $('#popup-cart').modal();
    } else {
        $('#myModal').html('');
        var $popupMobile = '<div class="modal-dialog"><div class="modal-content"><div class="modal-header">'
            + '<button type="button" class="close" data-dismiss="modal" aria-label="Close" style="position: relative; z-index: 9;"><span aria-hidden="true">×</span></button>'
            + '<h4 class="modal-title"><span><i class="fa fa-check" aria-hidden="true"></i></span>Đã mua thành công</h4></div>'
            + '<div class="modal-body"><div class="media"><div class="media-left"><div class="thumb-1x1">'
            + '<img width="70px" src="' + src + '" alt="' + jqXHR['title'] + '"></div></div>'
            + '<div class="media-body"><div class="product-title">' + jqXHR['name'] + '</div>'
            + '<div class="product-new-price"><span>' + (jqXHR['price']).formatMoney(0) + ' đ</span></div></div></div>'
            + '<button class="btn btn-block btn-outline-red" data-dismiss="modal">Tiếp tục mua hàng</button>'
            + '<a href="/checkout" class="btn btn-block btn-red">Tiến hành thanh toán</a></div></div></div>';
        $('#myModal').html($popupMobile);
        $('#myModal').modal();
        clearTimeout($('#myModal').data('hideInterval'));
        $('#myModal').data('hideInterval', setTimeout(function () {
            $('#myModal').modal('hide');
        }, 5000));
    }
}

function addToCartFail(jqXHR, textStatus, errorThrown) {
    var response = $.parseJSON(jqXHR.responseText);
    var $info = '<div class="error">' + response.description + '</div>';
}

$(document).on('click', ".remove-item-cart", function () {
    var variantId = $(this).attr('data-id');
    removeItemCart(variantId);
});
$(document).on('click', ".items-count", function () {
    var thisBtn = $(this);
    var variantId = $(this).parent().find('.variantID').val();
    var qty = $(this).parent().children('.number-sidebar').val();
    if (qty == '0') {
        $(this).parent().children('.number-sidebar').val(1);
    }
    updateQuantity(qty, variantId);
});
$(document).on('change', ".number-sidebar", function () {
    var variantId = $(this).parent().children('.variantID').val();
    var qty = $(this).val();
    updateQuantity(qty, variantId);
});

function updateQuantity(qty, variantId) {
    var variantIdUpdate = variantId;
    $.ajax({
        type: "POST",
        url: "/cart/change.js",
        data: {"quantity": qty, "variantId": variantId},
        dataType: "json",
        success: function (cart, variantId) {
            Bizweb.onCartUpdateClick(cart, variantIdUpdate);
        },
        error: function (qty, variantId) {
            Bizweb.onError(qty, variantId)
        }
    })
}

function removeItemCart(variantId) {
    var variantIdRemove = variantId;
    $.ajax({
        type: "POST",
        url: "/cart/change.js",
        data: {"quantity": 0, "variantId": variantId},
        dataType: "json",
        success: function (cart, variantId) {
            Bizweb.onCartRemoveClick(cart, variantIdRemove);
            $('.productid-' + variantIdRemove).remove();
            if ($('.tbody-popup>div').length == '0') {
                $('#popup-cart').modal('hide');
            }
            if ($('.list-item-cart>li').length == '0') {
                $('.mini-products-list').html('<div class="no-item"><p>Không có sản phẩm nào.</p></div>');
            }
            if ($('.cart-tbody>div').length == '0') {
                $('.page_cart').remove();
                $('.header-cart-content').remove();
                $('.title_cart_pc').html('<p class="hidden-xs-down">Không có sản phẩm nào. Quay lại <a href="/" style="color:;">cửa hàng</a> để tiếp tục mua sắm.</p>');
                $('.title_cart_mobile').html('<p class="hidden-xs-down col-xs-12">Không có sản phẩm nào. Quay lại <a href="/" style="color:;">cửa hàng</a> để tiếp tục mua sắm.</p>');
            }
        },
        error: function (variantId, r) {
            Bizweb.onError(variantId, r)
        }
    })
}

Bizweb.updateCartFromForm = function (cart, cart_summary_id, cart_count_id) {
    if ((typeof cart_summary_id) === 'string') {
        var cart_summary = jQuery(cart_summary_id);
        if (cart_summary.length) {
            // Start from scratch.
            cart_summary.empty();
            // Pull it all out.
            jQuery.each(cart, function (key, value) {
                if (key === 'items') {

                    var table = jQuery(cart_summary_id);
                    if (value.length) {
                        jQuery('<ul class="list-item-cart"></ul>').appendTo(table);
                        jQuery.each(value, function (i, item) {

                            var src = item.image;
                            if (src == null) {
                                src = "dist/thumb/large/assets/themes_support/noimage.gif";
                            }
                            var buttonQty = "";
                            if (item.quantity == '1') {
                                // buttonQty = 'disabled';
                            } else {
                                buttonQty = '';
                            }
                            jQuery('<li class="item productid-' + item.variant_id + '"><div class="wrap_item"><a class="product-image" href="' + item.url + '" title="' + item.name + '">'
                                + '<img alt="' + item.name + '" src="' + src + '"width="' + '80' + '"\></a>'
                                + '<div class="detail-item"><div class="product-details"> <a href="javascript:;" data-id="' + item.variant_id + '" title="Xóa" class="remove-item-cart fa fa-close">&nbsp;</a>'
                                + '<h3 class="product-name"> <a href="' + item.url + '" title="' + item.name + '">' + item.name + '</a></h3></div>'
                                + '<div class="product-details-bottom"><span class="price">' + Bizweb.formatMoney(item.price, "{{amount_no_decimals_with_comma_separator}}₫") + '</span><span class="hidden quaty item_quanty_count"> x ' + item.quantity + '</span>'
                                + '<div class="quantity-select qty_drop_cart"><input class="variantID" type="hidden" name="variantId" value="' + item.variant_id + '"><button onClick="var result = document.getElementById(\'qty' + item.variant_id + '\'); var qty' + item.variant_id + ' = result.value; if( !isNaN( qty' + item.variant_id + ' ) &amp;&amp; qty' + item.variant_id + ' &gt; 1 ) result.value--;return false;" class="btn_reduced reduced items-count btn-minus" ' + buttonQty + ' type="button">–</button><input type="text" maxlength="12" readonly class="input-text number-sidebar qty' + item.variant_id + '" id="qty' + item.variant_id + '" name="Lines" id="updates_' + item.variant_id + '" size="4" value="' + item.quantity + '"><button onClick="var result = document.getElementById(\'qty' + item.variant_id + '\'); var qty' + item.variant_id + ' = result.value; if( !isNaN( qty' + item.variant_id + ' )) result.value++;return false;" class="btn_increase increase items-count btn-plus" type="button">+</button></div>'
                                + '</div></div></li>').appendTo(table.children('.list-item-cart'));
                        });
                        jQuery('<div class="wrap_total"><div class="top-subtotal hidden">Phí vận chuyển: <span class="pricex">Tính khi thanh toán</span></div><div class="top-subtotal">Tổng tiền tạm tính: <span class="price">' + Bizweb.formatMoney(cart.total_price, "{{amount_no_decimals_with_comma_separator}}₫") + '</span></div></div>').appendTo(table);
                        jQuery('<div class="wrap_button"><div class="actions"><a href="/cart" class="btn btn-gray btn-cart-page pink hidden"><span>Đến giỏ hàng</span></a> <a href="/checkout" class="btn btn-gray btn-checkout pink" title="Tiến hành thanh toán"><span>Tiến hành thanh toán</span></a> </div></div>').appendTo(table);
                    } else {
                        jQuery('<div class="no-item"><p>Không có sản phẩm nào.</p></div>').appendTo(table);

                    }
                }
            });
        }
    }
    updateCartDesc(cart);
    var numInput = document.querySelector('#cart-sidebar .qty_drop_cart input.input-text');
    if (numInput != null) {
        // Listen for input event on numInput.
        numInput.addEventListener('input', function () {
            // Let's match only digits.
            var num = this.value.match(/^\d+$/);
            if (num == 0) {
                // If we have no match, value will be empty.
                this.value = 1;
            }
            if (num === null) {
                // If we have no match, value will be empty.
                this.value = "1";
            }
        }, false)
    }
}

Bizweb.updateCartPageForm = function (cart, cart_summary_id, cart_count_id) {
    if ((typeof cart_summary_id) === 'string') {
        var cart_summary = jQuery(cart_summary_id);
        if (cart_summary.length) {
            // Start from scratch.
            cart_summary.empty();
            // Pull it all out.
            jQuery.each(cart, function (key, value) {
                if (key === 'items') {
                    var table = jQuery(cart_summary_id);
                    if (value.length) {

                        var pageCart = '<div class="cart page_cart hidden-xs">'
                            + '<form action="/cart" method="post" novalidate class="margin-bottom-0"><div class="bg-scroll"><div class="cart-thead">'
                            + '<div style="width: 18%" class="a-center">Ảnh sản phẩm</div><div style="width: 32%" class="a-center">Tên sản phẩm</div><div style="width: 17%" class="a-center"><span class="nobr">Đơn giá</span></div><div style="width: 14%" class="a-center">Số lượng</div><div style="width: 14%" class="a-center">Thành tiền</div><div style="width: 5%" class="a-center">Xoá</div></div>'
                            + '<div class="cart-tbody"></div></div></form></div>';
                        var pageCartCheckout = '<div class="row margin-top-20  margin-bottom-40"><div class="col-lg-7 col-md-7"><div class="form-cart-button"><div class=""><a href="/" class="form-cart-continue">Tiếp tục mua hàng</a></div></div></div>'
                            + '<div class="col-lg-5 col-md-5 bg_cart shopping-cart-table-total"><div class="table-total"><table class="table ">'
                            + '<tr class="hidden"><td>Tiền vận chuyển</td><td class="txt-right a-right">Tính khi thanh toán</td></tr>'
                            + '<tr><td class="total-text">Tổng tiền thanh toán</td><td class="1 txt-right totals_price price_end a-right">' + Bizweb.formatMoney(cart.total_price, "{{amount_no_decimals_with_comma_separator}}₫") + '</td></tr></table></div>'
                            + '<a onclick="window.location.href=\'/checkout\'" class="btn-checkout-cart" title="Tiến hành thanh toán">Tiến hành thanh toán</a></div></div>';
                        jQuery(pageCart).appendTo(table);
                        jQuery.each(value, function (i, item) {
                            var buttonQty = "";
                            if (item.quantity == '1') {
                                buttonQty = 'disabled';
                            } else {
                                buttonQty = '';
                            }
                            var link_img1 = Bizweb.resizeImage(item.image, 'compact');
                            if (link_img1 == "null" || link_img1 == '' || link_img1 == null) {
                                link_img1 = 'dist/thumb/large/assets/themes_support/noimage.gif';
                            }

                            var hidden_title_popup = "visible";
                            if (item.variant_title == 'Default Title') {
                                hidden_title_popup = 'hidden';
                            }
                            var pageCartItem = '<div class="item-cart productid-' + item.variant_id + '"><div style="width: 18%" class="image"><a class="product-image" title="' + item.name + '" href="' + item.url + '"><img width="75" height="auto" alt="' + item.name + '" src="' + link_img1 + '"></a></div>'
                                + '<div style="width: 32%" class="a-center"><h3 class="product-name"> <a href="' + item.url + '" title="' + item.title + '">' + item.title + '</a> </h3><span class="variant-title ' + hidden_title_popup + '">' + item.variant_title + '</span>'
                                + '</div><div style="width: 17%" class="a-center"><span class="item-price"> <span class="price">' + Bizweb.formatMoney(item.price, "{{amount_no_decimals_with_comma_separator}}₫") + '</span></span></div>'
                                + '<div style="width: 14%" class="a-center"><div class="input_qty_pr"><input class="variantID" type="hidden" name="variantId" value="' + item.variant_id + '">'
                                + '<input type="text" maxlength="12" readonly min="0" class="check_number_here input-text number-sidebar input_pop input_pop qtyItem' + item.variant_id + '" id="qtyItem' + item.variant_id + '" name="Lines" id="updates_' + item.variant_id + '" size="4" value="' + item.quantity + '">'
                                + '<button onClick="var result = document.getElementById(\'qtyItem' + item.variant_id + '\'); var qtyItem' + item.variant_id + ' = result.value; if( !isNaN( qtyItem' + item.variant_id + ' )) result.value++;return false;" class="increase_pop items-count btn-plus" type="button">+</button><button onClick="var result = document.getElementById(\'qtyItem' + item.variant_id + '\'); var qtyItem' + item.variant_id + ' = result.value; if( !isNaN( qtyItem' + item.variant_id + ' ) &amp;&amp; qtyItem' + item.variant_id + ' &gt; 1 ) result.value--;return false;" ' + buttonQty + ' class="reduced_pop items-count btn-minus" type="button">-</button></div></div>'
                                + '<div style="width: 14%" class="a-center"><span class="cart-price"> <span class="price">' + Bizweb.formatMoney(item.price * item.quantity, "{{amount_no_decimals_with_comma_separator}}₫") + '</span> </span></div>'
                                + '<div style="width: 5%" class="a-center">'
                                + '<a class="remove-itemx remove-item-cart" title="Xóa" href="javascript:;" data-id="' + item.variant_id + '"><span><i class="fa fa-trash-o"></i></span></a>'
                                + '</div>'
                                + '</div>';
                            jQuery(pageCartItem).appendTo(table.find('.cart-tbody'));

                        });
                        jQuery(pageCartCheckout).appendTo(table.children('.cart'));
                    } else {
                        jQuery('<p class="hidden-xs-down ">Không có sản phẩm nào. Quay lại <a href="/collections/all" style="color:;">cửa hàng</a> để tiếp tục mua sắm.</p>').appendTo(table);
                        jQuery('.cart_desktop_page').css('min-height', 'auto');
                    }
                }
            });
        }
    }
    updateCartDesc(cart);
    jQuery('#wait').hide();

}

Bizweb.updateCartPopupForm = function (cart, cart_summary_id, cart_count_id) {

    if ((typeof cart_summary_id) === 'string') {
        var cart_summary = jQuery(cart_summary_id);
        if (cart_summary.length) {
            // Start from scratch.
            cart_summary.empty();
            // Pull it all out.
            jQuery.each(cart, function (key, value) {
                if (key === 'items') {
                    var table = jQuery(cart_summary_id);
                    if (value.length) {
                        jQuery.each(value, function (i, item) {
                            var src = item.image;
                            if (src == null) {
                                src = "dist/thumb/large/assets/themes_support/noimage.gif";
                            }
                            var buttonQty = "";
                            if (item.quantity == '1') {
                                buttonQty = 'disabled';
                            } else {
                                buttonQty = '';
                            }
                            var hidden_title_popup = "visible";
                            if (item.variant_title == 'Default Title') {
                                hidden_title_popup = 'hidden';
                            }
                            var pageCartItem = '<div class="item-popup productid-' + item.variant_id + '">'
                                + '<div style="width: 15%;" class="border height image_ text-left"><div class="item-image">'
                                + '<a class="product-image" href="' + item.url + '" title="' + item.name + '"><img alt="' + item.name + '" src="' + src + '"width="' + '90' + '"\></a>'
                                + '</div></div>'
                                + '<div style="width:40%;" class="height text-left"><div class="item-info"><p class="item-name"><a href="' + item.url + '" title="' + item.name + '">' + item.name + '</a></p>'
                                + '<span class="variant-title-popup ' + hidden_title_popup + '">' + item.variant_title + '</span>'
                                + '<a href="javascript:;" class="remove-item-cart" title="Xóa sản phẩm" data-id="' + item.variant_id + '"><i class="fa fa-close"></i>&nbsp;&nbsp;Xoá sản phẩm</a>'
                                + '<p class="addpass" style="color:#fff;margin:0px;">' + item.variant_id + '</p>'
                                + '</div></div>'
                                + '<div style="width: 15%;" class="border height text-center"><div class="item-price"><span class="price">' + Bizweb.formatMoney(item.price, "{{amount_no_decimals_with_comma_separator}}₫") + '</span>'
                                + '</div></div><div style="width: 15%;" class="border height text-center"><div class="qty_thuongdq check_"><input class="variantID" type="hidden" name="variantId" value="' + item.variant_id + '">'
                                + '<button onClick="var result = document.getElementById(\'qtyItemP' + item.variant_id + '\'); var qtyItemP' + item.variant_id + ' = result.value; if( !isNaN( qtyItemP' + item.variant_id + ' ) &amp;&amp; qtyItemP' + item.variant_id + ' &gt; 1 ) result.value--;return false;" ' + buttonQty + ' class="num1 reduced items-count btn-minus" type="button">-</button>'
                                + '<input type="text" maxlength="12" min="0" readonly class="input-text number-sidebar qtyItemP' + item.variant_id + '" id="qtyItemP' + item.variant_id + '" name="Lines" id="updates_' + item.variant_id + '" size="4" value="' + item.quantity + '">'
                                + '<button onClick="var result = document.getElementById(\'qtyItemP' + item.variant_id + '\'); var qtyItemP' + item.variant_id + ' = result.value; if( !isNaN( qtyItemP' + item.variant_id + ' )) result.value++;return false;" class="num2 increase items-count btn-plus" type="button">+</button></div></div>'
                                + '<div style="width: 15%;" class="border height text-center"><span class="cart-price"> <span class="price">' + Bizweb.formatMoney(item.price * item.quantity, "{{amount_no_decimals_with_comma_separator}}₫") + '</span> </span></div>'
                                + '</div>';
                            jQuery(pageCartItem).appendTo(table);

                            $('.link_product').text();
                        });
                    }
                }
            });
        }
    }
    jQuery('.total-price').html(Bizweb.formatMoney(cart.total_price, "{{amount_no_decimals_with_comma_separator}}₫"));

    updateCartDesc(cart);

}

Bizweb.updateCartPageFormMobile = function (cart, cart_summary_id, cart_count_id) {
    if ((typeof cart_summary_id) === 'string') {
        var cart_summary = jQuery(cart_summary_id);
        if (cart_summary.length) {
            // Start from scratch.
            cart_summary.empty();
            // Pull it all out.
            jQuery.each(cart, function (key, value) {
                if (key === 'items') {

                    var table = jQuery(cart_summary_id);
                    if (value.length) {
                        jQuery('<div class="cart_page_mobile content-product-list"></div>').appendTo(table);
                        jQuery.each(value, function (i, item) {
                            if (item.image != null) {
                                var src = Bizweb.resizeImage(item.image, 'small');
                            } else {
                                var src = "dist/thumb/large/assets/themes_support/noimage.gif";
                            }
                            jQuery('<div class="item-product item-mobile-cart item productid-' + item.variant_id + ' "><div class="item-product-cart-mobile"><a href="' + item.url + '">	<a class="product-images1" href="' + item.url + '"  title="' + item.name + '"><img width="80" height="150" alt="' + item.name + '" src="' + src + '" alt="' + item.name + '"></a></a></div>'
                                + '<div class="title-product-cart-mobile"><h3><a class="" href="' + item.url + '" title="' + item.name + '">' + item.name + '</a></h3><p>Giá: <span>' + Bizweb.formatMoney(item.price, "{{amount_no_decimals_with_comma_separator}}₫") + '</span></p></div>'
                                + '<div class="select-item-qty-mobile"><div class="txt_center in_put check_">'
                                + '<input class="variantID" type="hidden" name="variantId" value="' + item.variant_id + '"><button onClick="var result = document.getElementById(\'qtyMobile' + item.variant_id + '\'); var qtyMobile' + item.variant_id + ' = result.value; if( !isNaN( qtyMobile' + item.variant_id + ' ) &amp;&amp; qtyMobile' + item.variant_id + ' &gt; 0 ) result.value--;return false;" class="reduced items-count btn-minus" type="button">–</button><input type="number" maxlength="12" min="1" readonly class="check_number_here input-text mobile_input number-sidebar qtyMobile' + item.variant_id + '" id="qtyMobile' + item.variant_id + '" name="Lines" id="updates_' + item.variant_id + '" size="4" value="' + item.quantity + '"><button onClick="var result = document.getElementById(\'qtyMobile' + item.variant_id + '\'); var qtyMobile' + item.variant_id + ' = result.value; if( !isNaN( qtyMobile' + item.variant_id + ' )) result.value++;return false;" class="increase items-count btn-plus" type="button">+</button></div>'
                                + '<a class="button remove-item remove-item-cart" href="javascript:;" data-id="' + item.variant_id + '">Xoá</a></div>').appendTo(table.children('.content-product-list'));

                        });

                        jQuery('<div class="header-cart-price" style=""><div class="title-cart a-center"><span class="total_mobile a-center">Tổng tiền: <span class=" totals_price_mobile">' + Bizweb.formatMoney(cart.total_price, "{{amount_no_decimals_with_comma_separator}}₫") + '</span><span></div>'
                            + '<div class="checkout"><button class="btn-proceed-checkout-mobile" title="Tiến hành thanh toán" type="button" onclick="window.location.href=\'/checkout\'">'
                            + '<span>Tiến hành thanh toán</span></button>'
                            + '<button class="btn btn-white contin" title="Tiếp tục mua hàng" type="button" onclick="window.location.href=\'/collections/all\'"><span>Tiếp tục mua hàng</span></button>'
                            + '</div></div>').appendTo(table);
                    } else {
                        jQuery('<p class="hidden-xs-down col-xs-12">Không có sản phẩm nào. Quay lại <a href="/collections/all" style="color:;">cửa hàng</a> để tiếp tục mua sắm.</p>').appendTo(table);
                        jQuery('.cart_desktop_page').css('min-height', 'auto');
                    }

                }
            });
        }
    }

    updateCartDesc(cart);


}


function updateCartDesc(data) {
    var $cartPrice = Bizweb.formatMoney(data.total_price, "{{amount_no_decimals_with_comma_separator}}₫"),
        $cartMobile = $('#header .cart-mobile .quantity-product'),
        $cartDesktop = $('.count_item_pr'),
        $cartDesktopList = $('.cart-counter-list'),
        $cartPopup = $('.cart-popup-count');

    switch (data.item_count) {
        case 0:
            $cartMobile.text('0');
            $cartDesktop.text('0');
            $cartDesktopList.text('0');
            $cartPopup.text('0');

            break;
        case 1:
            $cartMobile.text('1');
            $cartDesktop.text('1');
            $cartDesktopList.text('1');
            $cartPopup.text('1');

            break;
        default:
            $cartMobile.text(data.item_count);
            $cartDesktop.text(data.item_count);
            $cartDesktopList.text(data.item_count);
            $cartPopup.text(data.item_count);

            break;
    }
    $('.top-cart-content .top-subtotal .price, aside.sidebar .block-cart .subtotal .price, .popup-total .total-price').html($cartPrice);
    $('.popup-total .total-price').html($cartPrice);
    $('.shopping-cart-table-total .totals_price').html($cartPrice);
    $('.header-cart-price .totals_price_mobile').html($cartPrice);
    $('.cartCount').html(data.item_count);
}

Bizweb.onCartUpdate = function (cart) {
    Bizweb.updateCartFromForm(cart, '.mini-products-list');
    Bizweb.updateCartPopupForm(cart, '#popup-cart-desktop .tbody-popup');

};
Bizweb.onCartUpdateClick = function (cart, variantId) {
    jQuery.each(cart, function (key, value) {
        if (key === 'items') {
            jQuery.each(value, function (i, item) {
                if (item.variant_id == variantId) {
                    $('.productid-' + variantId).find('.cart-price span.price').html(Bizweb.formatMoney(item.price * item.quantity, "{{amount_no_decimals_with_comma_separator}}₫"));
                    $('.productid-' + variantId).find('.items-count').prop("disabled", false);
                    $('.productid-' + variantId).find('.number-sidebar').prop("disabled", false);
                    $('.productid-' + variantId + ' .number-sidebar').val(item.quantity);
                    if (item.quantity == '1') {
                        $('.productid-' + variantId).find('.items-count.btn-minus').prop("disabled", true);
                    }
                }
            });
        }
    });
    updateCartDesc(cart);
}
Bizweb.onCartRemoveClick = function (cart, variantId) {
    jQuery.each(cart, function (key, value) {
        if (key === 'items') {
            jQuery.each(value, function (i, item) {
                if (item.variant_id == variantId) {
                    $('.productid-' + variantId).remove();
                }
            });
        }
    });
    updateCartDesc(cart);
}
$(window).ready(function () {
    $.ajax({
        type: 'GET',
        url: '/cart.js',
        async: false,
        cache: false,
        dataType: 'json',
        success: function (cart) {
            Bizweb.updateCartFromForm(cart, '.mini-products-list');
            Bizweb.updateCartPopupForm(cart, '#popup-cart-desktop .tbody-popup');

        }
    });
});
