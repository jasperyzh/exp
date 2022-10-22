<template>
    <div class="bs4 arch">

        <pre>
            paramount-revamp: new frontend
            <a href="https://archo-vue.vercel.app/home2-light">https://archo-vue.vercel.app/home2-light</a>
        </pre>
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container"><a href="/" class="logo nuxt-link-active"><img
                        src="https://archo-vue.vercel.app/img/logo-light.png" alt="logo"></a> <button type="button"
                    data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span
                        class="icon-bar"><i class="fas fa-bars"></i></span></button>
                <div id="navbarSupportedContent" class="collapse navbar-collapse">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item dropdown"><span data-toggle="dropdown" role="button" aria-haspopup="true"
                                aria-expanded="false" class="nav-link dropdown-toggle">
                                Home
                            </span>
                            <div class="dropdown-menu"><a href="/home1" class="dropdown-item">Home Default</a> <a
                                    href="/home2" class="dropdown-item">Interior Agency</a> <a href="/home3"
                                    class="dropdown-item">Creative Arch</a> <a href="/home4"
                                    class="dropdown-item">Architecture Studio</a> <a href="/home1-light"
                                    class="dropdown-item">Home Light</a> <a href="/home2-light" aria-current="page"
                                    class="dropdown-item nuxt-link-exact-active nuxt-link-active">Interior Light</a> <a
                                    href="/home3-light" class="dropdown-item">Architecture Light</a></div>
                        </li>
                        <li class="nav-item"><a href="/about" class="nav-link">About</a></li>
                        <li class="nav-item dropdown"><span data-toggle="dropdown" role="button" aria-haspopup="true"
                                aria-expanded="false" class="nav-link dropdown-toggle">
                                Portfolio
                            </span>
                            <div class="dropdown-menu"><a href="/works1" class="dropdown-item">Two Column</a> <a
                                    href="/works2" class="dropdown-item">Three Column</a> <a href="/works3"
                                    class="dropdown-item">Four Column</a> <a href="/project-details"
                                    class="dropdown-item">Single Project</a></div>
                        </li>
                        <li class="nav-item dropdown"><span data-toggle="dropdown" role="button" aria-haspopup="true"
                                aria-expanded="false" class="nav-link dropdown-toggle">
                                Blog
                            </span>
                            <div class="dropdown-menu"><a href="/blog" class="dropdown-item">Blogs</a> <a
                                    href="/blog-details" class="dropdown-item">Post Details</a></div>
                        </li>
                        <li class="nav-item"><a href="/contact" class="nav-link">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- landing_carousel -->
        <pre>landing_carousel</pre>
        <!-- <header class="slid-half">
            <div id="js-cta-slider" class="cta__slider-wrapper nofull swiper-container">
                <div
                    class="swiper-container swiper-wrapper cta__slider swiper-container-initialized swiper-container-vertical">
                    <div class="swiper-wrapper"
                        style="transition-duration: 1000ms; transform: translate3d(0px, -2128px, 0px);">
                        <div class="cta__slider-item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                            data-swiper-slide-index="2" style="height: 1064px;">
                            <div class="media-wrapper slide-inner valign" data-swiper-parallax="1427.25"
                                style="transition-duration: 1000ms; transform: translate3d(0px, 1427.25px, 0px);">
                                <div data-overlay-dark="5" class="bg-img"
                                    style="background-image:url(https://archo-vue.vercel.app/img/slid/n/03.jpg)"></div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-10 offset-lg-1">
                                            <div class="caption"><span class="top-corn"></span> <span
                                                    class="bottom-corn"></span>
                                                <div class="custom-font">
                                                    <h5 class="thin custom-font">Elegant</h5>
                                                    <h1 data-splitting="" class="words chars splitting"
                                                        style="--word-total:2; --char-total:12;"><a
                                                            href="/home2-light#0" class=""><span class="word"
                                                                data-word="Unique" style="--word-index:0;"><span
                                                                    class="char" data-char="U"
                                                                    style="--char-index:0;">U</span><span class="char"
                                                                    data-char="n" style="--char-index:1;">n</span><span
                                                                    class="char" data-char="i"
                                                                    style="--char-index:2;">i</span><span class="char"
                                                                    data-char="q" style="--char-index:3;">q</span><span
                                                                    class="char" data-char="u"
                                                                    style="--char-index:4;">u</span><span class="char"
                                                                    data-char="e"
                                                                    style="--char-index:5;">e</span></span><span
                                                                class="whitespace"> </span><span class="word"
                                                                data-word="Design" style="--word-index:1;"><span
                                                                    class="char" data-char="D"
                                                                    style="--char-index:6;">D</span><span class="char"
                                                                    data-char="e" style="--char-index:7;">e</span><span
                                                                    class="char" data-char="s"
                                                                    style="--char-index:8;">s</span><span class="char"
                                                                    data-char="i" style="--char-index:9;">i</span><span
                                                                    class="char" data-char="g"
                                                                    style="--char-index:10;">g</span><span class="char"
                                                                    data-char="n"
                                                                    style="--char-index:11;">n</span></span></a></h1>
                                                </div>
                                                <p>Right design and right ideas matter a lot of in interior design
                                                    business. <br> a style that makes a statement.</p> <a
                                                    href="/home2-light#0"
                                                    class="btn-curve btn-color mt-30"><span>Discover Work</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cta__slider-item swiper-slide swiper-slide-prev" data-swiper-slide-index="0"
                            style="height: 1064px;">
                            <div class="media-wrapper slide-inner valign" data-swiper-parallax="1427.25"
                                style="transition-duration: 1000ms; transform: translate3d(0px, 1427.25px, 0px);">
                                <div data-overlay-dark="5" class="bg-img"
                                    style="background-image:url(https://archo-vue.vercel.app/img/slid/n/01.jpg)"></div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-10 offset-lg-1">
                                            <div class="caption"><span class="top-corn"></span> <span
                                                    class="bottom-corn"></span>
                                                <div class="custom-font">
                                                    <h5 class="thin custom-font">interior</h5>
                                                    <h1 data-splitting="" class="words chars splitting"
                                                        style="--word-total:2; --char-total:12;"><a
                                                            href="/home2-light#0" class=""><span class="word"
                                                                data-word="design" style="--word-index:0;"><span
                                                                    class="char" data-char="d"
                                                                    style="--char-index:0;">d</span><span class="char"
                                                                    data-char="e" style="--char-index:1;">e</span><span
                                                                    class="char" data-char="s"
                                                                    style="--char-index:2;">s</span><span class="char"
                                                                    data-char="i" style="--char-index:3;">i</span><span
                                                                    class="char" data-char="g"
                                                                    style="--char-index:4;">g</span><span class="char"
                                                                    data-char="n"
                                                                    style="--char-index:5;">n</span></span><span
                                                                class="whitespace"> </span><span class="word"
                                                                data-word="agency" style="--word-index:1;"><span
                                                                    class="char" data-char="a"
                                                                    style="--char-index:6;">a</span><span class="char"
                                                                    data-char="g" style="--char-index:7;">g</span><span
                                                                    class="char" data-char="e"
                                                                    style="--char-index:8;">e</span><span class="char"
                                                                    data-char="n" style="--char-index:9;">n</span><span
                                                                    class="char" data-char="c"
                                                                    style="--char-index:10;">c</span><span class="char"
                                                                    data-char="y"
                                                                    style="--char-index:11;">y</span></span></a></h1>
                                                </div>
                                                <p>Right design and right ideas matter a lot of in interior design
                                                    business. <br> a style that makes a statement.</p> <a
                                                    href="/home2-light#0"
                                                    class="btn-curve btn-color mt-30"><span>Discover Work</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cta__slider-item swiper-slide swiper-slide-active" data-swiper-slide-index="1"
                            style="height: 1064px;">
                            <div class="media-wrapper slide-inner valign" data-swiper-parallax="1427.25"
                                style="transition-duration: 1000ms; transform: translate3d(0px, 0px, 0px);">
                                <div data-overlay-dark="5" class="bg-img"
                                    style="background-image:url(https://archo-vue.vercel.app/img/slid/n/02.jpg)"></div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-10 offset-lg-1">
                                            <div class="caption"><span class="top-corn"></span> <span
                                                    class="bottom-corn"></span>
                                                <div class="custom-font">
                                                    <h5 class="thin custom-font">Innovative</h5>
                                                    <h1 data-splitting="" class="words chars splitting"
                                                        style="--word-total:2; --char-total:14;"><a
                                                            href="/home2-light#0" class=""><span class="word"
                                                                data-word="Interior" style="--word-index:0;"><span
                                                                    class="char" data-char="I"
                                                                    style="--char-index:0;">I</span><span class="char"
                                                                    data-char="n" style="--char-index:1;">n</span><span
                                                                    class="char" data-char="t"
                                                                    style="--char-index:2;">t</span><span class="char"
                                                                    data-char="e" style="--char-index:3;">e</span><span
                                                                    class="char" data-char="r"
                                                                    style="--char-index:4;">r</span><span class="char"
                                                                    data-char="i" style="--char-index:5;">i</span><span
                                                                    class="char" data-char="o"
                                                                    style="--char-index:6;">o</span><span class="char"
                                                                    data-char="r"
                                                                    style="--char-index:7;">r</span></span><span
                                                                class="whitespace"> </span><span class="word"
                                                                data-word="Design" style="--word-index:1;"><span
                                                                    class="char" data-char="D"
                                                                    style="--char-index:8;">D</span><span class="char"
                                                                    data-char="e" style="--char-index:9;">e</span><span
                                                                    class="char" data-char="s"
                                                                    style="--char-index:10;">s</span><span class="char"
                                                                    data-char="i" style="--char-index:11;">i</span><span
                                                                    class="char" data-char="g"
                                                                    style="--char-index:12;">g</span><span class="char"
                                                                    data-char="n"
                                                                    style="--char-index:13;">n</span></span></a></h1>
                                                </div>
                                                <p>Right design and right ideas matter a lot of in interior design
                                                    business. <br> a style that makes a statement.</p> <a
                                                    href="/home2-light#0"
                                                    class="btn-curve btn-color mt-30"><span>Discover Work</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cta__slider-item swiper-slide swiper-slide-next" data-swiper-slide-index="2"
                            style="height: 1064px;">
                            <div class="media-wrapper slide-inner valign" data-swiper-parallax="1427.25"
                                style="transition-duration: 1000ms; transform: translate3d(0px, -1427.25px, 0px);">
                                <div data-overlay-dark="5" class="bg-img"
                                    style="background-image:url(https://archo-vue.vercel.app/img/slid/n/03.jpg)"></div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-10 offset-lg-1">
                                            <div class="caption"><span class="top-corn"></span> <span
                                                    class="bottom-corn"></span>
                                                <div class="custom-font">
                                                    <h5 class="thin custom-font">Elegant</h5>
                                                    <h1 data-splitting="" class="words chars splitting"
                                                        style="--word-total:2; --char-total:12;"><a
                                                            href="/home2-light#0" class=""><span class="word"
                                                                data-word="Unique" style="--word-index:0;"><span
                                                                    class="char" data-char="U"
                                                                    style="--char-index:0;">U</span><span class="char"
                                                                    data-char="n" style="--char-index:1;">n</span><span
                                                                    class="char" data-char="i"
                                                                    style="--char-index:2;">i</span><span class="char"
                                                                    data-char="q" style="--char-index:3;">q</span><span
                                                                    class="char" data-char="u"
                                                                    style="--char-index:4;">u</span><span class="char"
                                                                    data-char="e"
                                                                    style="--char-index:5;">e</span></span><span
                                                                class="whitespace"> </span><span class="word"
                                                                data-word="Design" style="--word-index:1;"><span
                                                                    class="char" data-char="D"
                                                                    style="--char-index:6;">D</span><span class="char"
                                                                    data-char="e" style="--char-index:7;">e</span><span
                                                                    class="char" data-char="s"
                                                                    style="--char-index:8;">s</span><span class="char"
                                                                    data-char="i" style="--char-index:9;">i</span><span
                                                                    class="char" data-char="g"
                                                                    style="--char-index:10;">g</span><span class="char"
                                                                    data-char="n"
                                                                    style="--char-index:11;">n</span></span></a></h1>
                                                </div>
                                                <p>Right design and right ideas matter a lot of in interior design
                                                    business. <br> a style that makes a statement.</p> <a
                                                    href="/home2-light#0"
                                                    class="btn-curve btn-color mt-30"><span>Discover Work</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cta__slider-item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                            data-swiper-slide-index="0" style="height: 1064px;">
                            <div class="media-wrapper slide-inner valign" data-swiper-parallax="1427.25"
                                style="transition-duration: 1000ms; transform: translate3d(0px, -1427.25px, 0px);">
                                <div data-overlay-dark="5" class="bg-img"
                                    style="background-image:url(https://archo-vue.vercel.app/img/slid/n/01.jpg)"></div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-10 offset-lg-1">
                                            <div class="caption"><span class="top-corn"></span> <span
                                                    class="bottom-corn"></span>
                                                <div class="custom-font">
                                                    <h5 class="thin custom-font">interior</h5>
                                                    <h1 data-splitting="" class="words chars splitting"
                                                        style="--word-total:2; --char-total:12;"><a
                                                            href="/home2-light#0" class=""><span class="word"
                                                                data-word="design" style="--word-index:0;"><span
                                                                    class="char" data-char="d"
                                                                    style="--char-index:0;">d</span><span class="char"
                                                                    data-char="e" style="--char-index:1;">e</span><span
                                                                    class="char" data-char="s"
                                                                    style="--char-index:2;">s</span><span class="char"
                                                                    data-char="i" style="--char-index:3;">i</span><span
                                                                    class="char" data-char="g"
                                                                    style="--char-index:4;">g</span><span class="char"
                                                                    data-char="n"
                                                                    style="--char-index:5;">n</span></span><span
                                                                class="whitespace"> </span><span class="word"
                                                                data-word="agency" style="--word-index:1;"><span
                                                                    class="char" data-char="a"
                                                                    style="--char-index:6;">a</span><span class="char"
                                                                    data-char="g" style="--char-index:7;">g</span><span
                                                                    class="char" data-char="e"
                                                                    style="--char-index:8;">e</span><span class="char"
                                                                    data-char="n" style="--char-index:9;">n</span><span
                                                                    class="char" data-char="c"
                                                                    style="--char-index:10;">c</span><span class="char"
                                                                    data-char="y"
                                                                    style="--char-index:11;">y</span></span></a></h1>
                                                </div>
                                                <p>Right design and right ideas matter a lot of in interior design
                                                    business. <br> a style that makes a statement.</p> <a
                                                    href="/home2-light#0"
                                                    class="btn-curve btn-color mt-30"><span>Discover Work</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>
                <div class="cta__slider-arrows"><i id="js-cta-slider-next"
                        class="cta__slider-arrow cta__slider-arrow--next" tabindex="0" role="button"
                        aria-label="Next slide"><i class="fas fa-chevron-up"></i></i> <i id="js-cta-slider-previous"
                        class="cta__slider-arrow cta__slider-arrow--previous" tabindex="0" role="button"
                        aria-label="Previous slide"><i class="fas fa-chevron-down"></i></i></div>
            </div>
            <div class="swiper-pagination top custom-font swiper-pagination-fraction"><span
                    class="swiper-pagination-current">2</span><span class="swiper-pagination-total">3</span></div>
        </header> -->

        <!-- services -->
        <section class="services">
            <div class="feat-top">
                <div class="notfull bg-gray wow animated" style="visibility: visible;"></div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-4">
                            <div data-wow-delay="1.0s" class="item-sm wow fadeInUp"
                                style="visibility: visible; animation-delay: 1s; animation-name: fadeInUp;">
                                <div class="box">
                                    <h6 class="mb-20"><span class="custom-font numb">01</span> Architecture</h6>
                                    <p>Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div data-wow-delay="1.1s" class="item-sm wow fadeInUp"
                                style="visibility: visible; animation-delay: 1.1s; animation-name: fadeInUp;">
                                <div class="box">
                                    <h6 class="mb-20"><span class="custom-font numb">02</span> Interior Design</h6>
                                    <p>Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div data-wow-delay="1.2s" class="item-sm wow fadeInUp"
                                style="visibility: visible; animation-delay: 1.2s; animation-name: fadeInUp;">
                                <div class="box">
                                    <h6 class="mb-20"><span class="custom-font numb">03</span> 3D Modeling</h6>
                                    <p>Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- about -->
        <section class="about section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 valign">
                        <div data-wow-delay=".3s" class="exp-content nopat wow fadeInUp"
                            style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
                            <h6 class="sub-title">About Us</h6>
                            <h2 class="mb-20 playfont">
                                Best Designers
                                <br>
                                Architectures for You.
                                <br>
                            </h2>
                            <p>
                                Architecture bibendum pharetra eleifend. Suspendisse vel volutpat purus, sit amet
                                bibendum nisl. Cras mollis turpis a ipsum ultes, nec condimentum ipsum consequat. Mauris
                                vitae consequat nibh, vitae interdum mi.
                            </p>
                            <ul>
                                <li>Architecture</li>
                                <li>Interior Design</li>
                                <li>Furniture</li>
                            </ul> <a href="/home2-light#0" class="btn-curve btn-color mt-30"><span>Read More</span></a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="ab-exp">
                            <div class="row">
                                <div class="col-md-4 mb-20">
                                    <div class="pattern bg-img bg-repeat"
                                        style="background-image:url(https://archo-vue.vercel.app/img/line-pattern.png)">
                                    </div>
                                </div>
                                <div data-wow-delay=".3s" class="col-md-8 wow fadeInUp"
                                    style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
                                    <div class="img mb-20 wow imago animated" style="visibility: visible;"><img
                                            src="https://archo-vue.vercel.app/img/ab1.jpg" alt=""></div>
                                </div>
                                <div data-wow-delay=".3s" class="col-md-7 wow fadeInUp"
                                    style="visibility: hidden; animation-delay: 0.3s; animation-name: none;">
                                    <div class="img wow imago" style="visibility: hidden; animation-name: none;"><img
                                            src="https://archo-vue.vercel.app/img/ab2.jpg" alt=""></div>
                                </div>
                                <div class="col-md-5">
                                    <div class="years-exp">
                                        <div class="exp-text">
                                            <h2 class="custom-font">21</h2>
                                            <h6>Years Of Experience</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- portfolio_slide -->
        <section class="portfolio full-bg">
            <div class="container-fluid">
                <div class="row">
                    <div data-tab="tab-1" class="col-lg-3 col-md-6 cluom">
                        <div class="info">
                            <h6 class="custom-font">Interior</h6>
                            <h5>Exterior Designs</h5>
                        </div>
                        <div class="more"><a href="/home2-light#0" class="">View Project <i
                                    class="fas fa-chevron-right"></i></a></div>
                    </div>
                    <div data-tab="tab-2" class="col-lg-3 col-md-6 cluom">
                        <div class="info">
                            <h6 class="custom-font">Interior</h6>
                            <h5>Maroon Beach Hotel</h5>
                        </div>
                        <div class="more"><a href="/home2-light#0" class="">View Project <i
                                    class="fas fa-chevron-right"></i></a></div>
                    </div>
                    <div data-tab="tab-3" class="col-lg-3 col-md-6 cluom">
                        <div class="info">
                            <h6 class="custom-font">Interior</h6>
                            <h5>Apartment Renovation</h5>
                        </div>
                        <div class="more"><a href="/home2-light#0" class="">View Project <i
                                    class="fas fa-chevron-right"></i></a></div>
                    </div>
                    <div data-tab="tab-4" class="col-lg-3 col-md-6 cluom current">
                        <div class="info">
                            <h6 class="custom-font">Interior</h6>
                            <h5>Modern Minimalist House</h5>
                        </div>
                        <div class="more"><a href="/home2-light#0" class="">View Project <i
                                    class="fas fa-chevron-right"></i></a></div>
                    </div>
                </div>
            </div>
            <div class="glry-img">
                <div id="tab-1" data-overlay-dark="2" class="bg-img tab-img"
                    style="background-image:url(https://archo-vue.vercel.app/img/portfolio/full/01.jpg)"></div>
                <div id="tab-2" data-overlay-dark="2" class="bg-img tab-img"
                    style="background-image:url(https://archo-vue.vercel.app/img/portfolio/full/02.jpg)"></div>
                <div id="tab-3" data-overlay-dark="2" class="bg-img tab-img"
                    style="background-image:url(https://archo-vue.vercel.app/img/portfolio/full/03.jpg)"></div>
                <div id="tab-4" data-overlay-dark="2" class="bg-img tab-img current"
                    style="background-image:url(https://archo-vue.vercel.app/img/portfolio/full/04.jpg)"></div>
            </div>
        </section>

        <!-- work_process -->
        <section data-background="img/dots.png" class="process section-padding bg-img bg-repeat">
            <div class="container">
                <div class="section-head text-center">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-8 col-sm-10">
                            <h6 data-wow-delay=".3s" class="custom-font wow fadeInDown"
                                style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInDown;">How We
                                Do It</h6>
                            <h4 data-wow-delay=".5s" class="playfont wow flipInX"
                                style="visibility: visible; animation-delay: 0.5s; animation-name: flipInX;">Work
                                Process</h4>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div data-wow-delay="0.3s" class="col-lg-3 col-md-6 coulmn wow fadeInUp"
                        style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
                        <div class="item">
                            <div class="bg-img"
                                style="background-image:url(https://archo-vue.vercel.app/img/process/01.jpg)">
                                <h3 class="numb custom-font">01</h3>
                            </div>
                            <div class="cont">
                                <h6 class="mb-10">Concept</h6>
                                <p>Nulla metus metus ullamcorper vel tincidunt sed euismod.</p>
                            </div>
                        </div>
                    </div>
                    <div data-wow-delay="0.4s" class="col-lg-3 col-md-6 coulmn wow fadeInUp"
                        style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
                        <div class="item">
                            <div class="bg-img"
                                style="background-image:url(https://archo-vue.vercel.app/img/process/02.jpg)">
                                <h3 class="numb custom-font">02</h3>
                            </div>
                            <div class="cont">
                                <h6 class="mb-10">Design Process</h6>
                                <p>Nulla metus metus ullamcorper vel tincidunt sed euismod.</p>
                            </div>
                        </div>
                    </div>
                    <div data-wow-delay="0.5s" class="col-lg-3 col-md-6 coulmn wow fadeInUp"
                        style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
                        <div class="item">
                            <div class="bg-img"
                                style="background-image:url(https://archo-vue.vercel.app/img/process/03.jpg)">
                                <h3 class="numb custom-font">03</h3>
                            </div>
                            <div class="cont">
                                <h6 class="mb-10">Supervision</h6>
                                <p>Nulla metus metus ullamcorper vel tincidunt sed euismod.</p>
                            </div>
                        </div>
                    </div>
                    <div data-wow-delay="0.6s" class="col-lg-3 col-md-6 wow fadeInUp"
                        style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;">
                        <div class="item">
                            <div class="bg-img"
                                style="background-image:url(https://archo-vue.vercel.app/img/process/04.jpg)">
                                <h3 class="numb custom-font">04</h3>
                            </div>
                            <div class="cont">
                                <h6 class="mb-10">Budget Planning</h6>
                                <p>Nulla metus metus ullamcorper vel tincidunt sed euismod.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- team -->
        <section class="team section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="tit">
                            <h6 data-wow-delay=".3s" class="custom-font mb-10 wow fadeInDown"
                                style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInDown;">Some
                                thoughts from Us</h6>
                            <h3 data-wow-delay=".5s" class="wow flipInX"
                                style="visibility: visible; animation-delay: 0.5s; animation-name: flipInX;">Our
                                Employees</h3>
                            <p data-wow-delay=".3s" class="wow fadeInUp"
                                style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
                                We feel proud for our expert team members beatae ipsum dolor sit amet, consectetur
                                adipisicing elit mauris vitae consequat nibh, vitae interdum mi.
                            </p>
                            <div data-wow-delay=".3s" class="navs mt-30 wow fadeInUp"
                                style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"><span
                                    class="prev"><i class="fas fa-long-arrow-alt-left"></i></span> <span class="next"><i
                                        class="fas fa-long-arrow-alt-right"></i></span></div>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="team-container">
                            <div dir="ltr" class="slick-dotted slick-slider slick-initialized" data-v-3d1a4f76="">
                                <div class="slick-list" data-v-3d1a4f76="">
                                    <div class="slick-track"
                                        style="width: 4455px; opacity: 1; transform: translate3d(-2079px, 0px, 0px);"
                                        data-v-e4caeaf8="" data-v-3d1a4f76="">
                                        <div tabindex="-1" data-index="-3" aria-hidden="true"
                                            class="slick-slide slick-cloned" style="width: 297px;" data-v-e4caeaf8="">
                                            <div data-v-e4caeaf8="">
                                                <div data-wow-delay=".3s" tabindex="-1" class="item wow fadeInUp"
                                                    style="width: 100%; display: inline-block; visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"
                                                    data-v-e4caeaf8="">
                                                    <div class="img wow imago animated" data-v-e4caeaf8=""
                                                        style="visibility: visible;"><img
                                                            src="https://archo-vue.vercel.app/img/team/4.jpg" alt=""
                                                            data-v-e4caeaf8="">
                                                        <div class="social" data-v-e4caeaf8=""><a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-facebook-f"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-twitter"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-behance"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-linkedin-in"
                                                                    data-v-e4caeaf8=""></i></a></div>
                                                    </div>
                                                    <div class="info" data-v-e4caeaf8="">
                                                        <h5 data-v-e4caeaf8="">Robert Front</h5> <span
                                                            data-v-e4caeaf8="">CEO Founder</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div tabindex="-1" data-index="-2" aria-hidden="true"
                                            class="slick-slide slick-cloned" style="width: 297px;" data-v-e4caeaf8="">
                                            <div data-v-e4caeaf8="">
                                                <div data-wow-delay=".3s" tabindex="-1" class="item wow fadeInUp"
                                                    style="width: 100%; display: inline-block; visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"
                                                    data-v-e4caeaf8="">
                                                    <div class="img wow imago animated" data-v-e4caeaf8=""
                                                        style="visibility: visible;"><img
                                                            src="https://archo-vue.vercel.app/img/team/5.jpg" alt=""
                                                            data-v-e4caeaf8="">
                                                        <div class="social" data-v-e4caeaf8=""><a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-facebook-f"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-twitter"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-behance"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-linkedin-in"
                                                                    data-v-e4caeaf8=""></i></a></div>
                                                    </div>
                                                    <div class="info" data-v-e4caeaf8="">
                                                        <h5 data-v-e4caeaf8="">Legender Mao</h5> <span
                                                            data-v-e4caeaf8="">3D
                                                            Visualization</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div tabindex="-1" data-index="-1" aria-hidden="true"
                                            class="slick-slide slick-cloned" style="width: 297px;" data-v-e4caeaf8="">
                                            <div data-v-e4caeaf8="">
                                                <div data-wow-delay=".3s" tabindex="-1" class="item wow fadeInUp"
                                                    style="width: 100%; display: inline-block; visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"
                                                    data-v-e4caeaf8="">
                                                    <div class="img wow imago animated" data-v-e4caeaf8=""
                                                        style="visibility: visible;"><img
                                                            src="https://archo-vue.vercel.app/img/team/6.jpg" alt=""
                                                            data-v-e4caeaf8="">
                                                        <div class="social" data-v-e4caeaf8=""><a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-facebook-f"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-twitter"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-behance"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-linkedin-in"
                                                                    data-v-e4caeaf8=""></i></a></div>
                                                    </div>
                                                    <div class="info" data-v-e4caeaf8="">
                                                        <h5 data-v-e4caeaf8="">Matt Huk</h5> <span data-v-e4caeaf8="">3D
                                                            Visualization</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div tabindex="-1" data-index="0" aria-hidden="true" class="slick-slide"
                                            style="outline: none; width: 297px;" data-v-e4caeaf8="">
                                            <div data-v-e4caeaf8="">
                                                <div data-wow-delay=".3s" tabindex="-1" class="item wow fadeInUp"
                                                    style="width: 100%; display: inline-block; visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"
                                                    data-v-e4caeaf8="">
                                                    <div class="img wow imago animated" data-v-e4caeaf8=""
                                                        style="visibility: visible;"><img
                                                            src="https://archo-vue.vercel.app/img/team/1.jpg" alt=""
                                                            data-v-e4caeaf8="">
                                                        <div class="social" data-v-e4caeaf8=""><a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-facebook-f"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-twitter"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-behance"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-linkedin-in"
                                                                    data-v-e4caeaf8=""></i></a></div>
                                                    </div>
                                                    <div class="info" data-v-e4caeaf8="">
                                                        <h5 data-v-e4caeaf8="">Hasib sharif</h5> <span
                                                            data-v-e4caeaf8="">General Manager</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div tabindex="-1" data-index="1" aria-hidden="true" class="slick-slide"
                                            style="outline: none; width: 297px;" data-v-e4caeaf8="">
                                            <div data-v-e4caeaf8="">
                                                <div data-wow-delay=".3s" tabindex="-1" class="item wow fadeInUp"
                                                    style="width: 100%; display: inline-block; visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"
                                                    data-v-e4caeaf8="">
                                                    <div class="img wow imago animated" data-v-e4caeaf8=""
                                                        style="visibility: visible;"><img
                                                            src="https://archo-vue.vercel.app/img/team/2.jpg" alt=""
                                                            data-v-e4caeaf8="">
                                                        <div class="social" data-v-e4caeaf8=""><a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-facebook-f"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-twitter"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-behance"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-linkedin-in"
                                                                    data-v-e4caeaf8=""></i></a></div>
                                                    </div>
                                                    <div class="info" data-v-e4caeaf8="">
                                                        <h5 data-v-e4caeaf8="">Jonson Leo</h5> <span
                                                            data-v-e4caeaf8="">Founder</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div tabindex="-1" data-index="2" aria-hidden="true" class="slick-slide"
                                            style="outline: none; width: 297px;" data-v-e4caeaf8="">
                                            <div data-v-e4caeaf8="">
                                                <div data-wow-delay=".3s" tabindex="-1" class="item wow fadeInUp"
                                                    style="width: 100%; display: inline-block; visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"
                                                    data-v-e4caeaf8="">
                                                    <div class="img wow imago animated" data-v-e4caeaf8=""
                                                        style="visibility: visible;"><img
                                                            src="https://archo-vue.vercel.app/img/team/3.jpg" alt=""
                                                            data-v-e4caeaf8="">
                                                        <div class="social" data-v-e4caeaf8=""><a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-facebook-f"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-twitter"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-behance"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-linkedin-in"
                                                                    data-v-e4caeaf8=""></i></a></div>
                                                    </div>
                                                    <div class="info" data-v-e4caeaf8="">
                                                        <h5 data-v-e4caeaf8="">Leio Man</h5> <span
                                                            data-v-e4caeaf8="">Founder</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div tabindex="-1" data-index="3" aria-hidden="true" class="slick-slide"
                                            style="outline: none; width: 297px;" data-v-e4caeaf8="">
                                            <div data-v-e4caeaf8="">
                                                <div data-wow-delay=".3s" tabindex="-1" class="item wow fadeInUp"
                                                    style="width: 100%; display: inline-block; visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"
                                                    data-v-e4caeaf8="">
                                                    <div class="img wow imago animated" data-v-e4caeaf8=""
                                                        style="visibility: visible;"><img
                                                            src="https://archo-vue.vercel.app/img/team/4.jpg" alt=""
                                                            data-v-e4caeaf8="">
                                                        <div class="social" data-v-e4caeaf8=""><a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-facebook-f"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-twitter"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-behance"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-linkedin-in"
                                                                    data-v-e4caeaf8=""></i></a></div>
                                                    </div>
                                                    <div class="info" data-v-e4caeaf8="">
                                                        <h5 data-v-e4caeaf8="">Robert Front</h5> <span
                                                            data-v-e4caeaf8="">CEO Founder</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div tabindex="-1" data-index="4" aria-hidden="false"
                                            class="slick-slide slick-active slick-current"
                                            style="outline: none; width: 297px;" data-v-e4caeaf8="">
                                            <div data-v-e4caeaf8="">
                                                <div data-wow-delay=".3s" tabindex="-1" class="item wow fadeInUp"
                                                    style="width: 100%; display: inline-block; visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"
                                                    data-v-e4caeaf8="">
                                                    <div class="img wow imago animated" data-v-e4caeaf8=""
                                                        style="visibility: visible;"><img
                                                            src="https://archo-vue.vercel.app/img/team/5.jpg" alt=""
                                                            data-v-e4caeaf8="">
                                                        <div class="social" data-v-e4caeaf8=""><a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-facebook-f"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-twitter"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-behance"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-linkedin-in"
                                                                    data-v-e4caeaf8=""></i></a></div>
                                                    </div>
                                                    <div class="info" data-v-e4caeaf8="">
                                                        <h5 data-v-e4caeaf8="">Legender Mao</h5> <span
                                                            data-v-e4caeaf8="">3D
                                                            Visualization</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div tabindex="-1" data-index="5" aria-hidden="false"
                                            class="slick-slide slick-active" style="outline: none; width: 297px;"
                                            data-v-e4caeaf8="">
                                            <div data-v-e4caeaf8="">
                                                <div data-wow-delay=".3s" tabindex="-1" class="item wow fadeInUp"
                                                    style="width: 100%; display: inline-block; visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"
                                                    data-v-e4caeaf8="">
                                                    <div class="img wow imago animated" data-v-e4caeaf8=""
                                                        style="visibility: visible;"><img
                                                            src="https://archo-vue.vercel.app/img/team/6.jpg" alt=""
                                                            data-v-e4caeaf8="">
                                                        <div class="social" data-v-e4caeaf8=""><a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-facebook-f"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-twitter"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-behance"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-linkedin-in"
                                                                    data-v-e4caeaf8=""></i></a></div>
                                                    </div>
                                                    <div class="info" data-v-e4caeaf8="">
                                                        <h5 data-v-e4caeaf8="">Matt Huk</h5> <span data-v-e4caeaf8="">3D
                                                            Visualization</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div tabindex="-1" data-index="6" aria-hidden="false"
                                            class="slick-slide slick-active slick-cloned" style="width: 297px;"
                                            data-v-e4caeaf8="">
                                            <div data-v-e4caeaf8="">
                                                <div data-wow-delay=".3s" tabindex="-1" class="item wow fadeInUp"
                                                    style="width: 100%; display: inline-block; visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"
                                                    data-v-e4caeaf8="">
                                                    <div class="img wow imago animated" data-v-e4caeaf8=""
                                                        style="visibility: visible;"><img
                                                            src="https://archo-vue.vercel.app/img/team/1.jpg" alt=""
                                                            data-v-e4caeaf8="">
                                                        <div class="social" data-v-e4caeaf8=""><a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-facebook-f"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-twitter"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-behance"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-linkedin-in"
                                                                    data-v-e4caeaf8=""></i></a></div>
                                                    </div>
                                                    <div class="info" data-v-e4caeaf8="">
                                                        <h5 data-v-e4caeaf8="">Hasib sharif</h5> <span
                                                            data-v-e4caeaf8="">General Manager</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div tabindex="-1" data-index="7" aria-hidden="true"
                                            class="slick-slide slick-cloned" style="width: 297px;" data-v-e4caeaf8="">
                                            <div data-v-e4caeaf8="">
                                                <div data-wow-delay=".3s" tabindex="-1" class="item wow fadeInUp"
                                                    style="width: 100%; display: inline-block; visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"
                                                    data-v-e4caeaf8="">
                                                    <div class="img wow imago animated" data-v-e4caeaf8=""
                                                        style="visibility: visible;"><img
                                                            src="https://archo-vue.vercel.app/img/team/2.jpg" alt=""
                                                            data-v-e4caeaf8="">
                                                        <div class="social" data-v-e4caeaf8=""><a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-facebook-f"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-twitter"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-behance"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-linkedin-in"
                                                                    data-v-e4caeaf8=""></i></a></div>
                                                    </div>
                                                    <div class="info" data-v-e4caeaf8="">
                                                        <h5 data-v-e4caeaf8="">Jonson Leo</h5> <span
                                                            data-v-e4caeaf8="">Founder</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div tabindex="-1" data-index="8" aria-hidden="true"
                                            class="slick-slide slick-cloned" style="width: 297px;" data-v-e4caeaf8="">
                                            <div data-v-e4caeaf8="">
                                                <div data-wow-delay=".3s" tabindex="-1" class="item wow fadeInUp"
                                                    style="width: 100%; display: inline-block; visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"
                                                    data-v-e4caeaf8="">
                                                    <div class="img wow imago animated" data-v-e4caeaf8=""
                                                        style="visibility: visible;"><img
                                                            src="https://archo-vue.vercel.app/img/team/3.jpg" alt=""
                                                            data-v-e4caeaf8="">
                                                        <div class="social" data-v-e4caeaf8=""><a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-facebook-f"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-twitter"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-behance"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-linkedin-in"
                                                                    data-v-e4caeaf8=""></i></a></div>
                                                    </div>
                                                    <div class="info" data-v-e4caeaf8="">
                                                        <h5 data-v-e4caeaf8="">Leio Man</h5> <span
                                                            data-v-e4caeaf8="">Founder</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div tabindex="-1" data-index="9" aria-hidden="true"
                                            class="slick-slide slick-cloned" style="width: 297px;" data-v-e4caeaf8="">
                                            <div data-v-e4caeaf8="">
                                                <div data-wow-delay=".3s" tabindex="-1" class="item wow fadeInUp"
                                                    style="width: 100%; display: inline-block; visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"
                                                    data-v-e4caeaf8="">
                                                    <div class="img wow imago animated" data-v-e4caeaf8=""
                                                        style="visibility: visible;"><img
                                                            src="https://archo-vue.vercel.app/img/team/4.jpg" alt=""
                                                            data-v-e4caeaf8="">
                                                        <div class="social" data-v-e4caeaf8=""><a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-facebook-f"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-twitter"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-behance"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-linkedin-in"
                                                                    data-v-e4caeaf8=""></i></a></div>
                                                    </div>
                                                    <div class="info" data-v-e4caeaf8="">
                                                        <h5 data-v-e4caeaf8="">Robert Front</h5> <span
                                                            data-v-e4caeaf8="">CEO Founder</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div tabindex="-1" data-index="10" aria-hidden="true"
                                            class="slick-slide slick-cloned" style="width: 297px;" data-v-e4caeaf8="">
                                            <div data-v-e4caeaf8="">
                                                <div data-wow-delay=".3s" tabindex="-1" class="item wow fadeInUp"
                                                    style="width: 100%; display: inline-block; visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"
                                                    data-v-e4caeaf8="">
                                                    <div class="img wow imago animated" data-v-e4caeaf8=""
                                                        style="visibility: visible;"><img
                                                            src="https://archo-vue.vercel.app/img/team/5.jpg" alt=""
                                                            data-v-e4caeaf8="">
                                                        <div class="social" data-v-e4caeaf8=""><a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-facebook-f"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-twitter"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-behance"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-linkedin-in"
                                                                    data-v-e4caeaf8=""></i></a></div>
                                                    </div>
                                                    <div class="info" data-v-e4caeaf8="">
                                                        <h5 data-v-e4caeaf8="">Legender Mao</h5> <span
                                                            data-v-e4caeaf8="">3D
                                                            Visualization</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div tabindex="-1" data-index="11" aria-hidden="true"
                                            class="slick-slide slick-cloned" style="width: 297px;" data-v-e4caeaf8="">
                                            <div data-v-e4caeaf8="">
                                                <div data-wow-delay=".3s" tabindex="-1" class="item wow fadeInUp"
                                                    style="width: 100%; display: inline-block; visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"
                                                    data-v-e4caeaf8="">
                                                    <div class="img wow imago animated" data-v-e4caeaf8=""
                                                        style="visibility: visible;"><img
                                                            src="https://archo-vue.vercel.app/img/team/6.jpg" alt=""
                                                            data-v-e4caeaf8="">
                                                        <div class="social" data-v-e4caeaf8=""><a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-facebook-f"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-twitter"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-behance"
                                                                    data-v-e4caeaf8=""></i></a> <a href="#0"
                                                                data-v-e4caeaf8=""><i class="fab fa-linkedin-in"
                                                                    data-v-e4caeaf8=""></i></a></div>
                                                    </div>
                                                    <div class="info" data-v-e4caeaf8="">
                                                        <h5 data-v-e4caeaf8="">Matt Huk</h5> <span data-v-e4caeaf8="">3D
                                                            Visualization</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dots-half bg-img bg-repeat"
                style="background-image:url(https://archo-vue.vercel.app/img/dots.png)">
            </div>
        </section>

        <!-- testimonials -->
        <section data-overlay-dark="9" data-background="https://archo-vue.vercel.app/img/001.jpg"
            class="testimonials grid section-padding bg-img parallaxie overflow-hidden"
            style="background-image: url(&quot;https://archo-vue.vercel.app/img/001.jpg&quot;); background-size: cover; background-repeat: no-repeat; background-attachment: fixed; background-position: center 322.895px;">
            <div class="container mb-50">
                <div class="section-head text-center">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-8 col-sm-10">
                            <h6 data-wow-delay=".3s" class="custom-font wow fadeInDown"
                                style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInDown;">
                                Testimonials</h6>
                            <h4 data-wow-delay=".5s" class="playfont wow flipInX"
                                style="visibility: visible; animation-delay: 0.5s; animation-name: flipInX;">What People
                                Says?</h4>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div data-wow-delay=".3s" class="testim wow fadeInUp"
                            style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
                            <div data-v-3d1a4f76="" dir="ltr" class="slick-dotted slick-slider slick-initialized">
                                <div data-v-3d1a4f76="" class="slick-list">
                                    <div data-v-e4caeaf8="" data-v-3d1a4f76="" class="slick-track"
                                        style="width: 5550px; opacity: 1; transform: translate3d(-1110px, 0px, 0px);">
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="-2" aria-hidden="true"
                                            class="slick-slide slick-cloned" style="width: 555px;">
                                            <div data-v-e4caeaf8="">
                                                <div data-v-e4caeaf8="" data-wow-delay=".3s" tabindex="-1"
                                                    class="item wow fadeInUp"
                                                    style="width: 100%; display: inline-block; visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
                                                    <span data-v-e4caeaf8="" class="quote-icon"><img data-v-e4caeaf8=""
                                                            src="https://archo-vue.vercel.app/img/clients/quote.svg"
                                                            alt=""></span>
                                                    <div data-v-e4caeaf8="" class="cont">
                                                        <p data-v-e4caeaf8="">I just love their design for all stunning
                                                            details. You must know what can you do for a project before
                                                            taking it, but with Archo, the sky is the limit.</p>
                                                    </div>
                                                    <div data-v-e4caeaf8="" class="info">
                                                        <div data-v-e4caeaf8="" class="author"><img data-v-e4caeaf8=""
                                                                src="https://archo-vue.vercel.app/img/clients/3.jpg"
                                                                alt="">
                                                        </div>
                                                        <h6 data-v-e4caeaf8="">Alison Clutcher <span
                                                                data-v-e4caeaf8="">Envato Customer</span></h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="-1" aria-hidden="true"
                                            class="slick-slide slick-cloned" style="width: 555px;">
                                            <div data-v-e4caeaf8="">
                                                <div data-v-e4caeaf8="" data-wow-delay=".3s" tabindex="-1"
                                                    class="item wow fadeInUp"
                                                    style="width: 100%; display: inline-block; visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
                                                    <span data-v-e4caeaf8="" class="quote-icon"><img data-v-e4caeaf8=""
                                                            src="https://archo-vue.vercel.app/img/clients/quote.svg"
                                                            alt=""></span>
                                                    <div data-v-e4caeaf8="" class="cont">
                                                        <p data-v-e4caeaf8="">I just love their design for all stunning
                                                            details. You must know what can you do for a project before
                                                            taking it, but with Archo, the sky is the limit.</p>
                                                    </div>
                                                    <div data-v-e4caeaf8="" class="info">
                                                        <div data-v-e4caeaf8="" class="author"><img data-v-e4caeaf8=""
                                                                src="https://archo-vue.vercel.app/img/clients/4.jpg"
                                                                alt="">
                                                        </div>
                                                        <h6 data-v-e4caeaf8="">Peter Jefferson <span
                                                                data-v-e4caeaf8="">Envato Customer</span></h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="0" aria-hidden="false"
                                            class="slick-slide slick-active slick-current"
                                            style="outline: none; width: 555px;">
                                            <div data-v-e4caeaf8="">
                                                <div data-v-e4caeaf8="" data-wow-delay=".3s" tabindex="-1"
                                                    class="item wow fadeInUp"
                                                    style="width: 100%; display: inline-block; visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
                                                    <span data-v-e4caeaf8="" class="quote-icon"><img data-v-e4caeaf8=""
                                                            src="https://archo-vue.vercel.app/img/clients/quote.svg"
                                                            alt=""></span>
                                                    <div data-v-e4caeaf8="" class="cont">
                                                        <p data-v-e4caeaf8="">I just love their design for all stunning
                                                            details. You must know what can you do for a project before
                                                            taking it, but with Archo, the sky is the limit.</p>
                                                    </div>
                                                    <div data-v-e4caeaf8="" class="info">
                                                        <div data-v-e4caeaf8="" class="author"><img data-v-e4caeaf8=""
                                                                src="https://archo-vue.vercel.app/img/clients/1.jpg"
                                                                alt="">
                                                        </div>
                                                        <h6 data-v-e4caeaf8="">Mitchl Jhon <span
                                                                data-v-e4caeaf8="">Envato
                                                                Customer</span></h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="1" aria-hidden="false"
                                            class="slick-slide slick-active" style="outline: none; width: 555px;">
                                            <div data-v-e4caeaf8="">
                                                <div data-v-e4caeaf8="" data-wow-delay=".3s" tabindex="-1"
                                                    class="item wow fadeInUp"
                                                    style="width: 100%; display: inline-block; visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
                                                    <span data-v-e4caeaf8="" class="quote-icon"><img data-v-e4caeaf8=""
                                                            src="https://archo-vue.vercel.app/img/clients/quote.svg"
                                                            alt=""></span>
                                                    <div data-v-e4caeaf8="" class="cont">
                                                        <p data-v-e4caeaf8="">I just love their design for all stunning
                                                            details. You must know what can you do for a project before
                                                            taking it, but with Archo, the sky is the limit.</p>
                                                    </div>
                                                    <div data-v-e4caeaf8="" class="info">
                                                        <div data-v-e4caeaf8="" class="author"><img data-v-e4caeaf8=""
                                                                src="https://archo-vue.vercel.app/img/clients/2.jpg"
                                                                alt="">
                                                        </div>
                                                        <h6 data-v-e4caeaf8="">Jane Smith <span
                                                                data-v-e4caeaf8="">Envato
                                                                Customer</span></h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="2" aria-hidden="true"
                                            class="slick-slide" style="outline: none; width: 555px;">
                                            <div data-v-e4caeaf8="">
                                                <div data-v-e4caeaf8="" data-wow-delay=".3s" tabindex="-1"
                                                    class="item wow fadeInUp"
                                                    style="width: 100%; display: inline-block; visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
                                                    <span data-v-e4caeaf8="" class="quote-icon"><img data-v-e4caeaf8=""
                                                            src="https://archo-vue.vercel.app/img/clients/quote.svg"
                                                            alt=""></span>
                                                    <div data-v-e4caeaf8="" class="cont">
                                                        <p data-v-e4caeaf8="">I just love their design for all stunning
                                                            details. You must know what can you do for a project before
                                                            taking it, but with Archo, the sky is the limit.</p>
                                                    </div>
                                                    <div data-v-e4caeaf8="" class="info">
                                                        <div data-v-e4caeaf8="" class="author"><img data-v-e4caeaf8=""
                                                                src="https://archo-vue.vercel.app/img/clients/3.jpg"
                                                                alt="">
                                                        </div>
                                                        <h6 data-v-e4caeaf8="">Alison Clutcher <span
                                                                data-v-e4caeaf8="">Envato Customer</span></h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="3" aria-hidden="true"
                                            class="slick-slide" style="outline: none; width: 555px;">
                                            <div data-v-e4caeaf8="">
                                                <div data-v-e4caeaf8="" data-wow-delay=".3s" tabindex="-1"
                                                    class="item wow fadeInUp"
                                                    style="width: 100%; display: inline-block; visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
                                                    <span data-v-e4caeaf8="" class="quote-icon"><img data-v-e4caeaf8=""
                                                            src="https://archo-vue.vercel.app/img/clients/quote.svg"
                                                            alt=""></span>
                                                    <div data-v-e4caeaf8="" class="cont">
                                                        <p data-v-e4caeaf8="">I just love their design for all stunning
                                                            details. You must know what can you do for a project before
                                                            taking it, but with Archo, the sky is the limit.</p>
                                                    </div>
                                                    <div data-v-e4caeaf8="" class="info">
                                                        <div data-v-e4caeaf8="" class="author"><img data-v-e4caeaf8=""
                                                                src="https://archo-vue.vercel.app/img/clients/4.jpg"
                                                                alt="">
                                                        </div>
                                                        <h6 data-v-e4caeaf8="">Peter Jefferson <span
                                                                data-v-e4caeaf8="">Envato Customer</span></h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="4" aria-hidden="true"
                                            class="slick-slide slick-cloned" style="width: 555px;">
                                            <div data-v-e4caeaf8="">
                                                <div data-v-e4caeaf8="" data-wow-delay=".3s" tabindex="-1"
                                                    class="item wow fadeInUp"
                                                    style="width: 100%; display: inline-block; visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
                                                    <span data-v-e4caeaf8="" class="quote-icon"><img data-v-e4caeaf8=""
                                                            src="https://archo-vue.vercel.app/img/clients/quote.svg"
                                                            alt=""></span>
                                                    <div data-v-e4caeaf8="" class="cont">
                                                        <p data-v-e4caeaf8="">I just love their design for all stunning
                                                            details. You must know what can you do for a project before
                                                            taking it, but with Archo, the sky is the limit.</p>
                                                    </div>
                                                    <div data-v-e4caeaf8="" class="info">
                                                        <div data-v-e4caeaf8="" class="author"><img data-v-e4caeaf8=""
                                                                src="https://archo-vue.vercel.app/img/clients/1.jpg"
                                                                alt="">
                                                        </div>
                                                        <h6 data-v-e4caeaf8="">Mitchl Jhon <span
                                                                data-v-e4caeaf8="">Envato
                                                                Customer</span></h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="5" aria-hidden="true"
                                            class="slick-slide slick-cloned" style="width: 555px;">
                                            <div data-v-e4caeaf8="">
                                                <div data-v-e4caeaf8="" data-wow-delay=".3s" tabindex="-1"
                                                    class="item wow fadeInUp"
                                                    style="width: 100%; display: inline-block; visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
                                                    <span data-v-e4caeaf8="" class="quote-icon"><img data-v-e4caeaf8=""
                                                            src="https://archo-vue.vercel.app/img/clients/quote.svg"
                                                            alt=""></span>
                                                    <div data-v-e4caeaf8="" class="cont">
                                                        <p data-v-e4caeaf8="">I just love their design for all stunning
                                                            details. You must know what can you do for a project before
                                                            taking it, but with Archo, the sky is the limit.</p>
                                                    </div>
                                                    <div data-v-e4caeaf8="" class="info">
                                                        <div data-v-e4caeaf8="" class="author"><img data-v-e4caeaf8=""
                                                                src="https://archo-vue.vercel.app/img/clients/2.jpg"
                                                                alt="">
                                                        </div>
                                                        <h6 data-v-e4caeaf8="">Jane Smith <span
                                                                data-v-e4caeaf8="">Envato
                                                                Customer</span></h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="6" aria-hidden="true"
                                            class="slick-slide slick-cloned" style="width: 555px;">
                                            <div data-v-e4caeaf8="">
                                                <div data-v-e4caeaf8="" data-wow-delay=".3s" tabindex="-1"
                                                    class="item wow fadeInUp"
                                                    style="width: 100%; display: inline-block; visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
                                                    <span data-v-e4caeaf8="" class="quote-icon"><img data-v-e4caeaf8=""
                                                            src="https://archo-vue.vercel.app/img/clients/quote.svg"
                                                            alt=""></span>
                                                    <div data-v-e4caeaf8="" class="cont">
                                                        <p data-v-e4caeaf8="">I just love their design for all stunning
                                                            details. You must know what can you do for a project before
                                                            taking it, but with Archo, the sky is the limit.</p>
                                                    </div>
                                                    <div data-v-e4caeaf8="" class="info">
                                                        <div data-v-e4caeaf8="" class="author"><img data-v-e4caeaf8=""
                                                                src="https://archo-vue.vercel.app/img/clients/3.jpg"
                                                                alt="">
                                                        </div>
                                                        <h6 data-v-e4caeaf8="">Alison Clutcher <span
                                                                data-v-e4caeaf8="">Envato Customer</span></h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="7" aria-hidden="true"
                                            class="slick-slide slick-cloned" style="width: 555px;">
                                            <div data-v-e4caeaf8="">
                                                <div data-v-e4caeaf8="" data-wow-delay=".3s" tabindex="-1"
                                                    class="item wow fadeInUp"
                                                    style="width: 100%; display: inline-block; visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
                                                    <span data-v-e4caeaf8="" class="quote-icon"><img data-v-e4caeaf8=""
                                                            src="https://archo-vue.vercel.app/img/clients/quote.svg"
                                                            alt=""></span>
                                                    <div data-v-e4caeaf8="" class="cont">
                                                        <p data-v-e4caeaf8="">I just love their design for all stunning
                                                            details. You must know what can you do for a project before
                                                            taking it, but with Archo, the sky is the limit.</p>
                                                    </div>
                                                    <div data-v-e4caeaf8="" class="info">
                                                        <div data-v-e4caeaf8="" class="author"><img data-v-e4caeaf8=""
                                                                src="https://archo-vue.vercel.app/img/clients/4.jpg"
                                                                alt="">
                                                        </div>
                                                        <h6 data-v-e4caeaf8="">Peter Jefferson <span
                                                                data-v-e4caeaf8="">Envato Customer</span></h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-wow-delay=".3s" class="navs mt-30 wow fadeInUp"
                            style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"><span
                                class="prev"><i class="fas fa-long-arrow-alt-left"></i></span> <span class="next"><i
                                    class="fas fa-long-arrow-alt-right"></i></span></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- brand -->
        <section class="brands bg-gray">
            <div data-wow-delay=".3s" class="container box-top wow fadeInUp"
                style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
                <div class="row">
                    <div class="col-lg col-md-3 col-sm-6">
                        <div class="item">
                            <div class="img"><img src="https://archo-vue.vercel.app/img/clients/brands/1.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg col-md-3 col-sm-6">
                        <div class="item">
                            <div class="img"><img src="https://archo-vue.vercel.app/img/clients/brands/2.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg col-md-3 col-sm-6">
                        <div class="item">
                            <div class="img"><img src="https://archo-vue.vercel.app/img/clients/brands/1.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg col-md-3 col-sm-6">
                        <div class="item">
                            <div class="img"><img src="https://archo-vue.vercel.app/img/clients/brands/2.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg col-md-3 col-sm-6">
                        <div class="item">
                            <div class="img"><img src="https://archo-vue.vercel.app/img/clients/brands/1.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg col-md-3 col-sm-6">
                        <div class="item">
                            <div class="img"><img src="https://archo-vue.vercel.app/img/clients/brands/2.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- blog -->
        <section class="blog-grid center bg-gray section-padding">
            <div class="container">
                <div class="section-head text-center">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-8 col-sm-10">
                            <h6 data-wow-delay=".3s" class="custom-font wow fadeInDown"
                                style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInDown;">Latest
                                News</h6>
                            <h4 data-wow-delay=".5s" class="playfont wow flipInX"
                                style="visibility: visible; animation-delay: 0.5s; animation-name: flipInX;">Our Blogs
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div data-wow-delay=".3s" class="item wow fadeInUp md-mb50"
                            style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
                            <div class="post-img">
                                <div class="img"><img src="https://archo-vue.vercel.app/img/blog/1.jpg" alt=""></div>
                            </div>
                            <div class="cont">
                                <div class="info"><a href="/home2-light#0" class="">Alex Smith</a> <a
                                        href="/home2-light#0" class="">Aug 06 2019</a></div>
                                <h5 class="playfont"><a href="/home2-light#0" class="">In Good Taste: Mark Finlay
                                        Architects and Interiors</a></h5> <a href="/blog-details" class="more"><span
                                        class="custom-font">Read More</span></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div data-wow-delay=".3s" class="item wow fadeInUp"
                            style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
                            <div class="post-img">
                                <div class="img"><img src="https://archo-vue.vercel.app/img/blog/2.jpg" alt=""></div>
                            </div>
                            <div class="cont">
                                <div class="info"><a href="/home2-light#0" class="">Alex Smith</a> <a
                                        href="/home2-light#0" class="">Aug 06 2019</a></div>
                                <h5 class="playfont"><a href="/home2-light#0" class="">Five Things You Should Know About
                                        Modern Furniture.</a></h5> <a href="/blog-details" class="more"><span
                                        class="custom-font">Read More</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="item md-mb50">
                            <div class="title">
                                <h5>Contact Us</h5>
                            </div>
                            <ul>
                                <li><span class="icon pe-7s-map-marker"></span>
                                    <div class="cont">
                                        <h6>Officeal Address</h6>
                                        <p>504 White St . Dawsonville, GA 30534 , New York</p>
                                    </div>
                                </li>
                                <li><span class="icon pe-7s-mail"></span>
                                    <div class="cont">
                                        <h6>Email Us</h6>
                                        <p>support@gmail.com</p>
                                    </div>
                                </li>
                                <li><span class="icon pe-7s-call"></span>
                                    <div class="cont">
                                        <h6>Call Us</h6>
                                        <p>+87986451666</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="item md-mb50">
                            <div class="title">
                                <h5>Recent News</h5>
                            </div>
                            <ul>
                                <li>
                                    <div class="img"><img src="https://archo-vue.vercel.app/img/blog/1.jpg" alt="">
                                    </div>
                                    <div class="sm-post">
                                        <p>The Start-Up Ultimate Guide to Make Your WordPress Journal.</p> <span
                                            class="date">14 Jan 2022</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="img"><img src="https://archo-vue.vercel.app/img/blog/2.jpg" alt="">
                                    </div>
                                    <div class="sm-post">
                                        <p>The Start-Up Ultimate Guide to Make Your WordPress Journal.</p> <span
                                            class="date">14 Jan 2022</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="subscribe"><input placeholder="Type Your Email"> <span
                                            class="subs pe-7s-paper-plane"></span></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="item">
                            <div class="logo"><img src="https://archo-vue.vercel.app/img/logo-light.png" alt=""></div>
                            <div class="social"><a href="/home2-light#0" class=""><i class="fab fa-facebook-f"></i></a>
                                <a href="/home2-light#0" class=""><i class="fab fa-twitter"></i></a> <a
                                    href="/home2-light#0" class=""><i class="fab fa-instagram"></i></a> <a
                                    href="/home2-light#0" class=""><i class="fab fa-youtube"></i></a>
                            </div>
                            <div class="copy-right">
                                <p>© 2022, Arch Template. Made with passion by <a href="#0">ThemesCamp</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped>
