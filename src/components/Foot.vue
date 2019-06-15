<template>
    <footer data-v-7c04fb90="" data-v-bc186c1a="" class="app-bottom-navigator-wrapper app-shell-footer" style=""  v-show="this.$store.state.isShow">
        <div data-v-7c04fb90="" class="fill-height box-flex align-center">
            <router-link data-v-7c04fb90="" class="flex on" data-stat-id="5b0ff65d95a1f2de" to="/">
                <i data-v-7c04fb90="" class="image-icons app-bottom-icon icon-home"></i>
                <span data-v-7c04fb90="">首页</span>
                <!---->
            </router-link>
            <router-link data-v-7c04fb90="" class="flex" data-stat-id="a6da9caf03470e4d" to="/category">
                <i data-v-7c04fb90="" class="image-icons app-bottom-icon icon-category"></i>
                <span data-v-7c04fb90="">分类</span>
                <!---->
            </router-link>
            <router-link data-v-7c04fb90="" class="flex" data-stat-id="bd504b3ba442376d" to="/cart">
                <i data-v-7c04fb90="" class="image-icons app-bottom-icon icon-cart"></i>
                <span data-v-7c04fb90="">购物车</span>
                <!-- <em data-v-7c04fb90="" class="bubble">10</em> -->
            </router-link>
            <router-link data-v-7c04fb90="" class="flex" data-stat-id="e271db51020d3856" to="/user">
                <i data-v-7c04fb90="" class="image-icons app-bottom-icon icon-user"></i>
                <span data-v-7c04fb90="">我的</span>
                <!---->
            </router-link>
        </div>
        <div data-v-7c04fb90="" class="safe-area-inset"></div>
    </footer>
</template>
<style>
.app-shell-footer {
    position: fixed;
    z-index: 9999;
    bottom: 0;
    left: 0;
    right: 0;
}
.app-bottom-navigator-wrapper{
    background: #fff;
    -webkit-transition: -webkit-transform .2s ease-out;
    transition: -webkit-transform .2s ease-out;
    transition: transform .2s ease-out;
    transition: transform .2s ease-out,-webkit-transform .2s ease-out;
    box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
}
.app-bottom-navigator-wrapper .box-flex{
    height: 52px;
}
.fill-height {
    height: 100%;
}
.align-center {
    -webkit-box-align: center;
    align-items: center;
}
.box-flex {
    display: flex;
}
.flex{
    display: block;
    color: #999;
    position: relative;
}
.flex {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
}
.safe-area-inset {
    display: block;
    background: #fff;
    padding-bottom: env(safe-area-inset-bottom);
}
.app-bottom-navigator-wrapper .flex.on{
    color: #ff6700;
}
.app-bottom-navigator-wrapper .flex{
    display: block;
    color: #999;
    position: relative;
}
.flex {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
}
a {
    background-color: transparent;
    outline: 0;
    text-decoration: none;
}
.app-bottom-navigator-wrapper .flex .app-bottom-icon{
    display: block;
    width: .4rem;
    height: .4rem;
    margin: 0 auto .1rem;
}
.image-icons {
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
}
i {
    font-style: italic;
}
.app-bottom-navigator-wrapper .flex.on{
    color: #ff6700;
}
.app-bottom-navigator-wrapper .flex{
    display: block;
    color: #999;
    position: relative;
}
a {
    background-color: transparent;
    outline: 0;
    text-decoration: none;
}

</style>

