@extends('frontend.layouts.master')
@section('title', 'home')
@section('content')

    <main>
        <!--? slider Area Start-->
        <div class="slider-area ">
            <div class="slider-active">
                <div class="single-slider hero-overly2  slider-height2 d-flex align-items-center slider-bg2">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-lg-8 col-md-8">
                                <div class="hero__caption hero__caption2">
                                    <h1 data-animation="fadeInUp" data-delay=".4s">Checkout</h1>
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                            <li class="breadcrumb-item"><a href="#">checkout</a></li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- slider Area End-->
        <!--? Checkout Area Start-->
        <section class="checkout_area section-padding40">
            <div class="container">
                <div class="returning_customer">
                    <div class="check_title">
                        <h2>
                            Returning Customer?
                            <a href="login.html">Click here to login</a>
                        </h2>
                    </div>
                    <p>
                        If you have shopped with us before, please enter your details in the
                        boxes below. If you are a new customer, please proceed to the
                        Billing & Shipping section.
                    </p>
                    <form class="row contact_form" action="#" method="post" novalidate>
                        <div class="col-md-6 form-group p_star">
                            <input type="text" class="form-control" id="name" name="name" value=" "/>
                            <span class="placeholder" data-placeholder="Username or Email"></span>
                        </div>
                        <div class="col-md-6 form-group p_star">
                            <input type="password" class="form-control" id="password" name="password" value=""/>
                            <span class="placeholder" data-placeholder="Password"></span>
                        </div>
                        <div class="col-md-12 form-group d-flex flex-wrap">
                            <a href="login.html" value="submit" class="btn"> log in</a>
                            <div class="checkout-cap ml-5">
                                <input type="checkbox" id="fruit01" name="keep-log">
                                <label for="fruit01">Create an account?</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="cupon_area">
                    <div class="check_title">
                        <h2> Have a coupon?
                            <a href="#">Click here to enter your code</a>
                        </h2>
                    </div>
                    <input type="text" placeholder="Enter coupon code"/>
                    <a class="btn" href="#">Apply Coupon</a>
                </div>
                <div class="billing_details">
                    <div class="row">
                        <div class="col-lg-8">
                            <h3>Billing Details</h3>
                            <form class="row contact_form" action="#" method="post" novalidate>
                                <div class="col-md-6 form-group p_star">
                                    <input type="text" class="form-control" id="first" name="name"/>
                                    <span class="placeholder" data-placeholder="First name"></span>
                                </div>
                                <div class="col-md-6 form-group p_star">
                                    <input type="text" class="form-control" id="last" name="name"/>
                                    <span class="placeholder" data-placeholder="Last name"></span>
                                </div>
                                <div class="col-md-12 form-group">
                                    <input type="text" class="form-control" id="company" name="company" placeholder="Company name"/>
                                </div>
                                <div class="col-md-6 form-group p_star">
                                    <input type="text" class="form-control" id="number" name="number"/>
                                    <span class="placeholder" data-placeholder="Phone number"></span>
                                </div>
                                <div class="col-md-6 form-group p_star">
                                    <input type="text" class="form-control" id="email" name="compemailany"/>
                                    <span class="placeholder" data-placeholder="Email Address"></span>
                                </div>
                                <div class="col-md-12 form-group p_star">
                                    <select class="country_select">
                                        <option value="1">Country</option>
                                        <option value="2">Country</option>
                                        <option value="4">Country</option>
                                    </select>
                                </div>
                                <div class="col-md-12 form-group p_star">
                                    <input type="text" class="form-control" id="add1" name="add1"/>
                                    <span class="placeholder" data-placeholder="Address line 01"></span>
                                </div>
                                <div class="col-md-12 form-group p_star">
                                    <input type="text" class="form-control" id="add2" name="add2"/>
                                    <span class="placeholder" data-placeholder="Address line 02"></span>
                                </div>
                                <div class="col-md-12 form-group p_star">
                                    <input type="text" class="form-control" id="city" name="city"/>
                                    <span class="placeholder" data-placeholder="Town/City"></span>
                                </div>
                                <div class="col-md-12 form-group p_star">
                                    <select class="country_select">
                                        <option value="1">District</option>
                                        <option value="2">District</option>
                                        <option value="4">District</option>
                                    </select>
                                </div>
                                <div class="col-md-12 form-group">
                                    <input type="text" class="form-control" id="zip" name="zip" placeholder="Postcode/ZIP"/>
                                </div>
                                <div class="col-md-12 form-group">
                                    <div class="checkout-cap">
                                        <input type="checkbox" id="fruit1" name="keep-log">
                                        <label for="fruit1">Create an account?</label>
                                    </div>
                                </div>
                                <div class="col-md-12 form-group">
                                    <div class="creat_account">
                                        <h3>Shipping Details</h3>
                                        <div class="checkout-cap">
                                            <input type="checkbox" id="f-option3" name="selector"/>
                                            <label for="f-option3">Ship to a different address?</label>
                                        </div>
                                    </div>
                                    <textarea class="form-control" name="message" id="message" rows="1" placeholder="Order Notes"></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-4">
                            <div class="order_box">
                                <h2>Your Order</h2>
                                <ul class="list">
                                    <li>
                                        <a href="#">Product<span>Total</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Fresh Blackberry
                                            <span class="middle">x 02</span>
                                            <span class="last">$720.00</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Fresh Tomatoes
                                            <span class="middle">x 02</span>
                                            <span class="last">$720.00</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Fresh Brocoli
                                            <span class="middle">x 02</span>
                                            <span class="last">$720.00</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul class="list list_2">
                                    <li>
                                        <a href="#">Subtotal <span>$2160.00</span></a>
                                    </li>
                                    <li>
                                        <a href="#">Shipping
                                            <span>Flat rate: $50.00</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Total<span>$2210.00</span>
                                        </a>
                                    </li>
                                </ul>
                                <div class="payment_item">
                                    <div class="radion_btn">
                                        <input type="radio" id="f-option5" name="selector"/>
                                        <label for="f-option5">Check payments</label>
                                        <div class="check"></div>
                                    </div>
                                    <p> Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode. </p>
                                </div>
                                <div class="payment_item active">
                                    <div class="radion_btn">
                                        <input type="radio" id="f-option6" name="selector"/>
                                        <label for="f-option6">Paypal </label>
                                        <img src="assets/img/gallery/xcard.jpg.pagespeed.ic.0xGhW8Sk91.jpg" alt=""/>
                                        <div class="check"></div>
                                    </div>
                                    <p> Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode. </p>
                                </div>
                                <div class="creat_account checkout-cap">
                                    <input type="checkbox" id="f-option8" name="selector"/>
                                    <label for="f-option8">I’ve read and accept the <a href="#">terms & conditions*</a> </label>
                                </div>
                                <a class="btn w-100" href="#">Proceed to Paypal</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--End Checkout Area -->
        <!--? Services Area Start -->
        <div class="categories-area section-padding40 gray-bg">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-cat mb-50 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                            <div class="cat-icon">
                                <img src="assets/img/icon/services1.svg" alt="">
                            </div>
                            <div class="cat-cap">
                                <h5>Fast & Free Delivery</h5>
                                <p>Free delivery on all orders</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-cat mb-50 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                            <div class="cat-icon">
                                <img src="assets/img/icon/services2.svg" alt="">
                            </div>
                            <div class="cat-cap">
                                <h5>Secure Payment</h5>
                                <p>Free delivery on all orders</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-cat mb-50 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                            <div class="cat-icon">
                                <img src="assets/img/icon/services3.svg" alt="">
                            </div>
                            <div class="cat-cap">
                                <h5>Money Back Guarantee</h5>
                                <p>Free delivery on all orders</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-cat mb-50 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                            <div class="cat-icon">
                                <img src="assets/img/icon/services4.svg" alt="">
                            </div>
                            <div class="cat-cap">
                                <h5>Online Support</h5>
                                <p>Free delivery on all orders</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--? Services Area End -->
    </main>
@endsection