/* import bs4 */

.bs4.arch {
    color: #191514;
    line-height: 1.5;
    font-weight: 400;
    overflow-x: hidden !important;
    font-family: Poppins, sans-serif
}

img {
    width: 100%;
    height: auto
}

a,
a:hover,
span {
    display: inline-block;
    color: inherit
}

h1 {
    font-size: 55px
}

h2 {
    font-size: 40px
}

h3 {
    font-size: 35px
}

h4 {
    font-size: 30px
}

h5 {
    font-size: 25px
}

h6 {
    font-size: 18px
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
    line-height: 1.4;
    font-weight: 600
}

p {
    color: #888;
    font-size: 15px;
    font-weight: 400;
    line-height: 2;
    margin: 0
}

a,
span {
    display: inline-block
}

a:hover,
span:hover {
    text-decoration: none
}

.o-hidden {
    overflow: hidden
}

.ontop,
.position-re {
    position: relative
}

.ontop {
    z-index: 7
}

.full-over {
    position: absolute !important;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%
}

.full-width {
    width: 100% !important
}

.custom-font {
    font-family: Teko, sans-serif;
    font-weight: 400
}

.playfont {
    font-family: Playfair Display, serif
}

.main-color {
    color: #b19777 !important
}

.bg-gray {
    background-color: #f8f4f3
}

