<div id="preloder">
    <div class="loader"></div>
</div>

<div class="humberger__menu__overlay"></div>
<div class="humberger__menu__wrapper">
    <div class="humberger__menu__logo">
        <a href="{{ route('frontend.home') }}"><img src="{{ asset('frontend/img/logo.png') }}" alt=""></a>
    </div>
    <div class="humberger__menu__cart">
        <ul>
            <li><a href="#"><i class="fa fa-heart"></i> <span>0</span></a></li>
            <li><a href="#"><i class="fa fa-shopping-bag"></i>
                    <span class="total_quantity_cart">{{ isset($totalCart) ? $totalCart : 0 }}</span>
                </a></li>
        </ul>
        <div class="header__cart__price">Tổng: <span>$150.00</span></div>
    </div>
    <div class="humberger__menu__widget">
        <div class="header__top__right__language">
            <div>Tiếng Việt</div>
            <span class="arrow_carrot-down"></span>
            <ul>
                <li><a href="#">Tiếng Việt</a></li>
                <li><a href="#">English</a></li>
            </ul>
        </div>
        <div class="header__top__right__auth">
            <a href="#"><i class="fa fa-user"></i> Đăng nhập</a>
        </div>
    </div>
    @include('frontend.layouts.menu', ['mobile' => true])
    <div id="mobile-menu-wrap"></div>
    <div class="header__top__right__social">
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-pinterest-p"></i></a>
    </div>
    <div class="humberger__menu__contact">
        <ul>
            <li>Miễn phí giao hàng trong phạm vi 20km</li>
        </ul>
    </div>
    <a href="{{ route('admin.form_login') }}" class="btn btn-light">Quản lý</a>
</div>

