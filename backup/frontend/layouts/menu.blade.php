<nav class="@if (isset($mobile)) humberger__menu__nav mobile-menu @else header__menu @endif">
    <ul>
        <li class="active"><a href="{{ route('frontend.home') }}">Trang chủ</a></li>
        <li><a href="{{ route('Product::product.index') }}">Sản phẩm</a></li>
        <li><a href="#">Nhận xét</a></li>
    </ul>
</nav>