.bg-gray .primery-shadow {
    box-shadow: 0 4px 30px -4px rgba(0, 0, 0, .2)
}

.bg-dark {
    background-color: #141414 !important
}

.bg-dark .primery-shadow {
    box-shadow: 0 4px 40px -4px hsla(0, 0%, 100%, .2)
}

.bg-color {
    background-color: #b19777 !important
}

.bg-color .primery-shadow {
    box-shadow: 0 4px 40px -4px hsla(0, 0%, 100%, .2)
}

.bg-img {
    background-size: cover;
    background-repeat: no-repeat
}

.bg-center {
    background-position: 50%
}

.bg-fixed {
    background-attachment: fixed
}

.bg-repeat {
    background-size: auto;
    background-repeat: repeat
}

.section-padding {
    padding: 120px 0
}

.section-ptb {
    padding: 80px 0
}

.head-pt {
    padding: 80px 0 0
}

.head-pb {
    padding: 0 0 80px
}

.rounded {
    border-radius: 5px
}

.circle {
    border-radius: 50%
}

.unlist {
    list-style: none
}

.undecro:hover {
    text-decoration: none
}

.inline {
    display: inline-block
}

.valign {
    display: flex;
    align-items: center
}

.primery-shadow {
    box-shadow: 0 8px 30px -4px rgba(0, 0, 0, .1)
}

