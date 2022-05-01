<!doctype html>
<html lang="vi" dir="ltr"
      class="cookies filereader draganddrop no-touchevents supports cssanimations csstransforms csstransforms3d scrolling-enable mouseevents">
<head>
    <meta charset="utf-8">
    <meta name="description" content="Nội thất Lực Mơ">
    <meta name="keywords" content="Nội thất, Lực Mơ">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="author" content="Duc DV Develop">
    <meta name="Language" content="vi">
    <title> @yield('title') </title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <base href="{{asset('')}}">
    <link
        href='http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900italic,900'
        rel='stylesheet' type='text/css'>
    <!-- Asset CSS -->
    <link rel="stylesheet" href="{{ asset('frontend/css/bootstrap.min.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('frontend/css/font-awesome.min.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('frontend/css/elegant-icons.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('frontend/css/nice-select.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('frontend/css/jquery-ui.min.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('frontend/css/owl.carousel.min.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('frontend/css/slicknav.min.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('frontend/css/main.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('frontend/css/style.css') }}" type="text/css">
    <!-- Add CSS -->
    @yield('addCss')
</head>
<body>
<!-- Header All Page -->
@php
    $routeName = \Illuminate\Support\Facades\Route::currentRouteName();
    $paramHero = [];
    if ($routeName !== 'home') {
        $paramHero['normal'] = true;
    }
@endphp

@include('frontend.layouts.header-sp')
@include('frontend.layouts.header-pc')
@includeIf('Product::layouts.category', $paramHero)

@yield('content')

<div class="loader" id="loader">Loading...</div>
<!-- Footer All Page -->
@include('frontend.layouts.footer')

<!-- Asset JS -->
<script src="{{ asset('frontend/js/jquery-3.3.1.min.js') }}"></script>
<script src="{{ asset('frontend/js/bootstrap.min.js') }}"></script>
<script src="{{ asset('frontend/js/jquery.nice-select.min.js') }}"></script>
<script src="{{ asset('frontend/js/jquery-ui.min.js') }}"></script>
<script src="{{ asset('frontend/js/jquery.slicknav.js') }}"></script>
<script src="{{ asset('frontend/js/mixitup.min.js') }}"></script>
<script src="{{ asset('frontend/js/owl.carousel.min.js') }}"></script>
<script src="{{ asset('admin/plugins/toastr/toastr.min.js') }}"></script>
<script src="{{ asset('frontend/js/main.js') }}"></script>
<script src="{{ asset('frontend/js/script.js') }}"></script>
<!-- Add JS -->
@yield('addJs')
</body>
</html>
