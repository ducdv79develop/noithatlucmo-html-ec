@extends('frontend.layouts.master')
@section('title', 'category')
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
                                    <h1 data-animation="fadeInUp" data-delay=".4s">Categories</h1>
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                            <li class="breadcrumb-item"><a href="#">Categories</a></li>
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
        <!-- listing Area Start -->
        <div class="category-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-7 col-lg-8 col-md-10">
                        <div class="section-tittle mb-50">
                            <h2>Shop with us</h2>
                            <p>Browse from 230 latest items</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <!--? Left content -->
                    <div class="col-xl-3 col-lg-3 col-md-4 ">
                        <div class="row">
                            <div class="col-12">
                                <div class="small-tittle mb-45">
                                    <div class="ion"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="12px">
                                            <path fill-rule="evenodd" fill="rgb(27, 207, 107)" d="M7.778,12.000 L12.222,12.000 L12.222,10.000 L7.778,10.000 L7.778,12.000 ZM-0.000,-0.000 L-0.000,2.000 L20.000,2.000 L20.000,-0.000 L-0.000,-0.000 ZM3.333,7.000 L16.667,7.000 L16.667,5.000 L3.333,5.000 L3.333,7.000 Z"></path>
                                        </svg>
                                    </div>
                                    <h4>Filter Product</h4>
                                </div>
                            </div>
                        </div>
                        <!-- Job Category Listing start -->
                        <div class="category-listing mb-50">
                            <div class="categories-wrapper">
                                <div class="row">
                                    <div class="col-12">
                                        <!-- Select State items start -->
                                        <div class="select-categories">
                                            <select name="select1">
                                                <option value="">Type</option>
                                                <option value="">Sofa</option>
                                                <option value="">Table</option>
                                                <option value="">Chair</option>
                                                <option value="">Bead</option>
                                                <option value="">Lightning</option>
                                                <option value="">Decore</option>
                                            </select>
                                        </div>
                                        <!--  Select State items End-->
                                    </div>
                                    <div class="col-12">
                                        <!-- Select km items start -->
                                        <div class="select-categories">
                                            <select name="select2">
                                                <option value="">Size</option>
                                                <option value="">2.2ft</option>
                                                <option value="">5.5ft</option>
                                                <option value="">8.2ft</option>
                                                <option value="">10.2ft</option>
                                            </select>
                                        </div>
                                        <!--  Select km items End-->
                                    </div>
                                    <div class="col-12">
                                        <!-- Select km items start -->
                                        <div class="select-categories">
                                            <select name="select3">
                                                <option value="">Color</option>
                                                <option value="">Whit</option>
                                                <option value="">Green</option>
                                                <option value="">Blue</option>
                                                <option value="">Sky Blue</option>
                                                <option value="">Gray</option>
                                            </select>
                                        </div>
                                        <!--  Select km items End-->
                                    </div>
                                    <div class="col-12">
                                        <!-- Select km items start -->
                                        <div class="select-categories">
                                            <select name="select4">
                                                <option value="">Price range</option>
                                                <option value="">$10 to $20</option>
                                                <option value="">$20 to $30</option>
                                                <option value="">$50 to $80</option>
                                                <option value="">$100 to $120</option>
                                                <option value="">$200 to $300</option>
                                                <option value="">$500 to $600</option>
                                            </select>
                                        </div>
                                        <!--  Select km items End-->
                                    </div>
                                </div>
                            </div>
                            <!-- Range Slider Start -->
                            <div class="range-slider mt-50">
                                <div class="small-tittle small-tittle2">
                                    <h4>Price Range</h4>
                                </div>
                                <div class="range_item">
                                    <!-- <div id="slider-range"></div> -->
                                    <input type="text" class="js-range-slider" value=""/>
                                    <div class="d-flex align-items-center">
                                        <div class="price_text">
                                            <p>Price :</p>
                                        </div>
                                        <div class="price_value d-flex justify-content-center">
                                            <input type="text" class="js-input-from" id="amount" readonly />
                                            <span>to</span>
                                            <input type="text" class="js-input-to" id="amount" readonly />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Range Slider End -->
                            <!-- Check box -->
                            <div class="select-checkbox mt-30 mb-30">
                                <div class="small-tittle">
                                    <h4>Latest Product</h4>
                                </div>
                                <label class="container">Any
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                                <label class="container">Today
                                    <input type="checkbox" checked>
                                    <span class="checkmark"></span>
                                </label>
                                <label class="container">Last 2 days
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                                <label class="container">Last 5 days
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                                <label class="container">Last 10 days
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                                <label class="container">Last 15 days
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <!-- Check box /-->
                        </div>
                        <!-- Job Category Listing End -->
                    </div>
                    <!--?  Right content -->
                    <div class="col-xl-9 col-lg-9 col-md-8 ">
                        <!-- Count of Job list Start -->
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="count-job mb-35">
                                    <span>39, 782 Product found</span>
                                    <!-- Select job items start -->
                                    <div class="select-cat">
                                        <span>Sort by</span>
                                        <select name="select">
                                            <option value="">Sofa</option>
                                            <option value="">Table</option>
                                            <option value="">Chair</option>
                                            <option value="">Bead</option>
                                            <option value="">Lightning</option>
                                            <option value="">Decore</option>
                                        </select>
                                    </div>
                                    <!--  Select job items End-->
                                </div>
                            </div>
                        </div>
                        <!-- Count of Job list End -->
                        <!--? New Arrival Start -->
                        <div class="new-arrival new-arrival3">
                            <div class="row">
                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div class="single-new-arrival mb-50 text-center">
                                        <div class="popular-img">
                                            <img src="assets/img/gallery/xpopular1.png.pagespeed.ic.yyL2OaTOfb.png" alt="">
                                        </div>
                                        <div class="popular-caption">
                                            <h3><a href="#">Bly Microfiber / Microsuede 56" Armless Loveseat</a></h3>
                                            <span>$367</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div class="single-new-arrival mb-50 text-center">
                                        <div class="popular-img">
                                            <img src="assets/img/gallery/xpopular5.png.pagespeed.ic.9ijTPFK1ha.png" alt="">
                                        </div>
                                        <div class="popular-caption">
                                            <h3><a href="#">Bly Microfiber / Microsuede 56" Armless Loveseat</a></h3>
                                            <span>$367</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div class="single-new-arrival mb-50 text-center">
                                        <div class="popular-img">
                                            <img src="assets/img/gallery/xpopular6.png.pagespeed.ic.eu-j96jEiA.png" alt="">
                                        </div>
                                        <div class="popular-caption">
                                            <h3><a href="#">Bly Microfiber / Microsuede 56" Armless Loveseat</a></h3>
                                            <span>$367</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div class="single-new-arrival mb-50 text-center">
                                        <div class="popular-img">
                                            <img src="assets/img/gallery/xpopular7.png.pagespeed.ic.tA_Py_yVEZ.png" alt="">
                                        </div>
                                        <div class="popular-caption">
                                            <h3><a href="#">Bly Microfiber / Microsuede 56" Armless Loveseat</a></h3>
                                            <span>$367</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div class="single-new-arrival mb-50 text-center">
                                        <div class="popular-img">
                                            <img src="assets/img/gallery/xpopular8.png.pagespeed.ic.Y9Q_wv278x.png" alt="">
                                        </div>
                                        <div class="popular-caption">
                                            <h3><a href="#">Bly Microfiber / Microsuede 56" Armless Loveseat</a></h3>
                                            <span>$367</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div class="single-new-arrival mb-50 text-center">
                                        <div class="popular-img">
                                            <img src="assets/img/gallery/xpopular9.png.pagespeed.ic.ZQ6MuqqBzv.png" alt="">
                                        </div>
                                        <div class="popular-caption">
                                            <h3><a href="#">Bly Microfiber / Microsuede 56" Armless Loveseat</a></h3>
                                            <span>$367</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div class="single-new-arrival mb-50 text-center">
                                        <div class="popular-img">
                                            <img src="assets/img/gallery/xpopular2.png.pagespeed.ic.miTZgospL3.jpg" alt="">
                                        </div>
                                        <div class="popular-caption">
                                            <h3><a href="#">Bly Microfiber / Microsuede 56" Armless Loveseat</a></h3>
                                            <span>$367</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div class="single-new-arrival mb-50 text-center">
                                        <div class="popular-img">
                                            <img src="assets/img/gallery/xpopular3.png.pagespeed.ic.UzTNbRHoKq.jpg" alt="">
                                        </div>
                                        <div class="popular-caption">
                                            <h3><a href="#">Bly Microfiber / Microsuede 56" Armless Loveseat</a></h3>
                                            <span>$367</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div class="single-new-arrival mb-50 text-center">
                                        <div class="popular-img">
                                            <img src="assets/img/gallery/xpopular4.png.pagespeed.ic.IAxiRAd8vJ.jpg" alt="">
                                        </div>
                                        <div class="popular-caption">
                                            <h3><a href="#">Bly Microfiber / Microsuede 56" Armless Loveseat</a></h3>
                                            <span>$367</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Button -->
                            <div class="row justify-content-center">
                                <div class="room-btn mt-20">
                                    <a href="catagori.html" class="border-btn">Browse More</a>
                                </div>
                            </div>
                        </div>
                        <!--? New Arrival End -->
                    </div>
                </div>
            </div>
        </div>
        <!-- listing-area Area End -->
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