.padding5 {
    padding-right: 5%;
    padding-left: 5%
}

.text-white {
    color: #fff
}

.text-black {
    color: #000
}

.text-extra-light-gray {
    color: #b7b7b7
}

.fw-100 {
    font-weight: 100 !important
}

.fw-200 {
    font-weight: 200 !important
}

.fw-300 {
    font-weight: 300 !important
}

.fw-400 {
    font-weight: 400 !important
}

.fw-500 {
    font-weight: 500 !important
}

.fw-600 {
    font-weight: 600 !important
}

.fw-700 {
    font-weight: 700 !important
}

.fw-800 {
    font-weight: 800 !important
}

.fw-900 {
    font-weight: 900 !important
}

.fz-10 {
    font-size: 10px !important
}

.fz-12 {
    font-size: 12px !important
}

.fz-14 {
    font-size: 14px !important
}

.fz-15 {
    font-size: 15px !important
}

.fz-16 {
    font-size: 16px !important
}

.fz-18 {
    font-size: 18px !important
}

.fz-20 {
    font-size: 20px !important
}

.fz-22 {
    font-size: 22px !important
}

.fz-25 {
    font-size: 25px !important
}

.fz-30 {
    font-size: 30px !important
}

.fz-40 {
    font-size: 40px !important
}

.fz-50 {
    font-size: 50px !important
}

.line-height-10 {
    line-height: 10px
}

.line-height-13 {
    line-height: 13px
}

.line-height-18 {
    line-height: 18px
}

.line-height-20 {
    line-height: 20px
}

.line-height-24 {
    line-height: 24px
}

.line-height-22 {
    line-height: 22px
}

.line-height-26 {
    line-height: 26px
}

.line-height-28 {
    line-height: 28px
}

.line-height-30 {
    line-height: 30px
}

.line-height-35 {
    line-height: 35px
}

.line-height-40 {
    line-height: 40px
}

.line-height-45 {
    line-height: 45px
}

.line-height-50 {
    line-height: 50px
}

.line-height-55 {
    line-height: 55px
}

.line-height-60 {
    line-height: 60px
}

.line-height-65 {
    line-height: 65px
}

.line-height-70 {
    line-height: 70px
}

.line-height-75 {
    line-height: 75px
}

.line-height-80 {
    line-height: 80px
}

.line-height-85 {
    line-height: 85px
}

.line-height-90 {
    line-height: 90px
}

.line-height-95 {
    line-height: 95px
}

.line-height-100 {
    line-height: 100px
}

.line-height-110 {
    line-height: 110px
}

.line-height-120 {
    line-height: 120px
}

.text-u {
    text-transform: uppercase !important
}

.text-l {
    text-transform: lowercase !important
}

.text-c {
    text-transform: capitalize !important
}

.text-non {
    text-transform: none !important
}

.text-i {
    font-style: italic
}

.ls0 {
    letter-spacing: 0 !important
}

.ls1 {
    letter-spacing: 1px !important
}

.ls2 {
    letter-spacing: 2px !important
}

.ls3 {
    letter-spacing: 3px !important
}

.ls4 {
    letter-spacing: 4px !important
}

.ls5 {
    letter-spacing: 5px !important
}

.ls10 {
    letter-spacing: 10px !important
}

.mt-0 {
    margin-top: 0 !important
}

.mt-5 {
    margin-top: 5px !important
}

.mt-10 {
    margin-top: 10px !important
}

.mt-15 {
    margin-top: 15px !important
}

.mt-20 {
    margin-top: 20px !important
}

.mt-25 {
    margin-top: 25px !important
}

.mt-30 {
    margin-top: 30px !important
}

.mt-35 {
    margin-top: 35px !important
}

.mt-40 {
    margin-top: 40px !important
}

.mt-45 {
    margin-top: 45px !important
}

.mt-50 {
    margin-top: 50px !important
}

.mt-55 {
    margin-top: 55px !important
}

.mt-60 {
    margin-top: 60px !important
}

.mt-62 {
    margin-top: 62px !important
}

.mt-65 {
    margin-top: 65px !important
}

.mt-70 {
    margin-top: 70px !important
}

.mt-75 {
    margin-top: 75px !important
}

.mt-80 {
    margin-top: 80px !important
}

.mt-85 {
    margin-top: 85px !important
}

.mt-90 {
    margin-top: 90px !important
}

.mt-95 {
    margin-top: 95px !important
}

.mt-100 {
    margin-top: 100px !important
}

.mb-0 {
    margin-bottom: 0 !important
}

.mb-5 {
    margin-bottom: 5px !important
}

.mb-10 {
    margin-bottom: 10px !important
}

.mb-15 {
    margin-bottom: 15px !important
}

.mb-20 {
    margin-bottom: 20px !important
}

.mb-25 {
    margin-bottom: 25px !important
}

.mb-30 {
    margin-bottom: 30px !important
}

.mb-35 {
    margin-bottom: 35px !important
}

.mb-40 {
    margin-bottom: 40px !important
}

.mb-45 {
    margin-bottom: 45px !important
}

.mb-50 {
    margin-bottom: 50px !important
}

.mb-55 {
    margin-bottom: 55px !important
}

.mb-60 {
    margin-bottom: 60px !important
}

.mb-62 {
    margin-bottom: 62px !important
}

.mb-65 {
    margin-bottom: 65px !important
}

.mb-70 {
    margin-bottom: 70px !important
}

.mb-75 {
    margin-bottom: 75px !important
}

.mb-80 {
    margin-bottom: 80px !important
}

.mb-85 {
    margin-bottom: 85px !important
}

.mb-90 {
    margin-bottom: 90px !important
}

.mb-95 {
    margin-bottom: 95px !important
}

.mb-100 {
    margin-bottom: 100px !important
}

.pt-0 {
    padding-top: 0 !important
}

.pt-5 {
    padding-top: 5px !important
}

.pt-10 {
    padding-top: 10px !important
}

.pt-15 {
    padding-top: 15px !important
}

.pt-20 {
    padding-top: 20px !important
}

.pt-25 {
    padding-top: 25px !important
}

.pt-30 {
    padding-top: 30px !important
}

.pt-35 {
    padding-top: 35px !important
}

.pt-40 {
    padding-top: 40px !important
}

.pt-45 {
    padding-top: 45px !important
}

.pt-50 {
    padding-top: 50px !important
}

.pt-55 {
    padding-top: 55px !important
}

.pt-60 {
    padding-top: 60px !important
}

.pt-65 {
    padding-top: 65px !important
}

.pt-70 {
    padding-top: 70px !important
}

.pt-75 {
    padding-top: 75px !important
}

.pt-80 {
    padding-top: 80px !important
}

.pt-85 {
    padding-top: 85px !important
}

.pt-90 {
    padding-top: 90px !important
}

.pt-95 {
    padding-top: 95px !important
}

.pt-100 {
    padding-top: 100px !important
}

.pb-0 {
    padding-bottom: 0 !important
}

.pb-5 {
    padding-bottom: 5px !important
}

.pb-10 {
    padding-bottom: 10px !important
}

.pb-15 {
    padding-bottom: 15px !important
}

.pb-20 {
    padding-bottom: 20px !important
}

.pb-25 {
    padding-bottom: 25px !important
}

.pb-30 {
    padding-bottom: 30px !important
}

.pb-35 {
    padding-bottom: 35px !important
}

.pb-40 {
    padding-bottom: 40px !important
}

.pb-45 {
    padding-bottom: 45px !important
}

.pb-50 {
    padding-bottom: 50px !important
}

.pb-55 {
    padding-bottom: 55px !important
}

.pb-60 {
    padding-bottom: 60px !important
}

.pb-65 {
    padding-bottom: 65px !important
}

.pb-70 {
    padding-bottom: 70px !important
}

.pb-75 {
    padding-bottom: 75px !important
}

.pb-80 {
    padding-bottom: 80px !important
}

.pb-85 {
    padding-bottom: 85px !important
}

.pb-90 {
    padding-bottom: 90px !important
}

.pb-95 {
    padding-bottom: 95px !important
}

.pb-100 {
    padding-bottom: 100px !important
}

.no-padding {
    padding: 0 !important
}

.pace {
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: fixed;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 0;
    width: 400px;
    border: 0;
    height: 1px;
    overflow: hidden;
    background: hsla(0, 0%, 100%, .05);
    transition: all 1s
}

.pace,
.pace .pace-progress {
    z-index: 99999999999999;
    top: 0
}

.pace .pace-progress {
    transform: translateZ(0);
    max-width: 300px;
    position: fixed;
    display: block;
    position: absolute;
    right: 100%;
    height: 100%;
    width: 100%;
    background: #b19777
}

.pace.pace-inactive {
    width: 100vw;
    opacity: 0
}

.pace.pace-inactive .pace-progress {
    max-width: 100vw
}

#preloader {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: fixed;
    z-index: 9999999
}

#preloader:after,
#preloader:before {
    content: "";
    position: fixed;
    left: 0;
    height: 50vh;
    width: 100%;
    background: #252531;
    transition-timing-function: cubic-bezier(.19, 1, .22, 1)
}

#preloader:before {
    top: 0
}

#preloader:after {
    bottom: 0
}

#preloader.isdone {
    visibility: hidden;
    transition-delay: 1.5s
}

#preloader.isdone:after,
#preloader.isdone:before {
    height: 0;
    transition: all .7s cubic-bezier(1, 0, .55, 1);
    transition-delay: 1s
}

.loading-text {
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 10px;
    position: absolute;
    top: calc(50% - 30px);
    left: 50%;
    transform: translate(-50%, -50%);
    color: #b19777;
    font-family: Teko, sans-serif;
    z-index: 9999
}

.loading-text.isdone {
    top: 50%;
    opacity: 0;
    transition: all .8s cubic-bezier(.19, 1, .22, 1);
    transition-delay: .5s
}

.splitting.animated .char {
    -webkit-animation: fadeInUp .4s cubic-bezier(.3, 0, .7, 1) both;
    animation: fadeInUp .4s cubic-bezier(.3, 0, .7, 1) both;
    -webkit-animation-delay: calc(30ms*var(--char-index));
    animation-delay: calc(30ms*var(--char-index))
}

.splitting .whitespace {
    width: 10px
}

@-webkit-keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(20px)
    }

    to {
        opacity: 1;
        transform: translateY(0)
    }
}

@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(20px)
    }

    to {
        opacity: 1;
        transform: translateY(0)
    }
}

.splitting.txt.animated .char {
    -webkit-animation: fadeIn .3s cubic-bezier(.3, 0, .7, 1) both;
    animation: fadeIn .3s cubic-bezier(.3, 0, .7, 1) both;
    -webkit-animation-delay: calc(10ms*var(--char-index));
    animation-delay: calc(10ms*var(--char-index))
}

.splitting.txt .whitespace {
    width: 5px
}

@-webkit-keyframes fadeIn {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

.imago {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    transition: all .8s;
    transition-delay: .3s
}

.imago.animated {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)
}

body {
    cursor: none
}

.mouse-cursor {
    position: fixed;
    left: 0;
    top: 0;
    pointer-events: none;
    border-radius: 50%;
    transform: translateZ(0);
    visibility: hidden
}

.cursor-inner {
    margin-left: 2px;
    margin-top: 2px;
    width: 6px;
    height: 6px;
    z-index: 10000001;
    background-color: #b19777;
    transition: width .3s ease-in-out, height .3s ease-in-out, margin .3s ease-in-out, opacity .3s ease-in-out
}

.cursor-inner.cursor-hover {
    margin-left: -40px;
    margin-top: -40px;
    width: 80px;
    height: 80px;
    background-color: #b19777;
    opacity: .3
}

.cursor-outer {
    margin-left: -15px;
    margin-top: -15px;
    width: 40px;
    height: 40px;
    border: 1px solid #b19777;
    box-sizing: border-box;
    z-index: 10000000;
    opacity: .5;
    transition: all .08s ease-out
}

.cursor-outer.cursor-hover {
    opacity: 0
}

.progress-wrap {
    position: fixed;
    bottom: 30px;
    right: 30px;
    height: 44px;
    width: 44px;
    cursor: pointer;
    display: block;
    border-radius: 50px;
    z-index: 100;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
    transition: all .4s linear
}

.progress-wrap.active-progress {
    opacity: 1;
    visibility: visible;
    transform: translateY(0)
}

.progress-wrap:after {
    position: absolute;
    font-family: Font Awesome\ 5 Free;
    content: "\f077";
    text-align: center;
    line-height: 44px;
    font-size: 13px;
    font-weight: 900;
    color: #b19777;
    left: 0;
    top: 0;
    height: 44px;
    width: 44px;
    cursor: pointer;
    display: block;
    z-index: 1;
    transition: all .4s linear
}

.progress-wrap svg path {
    fill: none
}

.progress-wrap svg.progress-circle path {
    stroke: #b19777;
    stroke-width: 4;
    box-sizing: border-box;
    transition: all .4s linear
}

[data-overlay-dark],
[data-overlay-light] {
    position: relative
}

[data-overlay-dark] .container,
[data-overlay-light] .container {
    position: relative;
    z-index: 2
}

[data-overlay-dark]:before,
[data-overlay-light]:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1
}

[data-overlay-dark]:before {
    background: #02050b
}

[data-overlay-light]:before {
    background: #fff
}

.bg-color h1,
.bg-color h2,
.bg-color h3,
.bg-color h4,
.bg-color h5,
.bg-color h6,
.bg-color span,
.bg-dark h1,
.bg-dark h2,
.bg-dark h3,
.bg-dark h4,
.bg-dark h5,
.bg-dark h6,
.bg-dark span,
[data-overlay-dark] h1,
[data-overlay-dark] h2,
[data-overlay-dark] h3,
[data-overlay-dark] h4,
[data-overlay-dark] h5,
[data-overlay-dark] h6,
[data-overlay-dark] span {
    color: #fff
}

.bg-color p,
.bg-dark p,
[data-overlay-dark] p {
    color: #dad6d6
}

[data-overlay-dark="0"]:before,
[data-overlay-light="0"]:before {
    opacity: 0
}

[data-overlay-dark="1"]:before,
[data-overlay-light="1"]:before {
    opacity: .1
}

[data-overlay-dark="2"]:before,
[data-overlay-light="2"]:before {
    opacity: .2
}

[data-overlay-dark="3"]:before,
[data-overlay-light="3"]:before {
    opacity: .3
}

[data-overlay-dark="4"]:before,
[data-overlay-light="4"]:before {
    opacity: .4
}

[data-overlay-dark="5"]:before,
[data-overlay-light="5"]:before {
    opacity: .5
}

[data-overlay-dark="6"]:before,
[data-overlay-light="6"]:before {
    opacity: .6
}

[data-overlay-dark="7"]:before,
[data-overlay-light="7"]:before {
    opacity: .7
}

[data-overlay-dark="8"]:before,
[data-overlay-light="8"]:before {
    opacity: .8
}

[data-overlay-color="9"]:before,
[data-overlay-dark="9"]:before,
[data-overlay-light="9"]:before {
    opacity: .9
}

[data-overlay-dark="10"]:before,
[data-overlay-light="10"]:before {
    opacity: 1
}

.section-head {
    position: relative;
    margin: 0 auto 80px
}

.section-head h4 {
    font-weight: 500;
    font-size: 40px;
    letter-spacing: 2px
}

.section-head h6 {
    font-weight: 300;
    font-size: 17px;
    margin-bottom: 10px
}

.section-head h6,
.sub-title {
    color: #b19777;
    text-transform: uppercase;
    letter-spacing: 4px
}

.sub-title {
    font-family: Teko, sans-serif;
    font-weight: 400;
    font-size: 14px;
    padding-left: 60px;
    margin-bottom: 15px;
    position: relative
}

.sub-title:before {
    content: "";
    width: 50px;
    height: 1px;
    background: #b19777;
    position: absolute;
    left: 0;
    top: 50%
}

.extra-title {
    font-weight: 700
}

.tit h6 {
    color: #b19777;
    font-weight: 400;
    font-size: 22px
}

.tit h3 {
    font-weight: 700;
    margin-bottom: 20px
}

.tit .navs span {
    padding: 15px 30px;
    background: #f8f4f3;
    cursor: pointer
}

.tit .navs span:hover {
    background: #b19777;
    color: #fff
}

.sm-title {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase
}

.btn-curve {
    background: transparent;
    padding: 12px 35px;
    border: 1px solid #1e1e1e;
    font-family: Teko, sans-serif;
    position: relative;
    overflow: hidden;
    cursor: pointer
}

.btn-curve:focus,
.btn-curve:hover {
    outline: none
}

.btn-curve:hover:after {
    bottom: -30px;
    transform: rotate(0deg)
}

.btn-curve:hover span {
    color: #fff
}

.btn-curve:after {
    content: "";
    position: absolute;
    top: -30px;
    left: -30px;
    right: -30px;
    bottom: 130%;
    background: #1e1e1e;
    transform: rotate(-5deg);
    transition: all .8s
}

.btn-curve span {
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    z-index: 2;
    transition: all .8s
}

.btn-curve.btn-lit {
    border-color: #fff;
    color: #fff
}

.btn-curve.btn-lit:hover span {
    color: #b19777
}

.btn-curve.btn-lit:after {
    background: #fff
}

.btn-curve.btn-blc {
    background: #1e1e1e
}

.btn-curve.btn-blc:after {
    background: #fff
}

.btn-curve.btn-blc span {
    color: #fff
}

.btn-curve.btn-blc:hover span {
    color: #1e1e1e
}

.btn-curve.btn-color {
    background: #b19777;
    border-color: #b19777
}

.btn-curve.btn-color:after {
    background: #fff
}

.btn-curve.btn-color span {
    color: #fff
}

.btn-curve.btn-color:hover span {
    color: #b19777
}

.btn-curve.btn-lg {
    padding: 14px 40px
}

.btn-curve.btn-lg span {
    font-size: 14px
}

.btn-curve.btn-wit {
    background: #fff;
    border-color: #fff
}

.btn-curve.btn-wit:after {
    background: #090909
}

.btn-curve.btn-wit span {
    color: #1e1e1e
}

.btn-curve.btn-wit:hover span {
    color: #fff
}

.btn-curve.btn-radius {
    border-radius: 30px
}

.navbar {
    /* position: absolute; */

    left: 0;
    top: 0;
    padding: 0;
    margin: 0;
    width: 100%;
    background: transparent;
    border-bottom: 1px solid hsla(0, 0%, 100%, .1);
    z-index: 999;
    min-height: 80px
}

.navbar .logo {
    width: 100px
}

.navbar .icon-bar {
    color: #fff
}

.navbar .navbar-nav .nav-link {
    font-size: 13px;
    font-weight: 400;
    color: #fff;
    letter-spacing: 1px;
    padding: 15px 7px;
    margin: 10px
}

.navbar .navbar-nav .dropdown-menu {
    padding: 10px 0;
    border: 0;
    box-shadow: 0 10px 40px -4px rgba(0, 0, 0, .1)
}

.navbar .navbar-nav .dropdown-item {
    font-size: 13px;
    padding: 10px 20px;
    opacity: .9
}

.navbar .navbar-nav .dropdown-item:hover {
    background: transparent;
    color: #b19777
}

.navbar .dropdown-menu {
    display: block;
    opacity: 0;
    visibility: hidden;
    border-radius: 0;
    transform: translateY(20px);
    transition: all .4s
}

.navbar .dropdown-menu.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0)
}

.navbar .dropdown-menu .dropdown-item {
    transition: all .4s;
    padding: 10px 25px;
    position: relative
}

.navbar .dropdown-menu .dropdown-item:after {
    content: "";
    width: 0;
    height: 1px;
    background: #b19777;
    position: absolute;
    left: 10px;
    top: 50%;
    transition: all .4s
}

.navbar .dropdown-menu .dropdown-item:hover {
    padding-left: 30px
}

.navbar .dropdown-menu .dropdown-item:hover:after {
    width: 10px
}

.navbar .social-icon {
    padding: 0 20px;
    border-left: 1px solid hsla(0, 0%, 100%, .1)
}

.navbar .social-icon a {
    color: #fff;
    margin: 0 10px;
    font-size: 13px
}

.navbar .search {
    color: #fff;
    padding-left: 30px;
    border-left: 1px solid hsla(0, 0%, 100%, .1)
}

.navbar .search .icon {
    cursor: pointer
}

.navbar .search .search-form {
    /* position: fixed; */
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(37, 37, 49, .98);
    display: none
}

.navbar .search .search-form form {
    width: 600px;
    position: absolute;
    left: calc(50% - 300px);
    top: 50%;
    transform: translateY(-50%)
}

.navbar .search .search-form form input {
    padding: 15px 0;
    font-size: 80px;
    color: #fff;
    text-transform: uppercase;
    text-align: left;
    background: transparent;
    border: 0;
    border-bottom: 2px solid #b19777
}

.navbar .search .search-form .close {
    position: absolute;
    top: 20%;
    right: 20%;
    color: #fff;
    font-size: 60px;
    opacity: 1;
    cursor: pointer
}

.light,
.nav-scroll {
    background: #fff;
    box-shadow: 0 10px 30px rgba(37, 37, 49, .1);
    padding: 0;
    position: fixed;
    top: -80px;
    transition: transform .5s;
    transform: translateY(80px)
}

.light .icon-bar,
.light .navbar-nav .nav-link,
.nav-scroll .icon-bar,
.nav-scroll .navbar-nav .nav-link {
    color: #222
}

.light .navbar-nav .logo,
.nav-scroll .navbar-nav .logo {
    width: 100px;
    padding: 15px 0;
    color: #111
}

.light .social-icon,
.nav-scroll .social-icon {
    border-left: 1px solid rgba(0, 0, 0, .1)
}

.light .social-icon a,
.nav-scroll .social-icon a {
    color: #000
}

.light .search,
.nav-scroll .search {
    color: #000;
    border-left: 1px solid rgba(0, 0, 0, .1)
}

.slider {
    position: relative
}

.slider.fixed-slider {
    position: fixed;
    top: 0;
    left: 0;
    right: 0
}

.slider .swiper-slide-active {
    z-index: 3
}

.slider .parallax-slider {
    position: relative
}

.slider .parallax-slider .swiper-slide {
    position: relative;
    overflow: hidden;
    width: 100%;
    min-height: 100vh;
    padding-bottom: 50px
}

.slider .parallax-slider .swiper-slide .bg-img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover
}

.slider .parallax-slider .swiper-slide-active .caption h1 {
    transition: all 0s;
    opacity: 1;
    visibility: visible;
    transform: translateY(0)
}

.slider .parallax-slider .swiper-slide-active .caption h1 .char {
    -webkit-animation: fadeInUp .5s cubic-bezier(.3, 0, .7, 1) both;
    animation: fadeInUp .5s cubic-bezier(.3, 0, .7, 1) both;
    -webkit-animation-delay: calc(60ms*var(--char-index));
    animation-delay: calc(60ms*var(--char-index))
}

.slider .parallax-slider .swiper-slide-active .caption .btn-curve,
.slider .parallax-slider .swiper-slide-active .caption .thin,
.slider .parallax-slider .swiper-slide-active .caption p {
    opacity: 1;
    transform: translateY(0)
}

.slider .parallax-slider .caption .thin {
    color: #b19777;
    font-size: 30px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 8px;
    margin-bottom: 5px;
    opacity: 0;
    transform: translateY(-20px);
    transition: all .4s;
    transition-delay: .8s
}

.slider .parallax-slider .caption .thin span {
    color: #b19777
}

.slider .parallax-slider .caption h1 {
    font-size: 65px;
    font-weight: 700;
    letter-spacing: 4px;
    color: #fff;
    opacity: 0;
    visibility: hidden;
    transition: opacity .5s, visibility .5s
}

.slider .parallax-slider .caption h1 span {
    font-weight: 700
}

.slider .parallax-slider .caption p {
    color: #eee;
    opacity: 0;
    transform: translateY(20px);
    transition: all .4s;
    transition-delay: .8s
}

.slider .parallax-slider .caption .btn-curve {
    opacity: 0;
    transform: translateY(20px);
    transition: all .4s;
    transition-delay: 1s
}

.slider .parallax-slider .hmone h1 .thin {
    font-size: 30px;
    margin-bottom: 20px
}

.slider .caption.center h1 {
    font-size: 75px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: 2px;
    margin-bottom: 20px
}

.slider .setone {
    position: absolute;
    bottom: 8%;
    right: 40px;
    z-index: 8
}

.slider .setone .swiper-nav-ctrl {
    color: #ccc;
    font-size: 13px;
    width: 55px;
    height: 55px;
    line-height: 55px;
    text-align: center;
    margin: 5px 0;
    border: 1px solid hsla(0, 0%, 100%, .3);
    position: static
}

.slider .setone .swiper-nav-ctrl:after {
    display: none
}

.slider .setone.setwo {
    position: static
}

.slider .setone.setwo .swiper-nav-ctrl {
    border-radius: 50%
}

.slider .setone.setwo .next-ctrl {
    position: absolute;
    top: 50%;
    right: 30px
}

.slider .setone.setwo .prev-ctrl {
    position: absolute;
    top: 50%;
    left: 30px
}

.slider .swiper-pagination-fraction.top {
    position: absolute;
    right: 15%;
    left: auto;
    bottom: auto;
    top: 20%;
    width: auto;
    color: #fff;
    font-size: 40px;
    font-weight: 500
}

.slider .swiper-pagination-fraction.top .swiper-pagination-current {
    font-size: 60px;
    font-weight: 700;
    position: relative;
    color: transparent;
    -webkit-text-stroke: .5px #fff
}

.slider .swiper-pagination-fraction.top .swiper-pagination-current:after {
    content: "/";
    color: #fff;
    position: relative;
    margin: 0 10px;
    font-size: 12px;
    font-weight: 100
}

.slider .swiper-pagination-fraction.top.botm {
    top: auto;
    bottom: 40px;
    right: 40px
}

.slider .social-icon {
    position: absolute;
    left: 40px;
    bottom: 40px;
    z-index: 8
}

.slider .social-icon a {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid hsla(0, 0%, 100%, .05);
    color: #fff;
    font-size: 13px
}

.slid-half {
    position: relative
}

.slid-half .nofull {
    position: relative;
    overflow: hidden;
    background-color: #252531;
    background-image: url(https://archo-vue.vercel.app/img/line-pattern1.png);
    background-repeat: repeat;
    height: 105vh;
    color: #fff
}

.slid-half .swiper-pagination-fraction.top {
    position: absolute;
    right: 15%;
    left: auto;
    bottom: auto;
    top: 20%;
    width: auto;
    color: #fff;
    font-size: 40px;
    font-weight: 500
}

.slid-half .swiper-pagination-fraction.top .swiper-pagination-current {
    font-size: 60px;
    font-weight: 700;
    position: relative;
    color: transparent;
    -webkit-text-stroke: .5px #fff
}

.slid-half .swiper-pagination-fraction.top .swiper-pagination-current:after {
    content: "/";
    color: #fff;
    position: relative;
    margin: 0 10px;
    font-size: 12px;
    font-weight: 100
}

.cta__slider-wrapper {
    position: relative;
    width: 100%;
    height: 105vh;
    overflow: hidden
}

.cta__slider-wrapper .block {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0
}

.cta__slider {
    min-height: 105vh
}

.cta__slider .swiper-slide {
    overflow: hidden
}

.cta__slider-arrows {
    display: block;
    position: absolute;
    bottom: 40px;
    right: 40px;
    z-index: 2
}

.cta__slider-arrow {
    width: 55px;
    height: 55px;
    text-align: center;
    line-height: 55px;
    font-size: 13px;
    border: 1px solid hsla(0, 0%, 100%, .3);
    display: block;
    cursor: pointer
}

.cta__slider-arrow.cta__slider-arrow--previous {
    left: 0
}

.cta__slider-arrow.cta__slider-arrow--next {
    left: 50%
}

.cta__slider-item {
    position: relative
}

.cta__slider-item .media-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0
}

.cta__slider-item .media-wrapper .bg-img {
    position: absolute;
    width: 70%;
    height: 100%;
    right: 0;
    top: 0
}

.cta__slider-item .container {
    position: relative;
    z-index: 4
}

.cta__slider-item .caption {
    position: relative
}

.cta__slider-item .caption .bottom-corn,
.cta__slider-item .caption .top-corn {
    position: absolute;
    left: -60px;
    top: -60px;
    opacity: .3
}

.cta__slider-item .caption .bottom-corn:after,
.cta__slider-item .caption .bottom-corn:before,
.cta__slider-item .caption .top-corn:after,
.cta__slider-item .caption .top-corn:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: #b19777
}

.cta__slider-item .caption .bottom-corn:after,
.cta__slider-item .caption .top-corn:after {
    width: 30px;
    height: 1px
}

.cta__slider-item .caption .bottom-corn:before,
.cta__slider-item .caption .top-corn:before {
    width: 1px;
    height: 30px
}

.cta__slider-item .caption .bottom-corn {
    top: auto;
    bottom: -60px
}

.cta__slider-item .caption .bottom-corn:before {
    top: auto;
    bottom: 0
}

.cta__slider-item .caption h1 {
    font-size: 75px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 4px;
    color: #fff;
    opacity: 0;
    visibility: hidden;
    transition: opacity .5s, visibility .5s
}

.cta__slider-item .caption .thin {
    color: #b19777;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 12px;
    margin-bottom: 5px;
    transform: translateY(-20px)
}

.cta__slider-item .caption .thin,
.cta__slider-item .caption p {
    font-weight: 300;
    opacity: 0;
    transition: all .4s;
    transition-delay: .8s
}

.cta__slider-item .caption p {
    color: #eee;
    font-size: 14px;
    transform: translateY(-20px);
    transform: translateY(20px)
}

.cta__slider-item .caption .btn-curve {
    opacity: 0;
    transform: translateY(20px);
    transition: all .4s;
    transition-delay: 1s
}

.cta__slider-item.swiper-slide-active .caption h1 {
    transition: all 0s;
    opacity: 1;
    visibility: visible
}

.cta__slider-item.swiper-slide-active .caption h1 .char {
    -webkit-animation: fadeInUp .5s cubic-bezier(.3, 0, .7, 1) both;
    animation: fadeInUp .5s cubic-bezier(.3, 0, .7, 1) both;
    -webkit-animation-delay: calc(60ms*var(--char-index));
    animation-delay: calc(60ms*var(--char-index))
}

.cta__slider-item.swiper-slide-active .caption .btn-curve,
.cta__slider-item.swiper-slide-active .caption .thin,
.cta__slider-item.swiper-slide-active .caption p {
    opacity: 1;
    transform: translateY(0)
}

.pages-header {
    height: 75vh
}

.pages-header .cont h1 {
    font-size: 75px;
    margin-bottom: 20px
}

.pages-header .cont .path {
    color: #fff;
    font-size: 17px
}

.pages-header .cont .path .active {
    color: #b19777
}

.pages-header .cont .path span {
    margin: 0 20px;
    font-size: 10px
}

.about {
    position: relative
}

.about .exp-img .img {
    width: 90%;
    height: 500px;
    position: relative;
    z-index: 2
}

.about .exp-img .img:after {
    content: "";
    position: absolute;
    top: 40px;
    left: 40px;
    right: 40px;
    bottom: 40px;
    background: hsla(0, 0%, 100%, .95);
    z-index: -1
}

.about .exp-img .img .since {
    position: absolute;
    right: 70px;
    top: 70px
}

.about .exp-img .img .since span {
    display: block;
    color: #b19777;
    font-size: 22px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1
}

.about .exp-img .img .since span:first-of-type {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 2px
}

.about .exp-img .img .years {
    position: absolute;
    left: 70px;
    bottom: 70px
}

.about .exp-img .img .years h2 {
    font-size: 140px;
    font-weight: 800;
    background: url(https://archo-vue.vercel.app/img/exp.jpg) no-repeat;
    background-position: 18% 65%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1
}

.about .exp-img .img .years h5 {
    color: #b19777;
    letter-spacing: 5px;
    font-size: 20px
}

.about .exp-content {
    position: relative;
    z-index: 2
}

.about .exp-content:after {
    content: "";
    width: 200px;
    height: 250px;
    position: absolute;
    top: -40px;
    right: -40px;
    border: 10px solid #fafafa;
    z-index: -1
}

.about .exp-content.nopat:after {
    display: none
}

.about .exp-content ul {
    margin: 30px 0 0;
    display: flex
}

.about .exp-content ul li {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 4px;
    text-transform: uppercase
}

.about .exp-content ul li:after {
    content: "/";
    position: relative;
    margin: 0 15px;
    color: #777
}

.about .exp-content ul li:last-of-type:after {
    display: none
}

.about .ab-exp .pattern {
    height: 100%;
    width: 100%
}

.about .ab-exp .years-exp {
    position: relative;
    height: 100%;
    width: 100%;
    border: 10px solid #f8f4f3
}

.about .ab-exp .years-exp .exp-text {
    position: absolute;
    bottom: 40px;
    left: -10px;
    padding: 10px 0;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    background: #fff
}

.about .ab-exp .years-exp .exp-text h2 {
    font-size: 70px;
    line-height: 1;
    display: inline-block;
    position: relative;
    z-index: 2
}

.about .ab-exp .years-exp .exp-text h2:after {
    content: "";
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #f8f4f3;
    position: absolute;
    right: -15px;
    top: -15px;
    z-index: -1
}

.about .ab-exp .years-exp .exp-text h6 {
    font-size: 14px
}

.about .specialty ul {
    margin: 0
}

.about .specialty ul li {
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 0 0 15px;
    border-bottom: 1px solid #f1f1f1;
    margin-bottom: 30px
}

.about .specialty ul li span {
    font-size: 14px;
    font-weight: 300;
    color: #999;
    margin-right: 30px
}

.about .specialty ul li:last-of-type {
    margin-bottom: 0
}

.about .pat {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 40%;
    z-index: 2
}

.about .pat:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    opacity: .94
}

.intro-section .item h6 {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 10px
}

.services .bord-box {
    overflow: hidden
}

.services .box-top {
    position: relative;
    margin-top: -80px;
    z-index: 4
}

.services .feat-top {
    padding: 100px 80px;
    position: relative;
    width: 80%;
    margin-top: -40px;
    z-index: 3
}

.services .feat-top .notfull {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    transition: all .7s cubic-bezier(1, 0, .25, 1);
    transition-delay: .3s
}

.services .feat-top .notfull.animated {
    width: 100%
}

.services .item-bx {
    padding: 60px 40px;
    height: 100%;
    background-color: #fff;
    border: 1px solid #eee;
    border-right: 0;
    transition: all .4s
}

.services .item-bx:last-of-type {
    border-right: 1px solid #eee
}

.services .item-bx:hover {
    background-color: rgba(0, 0, 0, .6);
    color: #fff
}

.services .item-bx:hover p {
    color: #eee
}

.services .item-bx:hover .more {
    color: #b19777
}

.services .item-bx .numb {
    font-size: 60px;
    margin-bottom: 10px;
    color: transparent;
    -webkit-text-stroke: 1px #b19777
}

.services .item-bx .icon {
    font-size: 60px;
    color: #b19777;
    margin-bottom: 30px
}

.services .item-bx .more {
    font-size: 20px
}

.services .item-bx.bg-img {
    position: relative;
    border: 0;
    z-index: 2
}

.services .item-bx.bg-img:hover:after {
    background: rgba(0, 0, 0, .6)
}

.services .item-bx.bg-img:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    transition: all .4s;
    z-index: -1
}

.services .item-sm h6 {
    font-weight: 600;
    font-size: 18px
}

.services .item-sm .numb {
    font-size: 40px;
    font-weight: 400;
    color: #b19777;
    padding-right: 70px;
    line-height: 1;
    position: relative
}

.services .item-sm .numb:after {
    content: "";
    position: absolute;
    right: 10px;
    bottom: 10px;
    background: #ddd;
    width: 50px;
    height: 1px
}

.services.halfbg .background {
    height: 70vh
}

.services.halfbg .ontop {
    position: relative;
    margin-top: -120px;
    z-index: 3
}

.services.halfbg .ontop .item-bx:hover {
    background: #b19777
}

.services.halfbg .ontop .item-bx:hover .more,
.services.halfbg .ontop .item-bx:hover .numb {
    color: #fff
}

.brands .box-top {
    padding: 40px 30px;
    background: #fff;
    box-shadow: 0 0 45px rgba(10, 10, 10, .06);
    border-radius: 20px;
    position: relative;
    margin-top: -50px;
    z-index: 3
}

.brands .box-top .item {
    text-align: center;
    margin: 15px 0
}

.numbers .item {
    position: relative
}

.numbers .item:after {
    width: 35px;
    height: 35px;
    bottom: 0;
    background: #f7f7f7
}

.numbers .item:before {
    width: 0;
    height: 0;
    border-top: 35px solid transparent;
    border-right: 35px solid #f7f7f7;
    bottom: 35px
}

.numbers .item:after,
.numbers .item:before {
    content: "";
    position: absolute;
    right: 20%;
    z-index: -1
}

.numbers .item h3 {
    margin-bottom: 10px
}

.numbers .item h3 span {
    font-size: 60px;
    color: #b19777
}

.numbers .item h3 i {
    font-size: 30px;
    font-weight: 300;
    font-style: normal;
    color: #777;
    margin-left: 15px
}

.numbers .item h6 {
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px
}

.portfolio .filtering .filter {
    padding: 15px
}

.portfolio .filtering .filter.box {
    box-shadow: 0 10px 30px rgba(0, 0, 0, .1);
    display: inline-block
}

.portfolio .filtering span {
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 0 20px;
    cursor: pointer;
    position: relative
}

.portfolio .filtering span.active {
    color: #b19777
}

.portfolio .filtering span:after {
    content: "";
    width: 7px;
    height: 7px;
    background: #b19777;
    border-radius: 50%;
    position: absolute;
    right: -24px;
    top: 40%
}

.portfolio .filtering span:last-of-type:after {
    display: none
}

.portfolio .gallery .items {
    padding: 0 15px
}

.portfolio .gallery .items .item-img {
    overflow: hidden;
    position: relative;
    height: 440px
}

.portfolio .gallery .items .item-img>a {
    display: block
}

.portfolio .gallery .items .item-img:hover .item-img-overlay {
    opacity: 1;
    visibility: visible
}

.portfolio .gallery .items .item-img img {
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    transition: all .5s
}

.portfolio .gallery .items .item-img:after,
.portfolio .gallery .items .item-img:before {
    content: "";
    position: absolute;
    background: #fff;
    z-index: 2;
    transition: all .4s
}

.portfolio .gallery .items .item-img:after {
    width: 50px;
    height: 1px;
    top: 50%;
    left: -100px
}

.portfolio .gallery .items .item-img:before {
    height: 50px;
    width: 1px;
    left: 50%;
    top: -100px
}

.portfolio .gallery .items .item-img:hover:after {
    left: 50%;
    transform: translateX(-25px)
}

.portfolio .gallery .items .item-img:hover:before {
    top: 50%;
    transform: translateY(-25px)
}

.portfolio .gallery .items .item-img-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(38, 38, 40, .5);
    text-align: center;
    transition: all .5s;
    opacity: 0;
    visibility: hidden
}

.portfolio .gallery .items .info {
    background-image: url(https://archo-vue.vercel.app/img/line-pattern.png);
    padding: 10px 20px
}

.portfolio .gallery .items .info h5 {
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase
}

.portfolio .gallery .items .info span {
    color: #777;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 4px
}

.portfolio .gallery.twsty .items {
    width: 50%
}

.portfolio .gallery.twsty .four-column {
    width: 25% !important
}

.portfolio .gallery.twsty .four-column .item-img {
    height: 300px
}

.portfolio .gallery.twsty .three-column {
    width: 33.333333% !important
}

.portfolio .gallery.inf-lit .items {
    position: relative
}

.portfolio .gallery.inf-lit .items:hover .info {
    opacity: 1;
    transform: translate(0) skew(0);
    transition: all .4s
}

.portfolio .gallery.inf-lit .items .info {
    background: #fff;
    position: absolute;
    bottom: 0;
    left: 15px;
    width: 90%;
    padding: 15px;
    transform: translateX(-30px) translateY(30px) skew(10deg);
    opacity: 0;
    transition: all .3s
}

.portfolio .gallery.inf-lit .items .info h5 {
    font-weight: 600;
    text-transform: capitalize
}

.portfolio .gallery.inf-lit .items .info span {
    text-transform: capitalize;
    letter-spacing: 1px
}

.portfolio.full-bg {
    position: relative
}

.portfolio.full-bg .cluom {
    height: 90vh;
    padding: 0;
    position: relative;
    z-index: 2;
    border-right: 1px solid hsla(0, 0%, 100%, .3);
    transition: all .4s
}

.portfolio.full-bg .cluom.current {
    background: rgba(0, 0, 0, .3)
}

.portfolio.full-bg .cluom:hover .info {
    color: inherit
}

.portfolio.full-bg .cluom:hover .info:after {
    height: 100%
}

.portfolio.full-bg .cluom:hover .more {
    transform: translateY(0);
    opacity: 1
}

.portfolio.full-bg .cluom .info {
    padding: 40px 10px 40px 20px;
    color: #fff;
    position: relative;
    z-index: 2;
    transition: all .4s;
    overflow: hidden
}

.portfolio.full-bg .cluom .info:after {
    content: "";
    position: absolute;
    top: 0;
    left: -2%;
    width: 104%;
    height: 0;
    background: #fff;
    z-index: -1;
    transition: all .4s
}

.portfolio.full-bg .cluom .info h6 {
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 10px
}

.portfolio.full-bg .cluom .info h5 {
    font-size: 21px
}

.portfolio.full-bg .cluom .more {
    position: absolute;
    bottom: 50px;
    right: 50px;
    color: #fff;
    font-size: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transform: translateY(20px);
    opacity: 0;
    transition: all .4s
}

.portfolio.full-bg .cluom .more i {
    font-size: 10px;
    margin-left: 2px
}

.portfolio.full-bg .bg-img,
.portfolio.full-bg .glry-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
}

.portfolio.full-bg .glry-img {
    overflow: hidden
}

.portfolio.full-bg .glry-img .bg-img {
    transform: scale(1.1);
    opacity: 0;
    transition: all .7s;
    background-size: cover;
    background-position: 50%
}

.portfolio.full-bg .glry-img .bg-img.current {
    transform: scale(1);
    opacity: 1
}

.work-carousel .swiper-slide {
    padding: 0 15px
}

.work-carousel .swiper-button-next,
.work-carousel .swiper-button-prev {
    color: #000;
    width: 60px;
    height: 60px;
    border-radius: 0;
    border: 0;
    background: #fff;
    opacity: 0;
    transition: all .3s
}

.work-carousel .swiper-button-next:after,
.work-carousel .swiper-button-prev:after {
    display: none
}

.work-carousel:hover .swiper-button-next,
.work-carousel:hover .swiper-button-prev {
    opacity: 1
}

.work-carousel .content {
    position: relative
}

.work-carousel .content .item-img {
    position: relative;
    height: 480px;
    line-height: 0
}

.work-carousel .content:hover .item-ig {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)
}

.work-carousel .content .cont {
    color: #fff;
    margin-top: 30px;
    text-align: center
}

.work-carousel .content .cont h6 {
    color: #b19777;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 10px
}

.work-carousel .content .cont h4 {
    font-weight: 600;
    font-size: 24px
}

.work-carousel.dark {
    background: #252531 !important;
    color: #fff
}

.process .coulmn {
    position: relative
}

.process .coulmn:after {
    position: absolute;
    content: "";
    width: 75px;
    border-top: 2px dashed #b19777;
    top: 75px;
    right: -35px
}

.process .item {
    text-align: center
}

.process .item .bg-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto 30px;
    text-align: center;
    position: relative
}

.process .item .bg-img:after {
    content: "";
    position: absolute;
    top: 7px;
    left: 7px;
    right: 7px;
    bottom: 7px;
    border-radius: 50%;
    background: rgba(0, 0, 0, .25)
}

.process .item .bg-img h3 {
    color: #fff;
    font-size: 40px;
    font-weight: 300;
    line-height: 150px;
    position: relative;
    z-index: 3
}

.skills-circle .skill {
    position: relative
}

.skills-circle .skill span {
    width: 150px;
    height: 150px;
    line-height: 150px;
    border-radius: 50%;
    background: hsla(0, 0%, 100%, .1);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-75px) translateY(-98px);
    font-size: 40px;
    font-weight: 300
}

.skills-circle .skill h6 {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 20px
}

.skills-sec .skill-item {
    margin-bottom: 50px
}

.skills-sec .skill-item:last-of-type {
    margin-bottom: 0
}

.skills-sec h6 {
    font-size: 13px;
    font-weight: 300;
    font-style: italic;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 10px
}

.skills-sec .skill-progress {
    height: 7px;
    background-color: #f7f7f7;
    position: relative
}

.skills-sec .skill-progress .progres {
    position: absolute;
    height: 100%;
    width: 0;
    top: 0;
    left: 0;
    background-color: #333;
    transition: all 1.5s
}

.skills-sec .skill-progress .progres:after {
    content: attr(data-value);
    position: absolute;
    right: 10px;
    top: -30px;
    font-size: 20px;
    font-weight: 100
}

.skills-sec .skill-progress .progres:before {
    content: "";
    width: 1px;
    height: 30px;
    background: #333;
    position: absolute;
    right: 0;
    bottom: 0
}

.play-button {
    position: relative;
    width: 85px;
    height: 85px;
    margin: auto;
    transform: scale(1.3);
    z-index: 4
}

.play-button svg {
    position: absolute;
    width: 100%;
    height: 100%
}

.circle-fill circle {
    opacity: 1;
    fill: hsla(0, 0%, 100%, .1)
}

.polygon {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 90px;
    font-size: 35px;
    z-index: 2
}

.play-button svg.circle-fill {
    z-index: 1;
    stroke-dasharray: 322;
    stroke-dashoffset: 322;
    transition: all .5s;
    transform: rotate(-90deg)
}

.play-button:hover svg.circle-fill {
    stroke-dashoffset: 38.5
}

.play-button svg.circle-track {
    z-index: 0
}

.play-button.color {
    color: #b19777
}

.play-button.color .circle-fill circle {
    fill: rgba(177, 151, 119, .2)
}

.after-before {
    position: relative;
    color: #fff
}

.after-before .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    z-index: -1
}

.after-before .dotsbg {
    position: relative
}

.after-before .dotsbg:after {
    content: "";
    background-image: url(https://archo-vue.vercel.app/img/line-pattern1.png);
    background-repeat: repeat;
    position: absolute;
    bottom: -60px;
    left: 10%;
    right: 10%;
    height: 40%;
    z-index: -1
}

.call-action {
    background-color: #020202;
    color: #fff
}

.call-action.gray {
    background: #f8f8f8
}

.call-action.gray .content h6 {
    color: #777;
    font-size: 14px;
    font-weight: 500
}

.call-action.gray .content h6 span {
    color: #777
}

.call-action.gray .content h2 {
    font-size: 5vw;
    font-weight: 700;
    margin-bottom: 20px;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #333
}

.call-action.gray .content h2 b span {
    color: #333;
    -webkit-text-stroke-width: 0
}

.call-action.gray .tlink {
    border-bottom: 1px solid #333
}

.call-action:before {
    background-image: url(https://archo-vue.vercel.app/img/giphy.gif);
    background-repeat: repeat;
    opacity: .04
}

.call-action.nogif {
    position: relative;
    padding: 80px 0;
    background: #0a0a0a;
    z-index: 2;
    overflow: hidden
}

.call-action.nogif:before {
    display: none
}

.call-action.nogif:after {
    content: "";
    height: 0;
    width: 100%;
    position: absolute;
    top: auto;
    right: 0;
    bottom: 0;
    transition: height .6s cubic-bezier(.25, .8, .25, 1) 0s;
    background: #0c0c0c;
    z-index: -1
}

.call-action.nogif:hover:after {
    height: 100%;
    top: 0;
    bottom: auto
}

.call-action .content h6 {
    color: #b19777;
    font-size: 13px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-bottom: 10px
}

.call-action .content h6 span {
    color: #b19777
}

.call-action .content h2 {
    font-size: 6vw;
    font-weight: 800;
    margin-bottom: 20px;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fff;
    color: transparent
}

.call-action .content h2 span {
    color: transparent
}

.call-action .content h2 .word {
    margin-right: 15px
}

.call-action .content h2 b span {
    color: #fff;
    -webkit-text-stroke-width: 0
}

.call-action .content p {
    font-size: 17px;
    font-weight: 300
}

.call-action .tlink {
    margin-left: auto;
    border-bottom: 1px solid #eee
}

.call-action.next {
    position: relative;
    z-index: 2;
    overflow: hidden
}

.call-action.next:after {
    display: none
}

.call-action.next:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    background: #0a0a0a;
    opacity: 1;
    transition: all .5s
}

.call-action.next .content h2 {
    font-size: 5vw;
    font-weight: 700
}

.call-action.next .content h2 b {
    font-weight: 700
}

.call-action.next .nxt-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: scale(1.4);
    background-size: cover;
    background-position: 50%;
    z-index: -1;
    transition: all 1s linear
}

.call-action.next:hover:before {
    opacity: .9
}

.call-action.next:hover .nxt-img {
    transform: scale(1);
    transition: all 10s linear
}

.video-wrapper {
    min-height: 500px
}

.video-wrapper .vid {
    position: relative;
    z-index: 8
}

.video-wrapper .vid .vid-butn:hover .icon {
    color: #fff
}

.video-wrapper .vid .vid-butn:hover .icon:before {
    transform: scale(0)
}

.video-wrapper .vid .vid-butn .icon {
    color: #212529;
    width: 100px;
    height: 100px;
    border: 1px solid hsla(0, 0%, 100%, .2);
    border-radius: 50%;
    line-height: 100px;
    text-align: center;
    font-size: 17px;
    position: relative;
    transition: all .5s
}

.video-wrapper .vid .vid-butn .icon:after {
    content: "";
    position: absolute;
    top: 5px;
    bottom: 5px;
    right: 5px;
    left: 5px;
    border: 1px solid #eee;
    border-radius: 50%;
    z-index: -1
}

.video-wrapper .vid .vid-butn .icon:before {
    content: "";
    position: absolute;
    top: 5px;
    bottom: 5px;
    right: 5px;
    left: 5px;
    background: #fff;
    border-radius: 50%;
    z-index: -1;
    transition: all .5s cubic-bezier(1, 0, 0, 1)
}

.team {
    position: relative
}

.team .team-container {
    width: 140%;
    position: relative
}

.team .team-container:after {
    content: "";
    position: absolute;
    top: -120px;
    bottom: -120px;
    right: 0;
    width: 80%;
    background: #f8f4f3;
    z-index: -1
}

.team .item {
    padding: 0 15px
}

.team .item .img {
    position: relative;
    overflow: hidden
}

.team .item .img:hover:after {
    opacity: .5
}

.team .item .img:hover .social {
    opacity: 1;
    left: 0
}

.team .item .img:after {
    content: "";
    left: 0;
    width: 100%;
    height: 100%;
    background: #111
}

.team .item .img .social,
.team .item .img:after {
    position: absolute;
    top: 0;
    opacity: 0;
    transition: all .4s
}

.team .item .img .social {
    left: -40px;
    background-color: #fff;
    padding: 20px 10px;
    z-index: 2
}

.team .item .img .social a {
    display: block;
    font-size: 13px;
    margin-top: 10px;
    color: #b19777
}

.team .item .info {
    margin-top: 20px;
    text-align: center
}

.team .item .info h5 {
    font-size: 18px;
    margin-bottom: 2px
}

.team .item .info span {
    color: #777;
    font-size: 14px
}

.team .slick-dots {
    bottom: -40px
}

.team .slick-dots li.slick-active button {
    background: #b19777
}

.team .slick-dots li button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    opacity: .8
}

.team .slick-dots li button:before {
    content: "";
    width: 4px;
    height: 4px;
    border-radius: 50%;
    position: absolute;
    top: 4px;
    left: 4px;
    line-height: 1;
    background: #b19777;
    opacity: 1
}

.team .dots-half {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70%;
    z-index: -2
}

.testimonials.grid .testim {
    position: relative
}

.testimonials.grid .testim .slick-track {
    padding-top: 15px
}

.testimonials.grid .item {
    position: relative;
    margin: 0 20px
}

.testimonials.grid .item .quote-icon {
    position: absolute;
    top: -20px;
    right: 12%;
    width: 10%;
    z-index: 2
}

.testimonials.grid .item .cont {
    padding: 50px 40px 40px;
    border: 10px solid #f7f7f7;
    border-top: 0;
    position: relative
}

.testimonials.grid .item .cont:after,
.testimonials.grid .item .cont:before {
    content: "";
    position: absolute;
    height: 10px;
    background: #f7f7f7;
    top: 0
}

.testimonials.grid .item .cont:after {
    width: 75%;
    left: 0
}

.testimonials.grid .item .cont:before {
    width: 5%;
    right: 0
}

.testimonials.grid .item .cont p {
    font-size: 18px;
    font-weight: 400;
    font-style: italic;
    color: #333
}

.testimonials.grid .item .info {
    margin-top: 30px;
    padding-left: 30px;
    position: relative
}

.testimonials.grid .item .info:after {
    content: "";
    width: 0;
    height: 0;
    border-top: 25px solid #f7f7f7;
    border-right: 30px solid transparent;
    position: absolute;
    left: 100px;
    top: -30px
}

.testimonials.grid .item .info .author {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;
    display: table-cell
}

.testimonials.grid .item .info .author img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center
}

.testimonials.grid .item .info h6 {
    display: table-cell;
    vertical-align: middle;
    padding-left: 20px;
    font-size: 16px
}

.testimonials.grid .item .info h6 span {
    color: #b19777;
    font-size: 13px;
    font-weight: 400;
    margin-top: 5px;
    display: block
}

.testimonials.grid .lit-box .cont {
    background: #fff;
    box-shadow: 0 10px 30px rgba(0, 0, 0, .05)
}

.testimonials.grid .lit-box .info:after {
    border-top-color: #fff !important
}

.testimonials.grid .navs {
    position: absolute;
    top: 30%;
    left: 0;
    width: 100%
}

.testimonials.grid .navs span {
    padding: 10px 20px;
    background: #f8f4f3;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0
}

.testimonials.grid .navs span:hover {
    background: #b19777;
    color: #fff
}

.testimonials.grid .navs .next {
    left: auto;
    right: 0
}

.testimonials.bg-img .item .cont {
    border-color: hsla(0, 0%, 100%, .15)
}

.testimonials.bg-img .item .cont:after,
.testimonials.bg-img .item .cont:before {
    background: hsla(0, 0%, 100%, .15)
}

.testimonials.bg-img .item .cont p {
    color: #fff
}

.testimonials.bg-img .item .info:after {
    border-top-color: hsla(0, 0%, 100%, .15)
}

.testimonials.bg-img .navs span {
    color: #b19777
}

.testimonials.bg-img .navs span:hover {
    background: #b19777;
    color: #fff
}

.blog-grid {
    position: relative
}

.blog-grid .item .post-img .img {
    overflow: hidden
}

.blog-grid .item .post-img:hover img {
    transform: scale(1.1)
}

.blog-grid .item .post-img img {
    transition: all .5s
}

.blog-grid .item .cont {
    position: relative;
    padding: 40px 30px 0;
    width: 92%;
    margin-left: 8%;
    margin-top: -40px;
    background: #fff
}

.blog-grid .item .info {
    margin-bottom: 15px
}

.blog-grid .item .info a {
    color: #777;
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1px;
    margin-right: 10px
}

.blog-grid .item .info a:last-of-type {
    margin-right: 0
}

.blog-grid .item .info a i {
    margin-right: 2px
}

.blog-grid .item .info .tag {
    color: #b19777;
    font-weight: 600;
    float: right
}

.blog-grid .item h5 {
    font-size: 17px;
    line-height: 1.7;
    margin-bottom: 15px
}

.blog-grid .item .more {
    color: #b19777;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom: 1px solid #b19777;
    transition: all .2s
}

.blog-grid .item .more:hover {
    border-color: transparent
}

.blog-grid.center .item {
    text-align: center
}

.blog-grid.center .item .cont {
    margin-left: 4%;
    padding: 40px
}

.blog-grid.center .item .cont h5 {
    font-size: 21px
}

.blog-pg .posts .item .img {
    position: relative
}

.blog-pg .posts .item .img .info {
    position: absolute;
    right: 0;
    top: 0;
    padding: 15px;
    background: #fff
}

.blog-pg .posts .item .img .info .date {
    text-align: center;
    color: #b19777
}

.blog-pg .posts .item .img .info .date .num {
    display: block;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
    padding-bottom: 10px;
    position: relative
}

.blog-pg .posts .item .img .info .date .num:after {
    content: "";
    width: 30px;
    height: 1px;
    background: #eee;
    position: absolute;
    bottom: 0;
    left: calc(50% - 15px)
}

.blog-pg .posts .item .img .info .date h5 {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px
}

.blog-pg .posts .item .content {
    padding-top: 25px
}

.blog-pg .posts .item .content .tags {
    margin-bottom: 10px
}

.blog-pg .posts .item .content .tags a {
    font-size: 12px;
    font-weight: 500;
    color: #b19777;
    padding-right: 20px;
    position: relative
}

.blog-pg .posts .item .content .tags a:after {
    content: "";
    width: 8px;
    height: 2px;
    background: #eee;
    position: absolute;
    right: 4px;
    top: 50%
}

.blog-pg .posts .item .content .tags a:last-of-type {
    padding-right: 0
}

.blog-pg .posts .item .content .tags a:last-of-type:after {
    display: none
}

.blog-pg .posts .item .content h4 {
    font-weight: 700;
    line-height: 1.6;
    margin-bottom: 5px
}

.blog-pg .posts .item .content .more {
    margin-top: 20px;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding-left: 60px;
    position: relative;
    transition: all .5s
}

.blog-pg .posts .item .content .more:after {
    content: "";
    width: 50px;
    height: 1px;
    background: #090909;
    position: absolute;
    left: 0;
    top: 50%;
    transition: all .5s
}

.blog-pg .posts .item .content .more:hover {
    padding-left: 40px
}

.blog-pg .posts .item .content .more:hover:after {
    width: 30px
}

.blog-pg .posts .pagination {
    margin: 80px auto 0;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    text-align: center
}

.blog-pg .posts .pagination span {
    text-align: center;
    margin: 0 2px
}

.blog-pg .posts .pagination span a {
    width: 50px;
    height: 50px;
    line-height: 50px;
    border: 1px solid #eee;
    font-size: 18px
}

.blog-pg .posts .pagination span.active a {
    border-color: #b19777;
    color: #b19777
}

.blog-pg.single .post .title-head {
    text-align: center;
    margin-bottom: 50px
}

.blog-pg.single .post .title-head h2 {
    margin-bottom: 10px
}

.blog-pg.single .post .title-head a {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 0 10px
}

.blog-pg.single .post .main-img .simpleParallax {
    height: 70vh;
    max-height: 600px
}

.blog-pg.single .post .main-img img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center center;
    object-position: center center
}

.blog-pg.single .post .content p {
    color: #555;
    font-size: 16px;
    font-family: inherit;
    margin: 30px 0
}

.blog-pg.single .post .content ul li {
    margin: 10px 0
}

.blog-pg.single .post .content ul li span {
    margin-right: 10px;
    font-weight: 500;
    font-size: 13px
}

.blog-pg.single .post .content .quotes {
    background: #fafafa;
    padding: 30px;
    margin: 30px 0
}

.blog-pg.single .post .content .quotes p {
    color: #111;
    font-size: 18px;
    font-style: italic
}

.blog-pg.single .post .content .spacial p {
    color: #111;
    font-size: 18px;
    font-weight: 500
}

.blog-pg.single .post .content .share-info {
    margin-top: 20px;
    padding-top: 10px;
    border-top: 1px solid #999;
    display: flex
}

.blog-pg.single .post .content .share-info .social a {
    font-size: 13px;
    margin-right: 20px
}

.blog-pg.single .post .content .share-info .tags {
    margin-left: auto
}

.blog-pg.single .post .content .share-info .tags a {
    font-size: 12px;
    margin: 0 10px
}

.blog-pg.single .post .author {
    padding: 30px;
    margin-top: 40px;
    background: #fafafa
}

.blog-pg.single .post .author .author-img {
    display: table-cell;
    vertical-align: middle;
    width: 140px
}

.blog-pg.single .post .author .info {
    display: table-cell;
    padding-left: 40px
}

.blog-pg.single .post .author .info h6 {
    margin-bottom: 10px;
    font-size: 15px
}

.blog-pg.single .post .author .info h6 span {
    font-weight: 700;
    text-transform: uppercase;
    margin-right: 10px
}

.blog-pg.single .post .author .info p {
    padding: 0;
    margin: 0
}

.blog-pg.single .post .author .info .social {
    margin-top: 15px;
    font-size: 13px
}

.blog-pg.single .post .author .info .social a {
    margin-right: 15px
}

.blog-pg.single .pagination {
    margin-top: 80px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    display: flex
}

.blog-pg.single .pagination span {
    width: 100%;
    padding: 20px;
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 13px;
    letter-spacing: 1px
}

.blog-pg.single .pagination .icon {
    border: 0;
    width: 70px
}

.blog-pg.single .comments-area {
    margin-top: 80px
}

.blog-pg.single .comments-area .item {
    padding: 30px 0;
    margin: 30px 0;
    border-bottom: 1px solid #eee
}

.blog-pg.single .comments-area .item.relped {
    margin-left: 100px
}

.blog-pg.single .comments-area .item .comment-img {
    display: table-cell;
    width: 80px
}

.blog-pg.single .comments-area .item .info {
    display: table-cell;
    vertical-align: middle;
    padding-left: 40px;
    position: relative
}

.blog-pg.single .comments-area .item .info h6 {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500
}

.blog-pg.single .comments-area .item .info h6 span {
    display: block;
    color: #b19777;
    font-size: 12px;
    font-weight: 400;
    margin-top: 5px
}

.blog-pg.single .comments-area .item .info p {
    line-height: 1.5;
    margin-top: 15px
}

.blog-pg.single .comments-area .item .info .replay {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 13px
}

.blog-pg.single .comments-area .item .info .replay i {
    margin-left: 5px
}

.blog-pg.single .comment-form {
    margin-top: 80px
}

.blog-pg.single .comment-form form {
    margin-top: 50px
}

.blog-pg.single .comment-form form input,
.blog-pg.single .comment-form form textarea {
    width: 100%;
    padding: 17px;
    background: #fafafa;
    border: 0
}

.blog-pg.single .comment-form form textarea {
    height: 140px
}

.blog-pg.single .comment-form form button {
    cursor: pointer
}

.next-project {
    position: relative;
    padding: 80px 0;
    margin-top: 90px;
    background: #fafafa;
    z-index: 2;
    overflow: hidden
}

.next-project:before {
    display: none
}

.next-project:after {
    content: "";
    height: 0;
    width: 100%;
    position: absolute;
    bottom: auto;
    right: 0;
    top: 0;
    transition: height .6s cubic-bezier(.25, .8, .25, 1) 0s;
    background: #f5f5f5;
    z-index: -1
}

.next-project:hover:after {
    height: 100%;
    bottom: 0;
    top: auto
}

.next-project .content {
    width: 100%
}

.next-project .content h2 {
    font-size: 90px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-bottom: 20px
}

.next-project .content p {
    font-size: 18px;
    color: #555
}

.cont-map {
    position: relative;
    z-index: 2
}

.cont-map .contact-form form {
    position: relative;
    top: -50px;
    right: -50px;
    padding: 60px 30px;
    background: #fff;
    box-shadow: 0 10px 30px rgba(0, 0, 0, .05);
    border: 10px solid #f7f7f7;
    border-radius: 5px
}

.cont-map .contact-form form input,
.cont-map .contact-form form textarea {
    padding: 15px;
    background: #f7f7f7;
    border: 0;
    width: 100%
}

.cont-map .contact-form form textarea {
    height: 160px
}

.cont-map .contact-map {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 70%;
    z-index: -1
}

.cont-map .contact-map .map {
    height: 100%
}

.cont-map .contact-form,
.cont-map .contact-map {
    padding: 0
}

.cont-map .bg-img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 30%;
    z-index: -1
}

.contact .info .item {
    padding: 40px 20px;
    background: #fff;
    display: flex
}

.contact .info .item .icon {
    font-size: 30px;
    color: #999;
    padding-right: 30px
}

.contact .info .item .cont h6 {
    font-size: 20px;
    color: #b19777;
    margin-bottom: 10px
}

.contact .info .item .cont p {
    font-size: 13px
}

.contact .map-box {
    padding: 0
}

.contact .map-box .map {
    height: 100%
}

.contact .form {
    padding: 120px 5%
}

.contact .form input,
.contact .form textarea {
    padding: 15px;
    background: #f7f7f7;
    border: 0;
    width: 100%
}

.contact .form textarea {
    height: 160px
}

footer {
    background: #252531;
    width: calc(100% - 50px);
    margin-left: 25px;
    margin-bottom: 25px;
    color: #fff;
    padding: 100px 0
}

footer .item .title h5 {
    margin-bottom: 30px
}

footer .item li {
    display: flex;
    margin-bottom: 25px
}

footer .item li:last-of-type {
    margin-bottom: 0
}

footer .item li h6 {
    font-size: 14px;
    font-weight: 600
}

footer .item li .icon {
    font-size: 30px;
    margin-right: 30px
}

footer .item li .img {
    width: 150px;
    margin-right: 15px
}

footer .item li .sm-post p {
    font-size: 13px
}

footer .item li .sm-post .date {
    font-size: 12px;
    color: #b19777
}

footer .item li .subscribe {
    width: 100%;
    position: relative
}

footer .item li .subscribe input {
    width: 100%;
    padding: 15px;
    border-radius: 30px;
    border: 1px solid hsla(0, 0%, 100%, .05);
    background: transparent;
    color: #fff;
    font-size: 13px
}

footer .item li .subscribe .subs {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 50%;
    background: #b19777;
    color: #000
}

footer .item .logo {
    margin-bottom: 50px
}

footer .item .logo img {
    width: 100px
}

footer .item .social a {
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid hsla(0, 0%, 100%, .05);
    font-size: 13px;
    margin-right: 10px
}

footer .item .copy-right {
    margin-top: 30px
}

footer .item .copy-right p {
    font-size: 13px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 3px
}

footer .item .copy-right p a {
    color: #b19777
}

@media screen and (max-width:991px) {
    .md-mb10 {
        margin-bottom: 10px
    }

    .md-mb20 {
        margin-bottom: 20px
    }

    .md-mb30 {
        margin-bottom: 30px
    }

    .md-mb40 {
        margin-bottom: 40px
    }

    .md-mb50 {
        margin-bottom: 50px
    }

    .md-mb60 {
        margin-bottom: 60px
    }

    .md-mb70 {
        margin-bottom: 70px
    }

    .md-mb80 {
        margin-bottom: 80px
    }

    .md-pb10 {
        padding-bottom: 10px
    }

    .md-pb20 {
        padding-bottom: 20px
    }

    .md-pb30 {
        padding-bottom: 30px
    }

    .md-pb40 {
        padding-bottom: 40px
    }

    .md-pb50 {
        padding-bottom: 50px
    }

    .md-pb60 {
        padding-bottom: 60px
    }

    .md-pb70 {
        padding-bottom: 70px
    }

    .md-pb80 {
        padding-bottom: 80px
    }

    .order2 {
        order: 2 !important
    }

    .order1 {
        order: 1 !important
    }

    .navbar {
        min-height: 60px
    }

    .navbar .navbar-collapse {
        max-height: 340px;
        overflow: auto;
        background: #111;
        text-align: center;
        padding: 10px 15px
    }

    .navbar .nav-link {
        margin: 10px auto !important
    }

    .navbar .logo {
        margin-left: 15px;
        width: 50px
    }

    .light .navbar-collapse .nav-link,
    .nav-scroll .navbar-collapse .nav-link {
        color: #fff !important
    }

    .light .navbar-collapse .active,
    .nav-scroll .navbar-collapse .active {
        color: #b19777 !important
    }

    .light .social-icon a,
    .nav-scroll .social-icon a {
        color: #fff
    }

    .navbar .search,
    .navbar .social-icon {
        border: 0;
        padding: 0;
        margin-top: 30px
    }

    .navbar .social-icon a {
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border: 1px solid hsla(0, 0%, 100%, .3);
        border-radius: 50%
    }

    .navbar .search .search-form {
        display: block;
        position: static;
        height: auto
    }

    .navbar .search .search-form form {
        position: static;
        width: 100%;
        transform: none
    }

    .navbar .search .search-form form input {
        padding: 15px;
        width: 100%;
        font-size: 14px
    }

    .navbar .search .icon,
    .navbar .search .search-form .close {
        display: none
    }

    .navbar-nav .dropdown-menu {
        opacity: 1;
        visibility: visible;
        display: none;
        background: #222;
        text-align: center;
        color: #eee
    }

    .navbar-nav .dropdown-menu .dropdown-item {
        color: #eee
    }

    .navbar-nav .dropdown-menu.show {
        display: block
    }

    .navbar .navbar-nav .nav-link {
        padding: 0
    }

    .navbar .navbar-nav .nav-link:hover {
        color: #b19777
    }

    .slider .caption.center h1 {
        font-size: 40px
    }

    .cta__slider-item .media-wrapper .bg-img {
        width: 100%
    }

    .about .ab-exp,
    .about .exp-content,
    .about .specialty,
    .about .txt-cont,
    .numbers .item,
    .skills-sec .content,
    .team .slick-slider {
        margin-top: 50px
    }

    .services .feat-top {
        width: 100%;
        margin-top: 0;
        padding: 100px 30px 70px
    }

    .services .feat-top .item-sm {
        margin-bottom: 30px;
        background: #fff;
        padding: 30px
    }

    .portfolio.full-bg .cluom {
        border-bottom: 1px solid hsla(0, 0%, 100%, .3);
        height: 50vh
    }

    .process .coulmn:after {
        display: none
    }

    .blog-grid .item,
    .contact .info .item,
    .process .item,
    .skills-circle .skill,
    .team.tmgrid .item {
        margin-bottom: 50px
    }

    .contact .info {
        padding-bottom: 30px !important
    }

    .contact .map-box {
        height: 400px
    }

    .blog-grid,
    .process,
    .skills-circle,
    .team.tmgrid {
        padding-bottom: 70px
    }

    .team.tmgrid {
        background: #fff
    }

    .brands .box-top .item {
        margin: 20px 0
    }

    .team {
        background: #f8f4f3
    }

    .team .tit .navs span {
        background: #fff
    }

    .team .tit .navs span:hover {
        background: #b19777
    }

    .team .team-container {
        width: 100%
    }

    .about .pat {
        display: none
    }

    .cont-map {
        background: #f8f4f3
    }

    .cont-map .contact-form form {
        top: 0;
        right: 0;
        margin: 120px 0
    }

    .cont-map .contact-map {
        position: relative;
        height: 400px;
        width: 100%
    }

    .cont-map .bg-img {
        display: none
    }

    .portfolio .gallery.twsty .three-column {
        width: 50% !important
    }

    footer .item {
        margin-bottom: 30px
    }

    footer .sub-footer {
        margin-top: 20px
    }

    footer .sub-footer .text-left,
    footer .sub-footer .text-right {
        text-align: center !important
    }
}

@media screen and (max-width:767px) {
    .sm-mb10 {
        margin-bottom: 10px
    }

    .sm-mb20 {
        margin-bottom: 20px
    }

    .sm-mb30 {
        margin-bottom: 30px
    }

    .sm-mb40 {
        margin-bottom: 40px
    }

    .sm-mb50 {
        margin-bottom: 50px
    }

    .sm-mb60 {
        margin-bottom: 60px
    }

    .sm-mb70 {
        margin-bottom: 70px
    }

    .sm-mb80 {
        margin-bottom: 80px
    }

    .sm-pb10 {
        padding-bottom: 10px
    }

    .sm-pb20 {
        padding-bottom: 20px
    }

    .sm-pb30 {
        padding-bottom: 30px
    }

    .sm-pb40 {
        padding-bottom: 40px
    }

    .sm-pb50 {
        padding-bottom: 50px
    }

    .sm-pb60 {
        padding-bottom: 60px
    }

    .sm-pb70 {
        padding-bottom: 70px
    }

    .sm-pb80 {
        padding-bottom: 80px
    }

    h1 {
        font-size: 35px
    }

    h2 {
        font-size: 28px
    }

    h3 {
        font-size: 24px
    }

    h4 {
        font-size: 20px
    }

    h5 {
        font-size: 18px
    }

    h6 {
        font-size: 16px
    }

    .progress-wrap {
        right: 15px;
        bottom: 15px
    }

    .navbar .logo {
        width: 60px
    }

    .btn-curve {
        padding: 8px 15px
    }

    .btn-curve span {
        font-size: 15px;
        letter-spacing: 1px
    }

    .section-head h4 {
        font-size: 22px
    }

    .pages-header .cont h1 {
        font-size: 40px
    }

    .slider .caption.center h1 {
        font-size: 25px
    }

    .slider .caption.center h1 br {
        display: none
    }

    .slider .social-icon {
        left: 15px;
        bottom: 15px;
        display: none
    }

    .slider .swiper-pagination-fraction.top.botm {
        right: 15px;
        bottom: 15px
    }

    .slider .swiper-pagination-fraction.top span {
        font-size: 20px
    }

    .slider .swiper-pagination-fraction.top .swiper-pagination-current {
        font-size: 25px
    }

    .slider .setone.setwo .next-ctrl {
        right: auto;
        left: 70px;
        bottom: 15px;
        top: auto;
        width: 45px;
        height: 45px;
        line-height: 45px
    }

    .slider .setone.setwo .prev-ctrl {
        left: 15px;
        bottom: 15px;
        top: auto;
        width: 45px;
        height: 45px;
        line-height: 45px
    }

    .slider .parallax-slider .caption h1 {
        font-size: 35px
    }

    .slider .setone .swiper-nav-ctrl {
        width: 45px;
        height: 45px;
        line-height: 45px
    }

    .slider .setone {
        bottom: 15px;
        right: 15px
    }

    .cta__slider-item .caption h1 {
        font-size: 40px
    }

    .cta__slider-arrows {
        right: 15px;
        bottom: 15px
    }

    .slid-half .swiper-pagination-fraction.top {
        right: auto;
        top: auto;
        left: 15px;
        bottom: 15px
    }

    .about .exp-content:after {
        right: 0
    }

    .about .exp-img .img {
        width: 100%
    }

    .about .exp-content ul {
        display: block
    }

    .about .exp-content ul li {
        margin-top: 10px;
        display: inline-block
    }

    .about .ab-exp .years-exp {
        height: 300px;
        margin-top: 10px
    }

    .services .feat-top {
        padding: 80px 10px 50px
    }

    .services .item-sm .numb {
        padding-right: 30px
    }

    .services .item-sm .numb:after {
        width: 15px
    }

    .brands .box-top .row>div {
        width: 50%
    }

    .blog-grid.center .item .cont {
        padding: 30px 20px
    }

    .portfolio .gallery.twsty .items {
        width: 100%
    }

    .portfolio .filtering span {
        margin: 5px 15px;
        font-size: 12px;
        letter-spacing: 0;
        text-transform: capitalize
    }

    .portfolio.full-bg .cluom {
        height: 40vh;
        min-height: 250px
    }

    .portfolio .gallery.twsty .three-column {
        width: 100% !important
    }

    .blog-pg .posts .item .content {
        position: relative
    }

    .blog-pg .posts .item .content .col-2,
    .blog-pg .posts .item .content .col-10 {
        width: 100%;
        max-width: 100%;
        flex: 0 0 100%
    }

    .blog-pg .posts .item .content .col-2 {
        position: absolute;
        right: 0;
        top: -90px;
        z-index: 3
    }

    .blog-pg .posts .item .content .date a {
        padding: 10px;
        background: #fff;
        margin: 0
    }

    .blog-pg .posts .item .content .date .num {
        font-size: 25px;
        margin: 0
    }

    .blog-pg.single .comments-area .item.relped {
        margin-left: 0
    }

    .blog-pg.single .comments-area .item .info h6 span {
        display: block;
        margin: 10px 0 0
    }
}

@media screen and (max-width:480px) {
    .pages-header .cont .path {
        font-size: 15px
    }

    .pages-header .cont .path span {
        margin: 0 10px
    }

    .blog-pg.single .post .title-head a {
        letter-spacing: 0;
        margin: 0 7px
    }

    .blog-pg .posts .item .img .info {
        padding: 10px
    }

    .blog-pg .posts .item .img .info .date .num {
        font-size: 20px
    }

    .blog-pg.single .post .content .share-info {
        display: block
    }

    .blog-pg.single .post .content .share-info .social,
    .blog-pg.single .post .content .share-info .tags {
        display: block;
        width: 100%;
        text-align: center
    }

    .blog-pg.single .post .content .share-info .tags {
        margin-top: 20px
    }

    .blog-pg.single .post .author {
        padding: 30px 15px
    }

    .blog-pg.single .post .author .author-img {
        display: block;
        width: 120px;
        margin: 0 auto 30px
    }

    .blog-pg.single .post .author .info {
        display: block;
        padding: 0;
        text-align: center
    }

    .blog-pg.single .comments-area .item .comment-img {
        display: block;
        margin: 0 auto 30px;
        width: 60px
    }

    .blog-pg.single .comments-area .item .info {
        display: block;
        padding: 0;
        text-align: center
    }

    .blog-pg.single .comments-area .item.relped {
        margin-left: 0
    }

    .blog-pg.single .comments-area .item .info h6 {
        font-size: 14px;
        letter-spacing: 1px
    }

    .blog-pg.single .comments-area .item .info .replay {
        top: -25px
    }
}

svg.CircularProgressbar {
    width: 110px;
    height: 110px
}

.nav-link,
.works.filter-img .filtering .filter span,
a {
    cursor: pointer
}

.slick-next,
.slick-prev {
    display: none !important
}

.testimonials.grid .testim .slick-track .slick-active>div {
    position: relative;
    margin: 0 20px
}

.testimonials.grid .testim .slick-track .item {
    margin: 0
}

#before-after-slider {
    width: 100%;
    position: relative;
    overflow: hidden
}

#before-after-slider img {
    all: unset;
    width: 100%
}

#after-image {
    display: block
}

.path a {
    text-transform: capitalize
}

#before-image {
    position: absolute;
    height: 100%;
    width: 50%;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 2
}

.contact .form input,
.contact .form textarea {
    color: #fff
}

.twentytwenty-handle:after,
.twentytwenty-handle:before {
    content: " ";
    display: block;
    background: #fff;
    position: absolute;
    z-index: 30;
    box-shadow: 0 0 12px rgba(51, 51, 51, .5);
    width: 3px;
    height: 9999px;
    left: 50%
}

.twentytwenty-left-arrow,
.twentytwenty-right-arrow {
    width: 0;
    height: 0;
    border: 6px inset transparent;
    position: absolute;
    top: 50%;
    margin-top: -6px
}

.twentytwenty-handle:after {
    bottom: 100%
}

.twentytwenty-handle {
    height: 38px;
    width: 38px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -22px;
    margin-top: -22px;
    border: 3px solid #fff;
    border-radius: 1000px;
    box-shadow: 0 0 12px rgba(51, 51, 51, .5);
    z-index: 40;
    cursor: pointer
}

.twentytwenty-left-arrow {
    border-right: 6px solid #fff;
    left: 50%;
    margin-left: -17px
}

.twentytwenty-right-arrow {
    border-left: 6px solid #fff;
    right: 50%;
    margin-right: -17px
}

#before-after-slider .overlay {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 11;
    opacity: 0;
    transition: opacity .3s linear
}

#before-after-slider:hover .overlay {
    opacity: 1
}

.twentytwenty-after-label,
.twentytwenty-before-label {
    opacity: 0
}

.twentytwenty-after-label:before,
.twentytwenty-before-label:before {
    content: attr(data-content)
}

.justified-gallery img {
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    min-height: 335px
}

.twentytwenty-before-label:before {
    left: 10px
}

.twentytwenty-after-label:before {
    right: 10px
}

a.col-lg-4.col-xl-3.col-md-6 {
    padding-left: 5px;
    padding-right: 5px;
    margin-bottom: 10px
}

.twentytwenty-after-label,
.twentytwenty-before-label {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    transition: opacity .3s linear
}

a.col-lg-4.col-xl-3.col-md-12 {
    margin-bottom: 10px
}

.twentytwenty-after-label:before,
.twentytwenty-before-label:before {
    position: absolute;
    background: hsla(0, 0%, 100%, .2);
    line-height: 38px;
    padding: 0 20px;
    border-radius: 2px;
    color: #fff;
    font-size: 13px;
    letter-spacing: .1em;
    z-index: 100;
    top: 50%;
    margin-top: -19px
}

.justified-gallery {
    margin: 10px 0
}

.pages-header .cont h1 {
    text-transform: capitalize
}

.slick-dots li button {
    display: block !important;
    opacity: 0;
    width: 0;
    height: 0
}

.testimonials2 .slick-list {
    margin: 0 !important
}

.slid-half .nofull:after {
    z-index: 1
}

.team {
    overflow: hidden
}

.cta__slider-arrows,
.slid-half .swiper-pagination-fraction.top,
.swiper-pointer-events.swiper-vertical {
    z-index: 55
}

.testimonials2 .slick-slide>div {
    padding: 0 10px !important
}

@media (max-width:991px) {
    .navbar .navbar-collapse {
        display: block;
        opacity: 0;
        padding: 0;
        height: 0;
        transition: all .3s linear
    }

    .navbar .navbar-collapse.show-with-trans {
        opacity: 1;
        padding: 10px 15px;
        height: auto
    }
}

.hideX #preloader {
    z-index: -1111111;
    height: 0;
    width: 0;
    overflow: hidden
}

.hideX #preloader,
.hideX .pace {
    display: none !important
}

.pace-done #preloader:after {
    bottom: 0
}

.pace-done #preloader {
    visibility: hidden;
    transition-delay: .5s
}

.pace-done #preloader:after,
.pace-done #preloader:before {
    height: 0;
    transition: all .7s cubic-bezier(1, 0, .55, 1);
    transition-delay: 1s
}

body.hideX #preloader {
    display: none !important;
    z-index: -1111111;
    height: 0;
    width: 0;
    overflow: hidden
}

body.hideX .pace {
    display: none !important;
    background-color: transparent
}

.contact-map iframe,
.map-box iframe {
    width: 100%;
    height: 100%;
    border: 0
}
</style>