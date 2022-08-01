<template>
  <div style="margin: 0px">
    <!-- <div
      class="parallax-mirror"
      style="
        visibility: hidden;
        z-index: -100;
        position: fixed;
        top: 2042px;
        left: 0px;
        overflow: hidden;
        transform: translate3d(0px, 0px, 0px);
        height: 372px;
        width: 1294px;
      "
    >
      <img
        class="parallax-slider"
        src="images/fun-facts-bg.jpg"
        style="
          transform: translate3d(0px, 0px, 0px);
          position: absolute;
          top: -612.6px;
          left: -751px;
          height: 564px;
          width: 2796px;
          max-width: none;
        "
      />
    </div> -->

    <!--.preloader-->

    <!--/.preloader-->

    <!-- // header Start // -->

    <header class="header">
      <!--// navbar //-->

      <div class="navbar navbar-static-top">
        <div class="container">
          <!-- Logo -->
          <h1>
            <a href="template-1.html" title="Flexis">
              <img src="images/logo.png" alt="" title="Flexis" class="logo" />
              <img
                src="images/logo-hover.png"
                alt=""
                title="Flexis"
                class="logo_hove"
              />
            </a>
          </h1>

          <!-- Logo -->

          <!-- nav -->

          <nav class="col-md-10 col-sm-10 nav navy">
            <div id="menu-button">
              <span></span><span></span><span></span>Navigation
            </div>
            <ul>
              <li><a href="template-1.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="works.html">Works</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li class="has-sub">
                <span class="submenu-button"></span><a href="#">Extras</a>
                <ul>
                  <li><a href="comingsoon.html">Coming Soon Page</a></li>
                  <li><a href="404.html">404 Page</a></li>
                </ul>
              </li>
            </ul>
          </nav>

          <!-- nav -->
        </div>
      </div>

      <!--// navbar //-->

      <!-- // banner Slider //-->

      <div class="header_v1 bg-dark">
        <div
          class="banner"
          id="banner"
          style="
            position: relative;
            overflow: hidden;
            width: 100%;
            height: 1013px;
          "
        >
          <div>
            <h2>Flexis</h2>
            <p>Design Studio from Paris</p>
          </div>
        </div>
      </div>

      <!-- // banner Slider //-->
    </header>

    <!-- // header End // -->

    <!--// About us //-->

    <div class="about_pan_home">
      <div class="container">
        <p>
          We are a creative agency dedicated to new media. By constantly pushing
          <br />
          boundaries we create memorable designs that elevate your brand and
          <br />
          the ultimate elegeble enlighten your partners.
        </p>
        <a href="about.html">About us</a>
      </div>
    </div>

    <!--// About us //-->


    <!--//  Service Details + Area of Exper/tise //-->

    <div class="container services-area-home">
      <div class="row">
        <!-- Service Details -->

        <div class="col-md-8 col-sm-12 service_details">
          <p>
            Suspendisse lobortis cursus blandit. Donec posuere quis dui eu
            pharetra. Nam non elit quis lorem eleifend pulvinar vitae ac dolor.
            Phasellus porttitor luctus odio, ac congue orci luctus id. Duis nibh
            est, imperdiet sit amet fermentum eu, tempor sedurnat placerat nisl
            quam et leo.
          </p>
          <p>
            Duis facilisis, ante ac imperdiet hendrerit, metus nisi eleifend
            nulla, et pretium nisl quam et leo. In sem ligula, molestie ac
            interdum id, tempor at lorem. Pellentesque neque orci, luctus at
            fermentum non.
          </p>
          <a href="servicesq.html" class="button-service">Service Details</a>
        </div>

        <!-- Service Details -->

        <!-- Area of Exper/tise -->

        <div class="col-md-4 col-sm-12">
          <aside>
            <h6>Area of Expertise</h6>
            <ul>
              <li>Digital Strategy</li>
              <li>Websites</li>
              <li>Videography</li>
              <li>Usability</li>
              <li>Social Media</li>
              <li>User Experience</li>
              <li>Logo &amp; Identity</li>
              <li>Photography</li>
              <li>Digital marketing</li>
              <li>Promotion material</li>
            </ul>
          </aside>
        </div>

        <!-- Area of Exper/tise -->
      </div>
    </div>

    <!--//  Service Details + Area of Expertise //-->


    <!--// Fun-facts //-->

    <div class="fun-facts bg-dark">
      <!-- data-parallax="scroll"
      data-bleed="10"
      data-speed="0.7"
      data-image-src="images/fun-facts-bg.jpg" -->
      <div class="container">
        <div class="row">
          <section class="col-md-4">
            <h3
              class="timer"
              data-from="100"
              data-to="23250"
              data-speed="10000"
            >
              23250
            </h3>
            <span>Amazing Projects Served So Far</span>
          </section>
          <section class="col-md-5 happy-us">
            <h3 class="timer" data-from="100" data-to="1438" data-speed="10000">
              1438
            </h3>
            <span>Happy Clients love us</span>
          </section>
          <section class="col-md-3">
            <h3 class="timer" data-from="100" data-to="438" data-speed="10000">
              438
            </h3>
            <span>Achived Design awards</span>
          </section>
        </div>
      </div>
    </div>

    <!--// Fun-facts //-->

    <!-- // Latest Project //-->

    <div class="latest-projects-pan">
      <div class="container latest-projects-top">
        <div class="row">
          <header class="col-md-4">
            <h3>Latest Project</h3>
            <h6>we have worked</h6>
          </header>

          <!-- projects cat -->

          <div class="col-md-8">
            <ul>
              <li class="filter" data-filter="category_1">UX design</li>
              <li class="filter" data-filter="category_2">Digital Art</li>
              <li class="filter" data-filter="category_3">Photography</li>
              <li class="filter" data-filter="category_3 category_1">
                Branding
              </li>
            </ul>
          </div>

          <!-- projects cat -->
        </div>
      </div>

      <!-- projects-images -->

      <div class="projects-images container-fluid">
        <div class="row no-gutter">
          <ul id="Grid">
            <li
              class="
                mix
                category_1
                col-lg-2 col-md-2 col-sm-4
                work
                animated
                fadeIn
                mix_all
              "
              data-cat="1"
              style="display: inline-block; opacity: 1"
            >
              <a href="images/projects/project-1.jpg">
                <figure>
                  <img src="images/projects/project-1.jpg" alt="" />
                </figure>
                <div class="figcaption">
                  <section>
                    <h5>Project Name</h5>
                    <p>Website Design</p>
                  </section>
                </div>
              </a>
            </li>
            <li
              class="
                mix
                category_3
                col-lg-2 col-md-2 col-sm-4
                work
                animated
                fadeIn
                mix_all
              "
              data-cat="3"
              style="display: inline-block; opacity: 1"
            >
              <a href="images/projects/project-2.jpg">
                <figure>
                  <img src="images/projects/project-2.jpg" alt="" />
                </figure>
                <div class="figcaption">
                  <section>
                    <h5>Project Name</h5>
                    <p>Website Design</p>
                  </section>
                </div>
              </a>
            </li>
            <li
              class="
                mix
                category_2
                col-lg-2 col-md-2 col-sm-4
                work
                animated
                fadeIn
                mix_all
              "
              data-cat="2"
              style="display: inline-block; opacity: 1"
            >
              <a href="images/projects/project-3.jpg">
                <figure>
                  <img src="images/projects/project-3.jpg" alt="" />
                </figure>
                <div class="figcaption">
                  <section>
                    <h5>Project Name</h5>
                    <p>Website Design</p>
                  </section>
                </div>
              </a>
            </li>
            <li
              class="
                mix
                category_3
                col-lg-2 col-md-2 col-sm-4
                work
                animated
                fadeIn
                mix_all
              "
              data-cat="3"
              style="display: inline-block; opacity: 1"
            >
              <a href="images/projects/project-4.jpg">
                <figure>
                  <img src="images/projects/project-4.jpg" alt="" />
                </figure>
                <div class="figcaption">
                  <section>
                    <h5>Project Name</h5>
                    <p>Website Design</p>
                  </section>
                </div>
              </a>
            </li>
            <li
              class="
                mix
                category_2
                col-lg-2 col-md-2 col-sm-4
                work
                animated
                fadeIn
                mix_all
              "
              data-cat="2"
              style="display: inline-block; opacity: 1"
            >
              <a href="images/projects/project-5.jpg">
                <figure>
                  <img src="images/projects/project-5.jpg" alt="" />
                </figure>
                <div class="figcaption">
                  <section>
                    <h5>Project Name</h5>
                    <p>Website Design</p>
                  </section>
                </div>
              </a>
            </li>
            <li
              class="
                mix
                category_1
                col-lg-2 col-md-2 col-sm-4
                work
                animated
                fadeIn
                mix_all
              "
              data-cat="1"
              style="display: inline-block; opacity: 1"
            >
              <a href="images/projects/project-6.jpg">
                <figure>
                  <img src="images/projects/project-6.jpg" alt="" />
                </figure>
                <div class="figcaption">
                  <section>
                    <h5>Project Name</h5>
                    <p>Website Design</p>
                  </section>
                </div>
              </a>
            </li>
            <li class="gap"></li>
          </ul>
        </div>
      </div>

      <!-- projects-images -->

      <a href="works.html" class="view_button">View full Portfolio</a>
    </div>

    <!-- // Latest Project //-->

    <!-- // testimonial //-->

    <div class="testimonial_pan text-center">
      <div class="slider-item">
        <article class="item">
          <p>
            Duis facilisis, ante ac imperdiet hendrerit, metus nisi eleifend
            nulla, et pretium nisl quam et leo<br />
            In sem ligula, molestie ac interdum identum non, ornare in nulla.
          </p>
          <h6>Jessie Pinkman | MDM Inc.</h6>
        </article>
      </div>
      <div class="slider-item">
        <article class="item">
          <p>
            Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
            Cras dictum tellus dui,<br />vitae sollicitudin ipsum tincidunt in.
          </p>
          <h6>Johnathan doe | Matrix media ltd</h6>
        </article>
      </div>
      <div class="slider-item">
        <article class="item">
          <p>
            Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
            tincidunt tristique enim sed sollcitudin.<br />Phasellus non dolor
            nibh. Nullam elementum tellus pretium feugiat.
          </p>
          <h6>Johnathan | Lexind media ltd</h6>
        </article>
      </div>
    </div>

    <!-- // testimonial //-->

    <!-- // Logoes Slider //-->

    <div class="container-fluid logoes-pan text-center bg-dark">
      <ul
        id="logoes"
        class="owl-carousel owl-theme"
        style="opacity: 1; display: block"
      >
        <div class="owl-wrapper-outer">
          <div class="owl-wrapper" style="">
            <div class="owl-item">
              <li class="item"><img src="http://themeelite.com/demos/flexis/corporate-version/images/logos/logo-1.png" alt="" /></li>
            </div>
            <div class="owl-item">
              <li class="item"><img src="http://themeelite.com/demos/flexis/corporate-version/images/logos/logo-2.png" alt="" /></li>
            </div>
            <div class="owl-item">
              <li class="item"><img src="http://themeelite.com/demos/flexis/corporate-version/images/logos/logo-3.png" alt="" /></li>
            </div>
            <div class="owl-item">
              <li class="item"><img src="http://themeelite.com/demos/flexis/corporate-version/images/logos/logo-4.png" alt="" /></li>
            </div>
            <div class="owl-item">
              <li class="item"><img src="http://themeelite.com/demos/flexis/corporate-version/images/logos/logo-1.png" alt="" /></li>
            </div>
            <div class="owl-item">
              <li class="item"><img src="http://themeelite.com/demos/flexis/corporate-version/images/logos/logo-3.png" alt="" /></li>
            </div>
            <div class="owl-item">
              <li class="item"><img src="http://themeelite.com/demos/flexis/corporate-version/images/logos/logo-1.png" alt="" /></li>
            </div>
            <div class="owl-item">
              <li class="item"><img src="http://themeelite.com/demos/flexis/corporate-version/images/logos/logo-1.png" alt="" /></li>
            </div>
          </div>
        </div>

        <div class="owl-controls clickable">
          <div class="owl-buttons">
            <div class="owl-prev">prev</div>
            <div class="owl-next">next</div>
          </div>
        </div>
      </ul>
    </div>

    <!-- // Logoes Slider //-->

    <!-- Let's start a project  -->

    <div class="letsproject-pan">
      <a href="works.html">Let's start a project </a>
    </div>

    <!-- Let's start a project  -->

    <!--// footer //-->

    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-5 col-sm-6">
            <address>
              <figure>
                <img src="images/foote-logo.png" alt="" title="flexis" />
              </figure>
              Collins Street West Victoria 8007 Australia.<br />
              1800 1234 56789 / 98532100987
              <a href="mailto:support@websitename.com"
                >support@websitename.com</a
              >
            </address>
          </div>
          <div class="col-md-2 col-sm-3">
            <ul>
              <li><a href="about.html" title="About us">About us</a></li>
              <li><a href="services.html" title="Services">Services</a></li>
              <li><a href="works.html" title="Works">Works</a></li>
              <li><a href="blog.html" title="Blog">Blog</a></li>
              <li><a href="contact.html" title="Contact">Contact</a></li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-3">
            <ul class="socil-icon-one">
              <li><a href="#" title="Facebook">Facebook</a></li>
              <li><a href="#" title="Behance">Behance</a></li>
              <li><a href="#" title="Instagram">Instagram</a></li>
              <li><a href="#" title="LinkedIn">LinkedIn</a></li>
            </ul>
          </div>
          <div class="col-md-2 col-sm-3">
            <ul class="socil-icon-two">
              <li><a href="#" title="Twitter">Twitter</a></li>
              <li><a href="#" title="Dribble">Dribble</a></li>
              <li><a href="#" title="Devianarts">Devianarts</a></li>
            </ul>
          </div>
          <div class="clearfix"></div>
          <p>© 2016 flexis.com. All Rights Reserved.</p>
        </div>
      </div>
    </footer>

    <!--// footer //-->

    <!-- Javascript File  -->

    <!--   <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script
      type="text/javascript"
      src="js/jquery-migrate-1.2.1.min.js"
    ></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script> -->

    <!--for header jquery-->
    <!-- 
    <script
      src="js/jquery.superslides.js"
      type="text/javascript"
      charset="utf-8"
    ></script>
    <script type="text/javascript" src="js/nav.js"></script>
    <script type="text/javascript" src="js/tinydropdown.js"></script>
    <script type="text/javascript">
      var dropdown = new TINY.dropdown.init("dropdown", {
        id: "menu",
        active: "menuhover",
      });
    </script> -->

    <!--for header jquery-->
    <!-- 
    <script type="text/javascript" src="js/jquery.imageScroll.min.js"></script>
    <script type="text/javascript" src="js/countto.js"></script>
    <script type="text/javascript" src="js/jquery.mixitup.min.js"></script>
    <script type="text/javascript" src="js/jquery.fancybox.pack.js"></script>
    <script type="text/javascript" src="js/owl.carousel.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
    <script type="text/javascript" src="js/html5shiv.js"></script>
    <script type="text/javascript" src="js/back-to-top.js"></script> -->

    <!--Theme switcher -->

    <!-- <script type="text/javascript" src="switcher/js/jquery.cookie.js"></script>
    <script type="text/javascript" src="switcher/js/styleswitch.js"></script> -->
    <div class="switcher" style="left: -255px">
      <h2>
        Style Switcher <a href="#"><i class="fa fa-cog fa-spin"></i></a>
      </h2>
      <div class="content">
        <h3>Layout Style</h3>
        <div class="layout-switcher">
          <a id="boxed" href="template-1.html" class="layout"
            >Header Text &amp; Image Slider</a
          >
          <a id="boxed" href="template-2.html" class="layout"
            >Header Image Slider</a
          >
          <a id="boxed" href="template-3.html" class="layout"
            >Header Text Slider</a
          >
          <a id="boxed" href="template-4.html" class="layout">Header Static</a>
          <a id="boxed" href="template-5.html" class="layout">Header Video</a>
        </div>
        <div class="clear"></div>
        <div class="switcher-box">
          <h3>Change Color</h3>
          <a id="default" class="styleswitch color"></a>
          <a id="yellow" class="styleswitch color"></a>
          <a id="blue" class="styleswitch color"></a>
          <a id="red" class="styleswitch color"></a>
          <a id="green" class="styleswitch color"></a>
          <a id="orange" class="styleswitch color"></a>
          <a id="moff" class="styleswitch color"></a>
          <a id="grey" class="styleswitch color"></a>
        </div>
        <!-- End switcher-box -->
        <div class="clear"></div>
      </div>
      <!-- End content -->
    </div>

    <div
      id="topcontrol"
      title="Scroll Back to Top"
      style="
        position: fixed;
        bottom: 5px;
        right: 5px;
        opacity: 0;
        cursor: pointer;
      "
    ></div>
  </div>
</template>

<style>
/*



  Theme Name: Flexis



  	Template URI: http://www.themeelite.com/



	Description: Full Screen Design Agency Template



	Author: Themeelite



	Author URI: http://www.themeelite.com



	License: GNU General Public License version 3.0



	License URI: http://www.gnu.org/licenses/gpl-3.0.html



	Version: 1.0



  



  1. Body style



	2. Headings



	3. Header



		3.1 Menu Style



	4. About Home page



	5. Service Details + Area of Exper/tise Home page



	6. Fun-Facts



	7. Latest Project



	8. Testimonial



	9. Logoes Silde



	10. Let's start a project



	11. Footer



	12. Header Inner Banner



	13. About Pan 



	14. The History



	15. The Team



	16. Our expertise



	17. Works



	18. Services



	19. Blog



	20. Contact



	21. 404 Page



	22. Commingsoon Page



*/

@import url(https://fonts.googleapis.com/css?family=Source+Code+Pro:400,200,300,500,600,700,900);
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,200,200italic,300italic,300,400italic,600,600italic,700,700italic,900,900italic);
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic);
/* ===========================



   ======= 1. Body style ======== 



   =========================== */

* {
  padding: 0;
  margin: 0;
}
body {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 14px;
  line-height: 18px;
  color: #4e4a4f;
  background-color: #fff;
  font-weight: 400;
}
a:focus,
img:focus,
button:focus,
.btn:focus {
  outline: none;
}
a {
  text-decoration: none;
  outline: none;
  color: #010101;
  transition-delay: 0s;
  transition-duration: 0.6s;
  transition-property: all;
  transition-timing-function: ease;
}
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
input,
textarea {
  -webkit-appearance: none;
  -webkit-border-radius: 0;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
img {
  display: block;
  border: none;
  max-width: 100%;
  height: auto;
  font-size: 0;
  line-height: 0;
  padding: 0;
  margin: 0;
}
button, html input[type="button"],/* 1 */ input[type="reset"], input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
  *overflow: visible;
}
body,
img {
  transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  -moz-transition: all 0.2s linear;
  -webkit-transition: all 0.2s linear;
}
td {
  text-align: left;
  vertical-align: top;
}
html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video,
input,
main {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  border: 0;
  outline: 0;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
img,
main {
  display: block;
}
audio,
canvas,
video {
  display: inline-block;
  *display: inline;
  *zoom: 1;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
.clear {
  clear: both;
  line-height: 0;
  height: 0;
}

::-moz-selection {
  background: #4d4d4d;
  color: #fff;
  text-shadow: none;
}

::selection {
  background: #4d4d4d;
  color: #fff;
  text-shadow: none;
}
@font-face {
  font-family: "Source Code Pro";
  font-family: "Source Sans Pro", sans-serif;
  font-family: "Open Sans", sans-serif;
}
/* ===========================



   ========= 2. Headings ======== 



   =========================== */

h1 {
  font-family: "Source Code Pro";
  font-size: 30px;
  line-height: 32px;
  font-weight: 400;
}
h2 {
  font-family: "Source Code Pro";
  font-size: 30px;
  line-height: 33px;
  font-weight: 400;
}
h3 {
  font-family: "Source Code Pro";
  font-size: 24px;
  line-height: 26px;
  font-weight: 400;
}
h4 {
  font-family: "Source Code Pro";
  font-size: 18px;
  line-height: 19px;
  font-weight: 400;
}
h5 {
  font-family: "Source Code Pro";
  font-size: 16px;
  line-height: 18px;
  font-weight: 400;
}
h6 {
  font-family: "Source Code Pro";
  font-size: 15px;
  line-height: 18px;
  font-weight: 400;
}
/* ===========================



========= 3. Header ======== 



=========================== */

.header {
  position: relative;
  width: 100%;
}
.header .header_v1 figure {
  text-align: center;
}
.header .header_v1 figure figcaption {
  text-transform: uppercase;
  position: relative;
  z-index: 60;
  padding-top: 20%;
}
.header .header_v1 figure figcaption h2 {
  color: #fff;
  font-weight: 700;
  font-size: 53px;
  line-height: 54px;
  letter-spacing: 22px;
}
.header .header_v1 figure figcaption p {
  font-size: 12px;
  line-height: 14px;
  color: #8d8d8d;
  letter-spacing: 3px;
  padding-top: 12px;
}
.header .header_v1 .bg_overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
}
.header .static-header figure figcaption {
  text-transform: uppercase;
  position: absolute;
  z-index: 60;
  left: 0;
  right: 0;
  text-align: center;
  margin-top: 250px;
  top: 0;
  padding: 0;
}
.header .header_v1 figure.video-header {
  position: relative;
}
.header .header_v1 figure.video-header .figcaption {
  left: 0;
  padding-top: 13%;
  position: absolute;
  right: 0;
  top: 0;
  text-transform: uppercase;
  z-index: 60;
}
.header .header_v1 figure.video-header .figcaption h2 {
  color: #fff;
  font-weight: 700;
  font-size: 53px;
  line-height: 54px;
  letter-spacing: 22px;
}
.header .header_v1 figure.video-header .figcaption p {
  font-size: 12px;
  line-height: 14px;
  color: #8d8d8d;
  letter-spacing: 3px;
  padding-top: 12px;
}
#home-image img {
  height: 600px !important;
  width: 100% !important;
}
.video-section .pattern-overlay {
  background-color: rgba(71, 71, 71, 0.59);
  padding: 110px 0 32px;
  min-height: 650px;
}
.video-section .buttonBar {
  display: none;
}
.player {
  font-size: 1px;
}
/* ===========================



 =========  3.1 Menu Style ======== 



 =========================== */

.header .navbar {
  position: absolute;
  left: 0;
  right: 0;
  transition-delay: 0s;
  transition-duration: 0.6s;
  transition-property: all;
  transition-timing-function: ease;
}
.header .navbar.stuck {
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  right: 0;
  padding-top: 0;
  background-color: #fff;
  min-height: 79px;
}
.header h1 {
  float: left;
  margin-top: 44px;
  transition-delay: 0s;
  transition-duration: 0.6s;
  transition-property: all;
  transition-timing-function: ease;
}
.header h1 img {
  transition-delay: 0s;
  transition-duration: 0.6s;
  transition-property: all;
  transition-timing-function: ease;
}
.header h1 .logo_hove {
  display: none;
}
.header .navbar.stuck h1 .logo {
  display: none;
}
.header .navbar.stuck h1 {
  margin-top: 20px;
}
.header .navbar.stuck h1 .logo_hove {
  display: block;
}
.header nav {
  float: right;
  position: relative;
}
.header nav #menu-button {
  width: 28px;
  font-size: 0;
  float: right;
  height: 18px;
  position: relative;
  margin-top: 51px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}
.header .navbar.stuck nav #menu-button {
  margin-top: 30px;
}
.header nav #menu-button span {
  display: block;
  position: absolute;
  z-index: 60;
  height: 3px;
  width: 100%;
  background: #fff;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}
.header .navbar.stuck nav #menu-button span {
  background: #010101;
}
.header nav #menu-button span:nth-child(1) {
  top: 0px;
}
.header nav #menu-button span:nth-child(2) {
  top: 7px;
}
.header nav #menu-button span:nth-child(3) {
  top: 14px;
}
.header nav #menu-button.open span:nth-child(1) {
  top: 10px;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}
.header nav #menu-button.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
}
.header nav #menu-button.open span:nth-child(3) {
  top: 10px;
  -webkit-transform: rotate(-135deg);
  -moz-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
}
.header nav ul {
  display: none;
  position: absolute;
  right: 24.5%;
  top: 0;
  margin-top: 20px;
  transition-delay: 0s;
  transition-duration: 0.6s;
  transition-property: all;
  transition-timing-function: ease;
}
.header .navbar.stuck nav ul {
  margin-top: 0;
}
.header nav ul > li {
  display: inline-block;
  text-transform: uppercase;
  font-size: 15px;
  padding-left: 35px;
  font-weight: 600;
  letter-spacing: 2px;
  position: relative;
}
.header nav ul > li > a {
  color: #fff;
  line-height: 79px;
  display: block;
}
.header .navbar.stuck nav ul > li > a {
  color: #010101;
}
<!-- .header nav ul > li:hover ul {
  display: block;
}
-- > .header nav ul > li ul {
  position: absolute;
  right: 0;
  top: 45px;
  border: 2px solid #4d4d4d;
  width: 203px;
  padding-left: 24px;
  padding-right: 26px;
  padding-top: 26px;
  padding-bottom: 6px;
  display: none;
}
.header .navbar.stuck nav ul li ul {
  border-color: #fff;
  top: 77px;
}
.header .navbar.stuck nav ul li ul li a {
  color: #fff;
}
.header nav ul > li ul li {
  padding-left: 0;
  font-size: 13px;
}
.header nav ul > li ul li a {
  line-height: 14px;
  padding-bottom: 24px;
}
.header .angle-down {
  position: absolute;
  background-image: url(../images/down_arrow.png);
  background-repeat: no-repeat;
  background-position: 0 0;
  width: 13px;
  height: 103px;
  left: 50%;
  bottom: 50px;
  display: inline-block;
  margin-left: -12px;
  z-index: 999;
  -webkit-animation: bounce 2000ms infinite;
  -moz-animation: bounce 2000ms infinite;
  -o-animation: bounce 2000ms infinite;
  -ms-animation: bounce 2000ms infinite;
  animation: bounce 2000ms infinite;
}
/* ===========================



========= 4. About Home page ======== 



=========================== */

.about_pan_home {
  background-color: #f0f0f0;
  text-align: center;
  padding-top: 106px;
  padding-bottom: 120px;
}
.about_pan_home p {
  font-weight: 300;
  font-size: 21px;
  line-height: 39px;
  color: #130e14;
  letter-spacing: 3px;
}
.about_pan_home a {
  font-size: 12px;
  line-height: 49px;
  display: inline-block;
  text-transform: uppercase;
  color: #fff;
  width: 178px;
  letter-spacing: 6px;
  background-color: #000;
  margin-top: 47px;
}
.about_pan_home a:hover {
  background-color: #777777;
}
/* ===========================



========= 5. Service Details + Area of Exper/tise Home page ======== 



=========================== */

.services-area-home {
  padding-top: 105px;
  padding-bottom: 116px;
}
.service_details p {
  font-weight: 300;
  font-size: 21px;
  line-height: 37px;
  padding-bottom: 41px;
  color: #555;
  letter-spacing: 3px;
}
.service_details p + p {
  font-size: 16px;
  line-height: 23px;
  padding-bottom: 35px;
  letter-spacing: 1px;
  font-weight: 400;
}
.service_details .button-service {
  display: inline-block;
  font-size: 12px;
  line-height: 49px;
  display: inline-block;
  text-transform: uppercase;
  color: #fff;
  width: 226px;
  letter-spacing: 6px;
  background-color: #000;
  text-align: center;
}
.services-area-home aside {
  padding-left: 56px;
}
.services-area-home aside h6 {
  font-size: 13px;
  line-height: 15px;
  text-transform: uppercase;
  font-weight: 900;
  color: #000;
  letter-spacing: 6px;
}
.services-area-home aside ul {
  padding: 0;
  margin: 0;
  list-style: none;
  margin-top: 33px;
}
.services-area-home aside ul li {
  font-size: 16px;
  line-height: 16px;
  font-weight: 300;
  color: #555;
  padding-left: 21px;
  position: relative;
  margin-bottom: 14px;
  letter-spacing: 1px;
}
.services-area-home aside ul li:before {
  content: "";
  background-color: #130e14;
  display: inline-block;
  width: 5px;
  height: 1px;
  position: absolute;
  left: 0;
  top: 8px;
}
/* ===========================



========= 6. Fun-Facts ======== 



=========================== */

.fun-facts {
  padding-top: 113px;
  padding-bottom: 146px;
}
.fun-facts .happy-us {
  padding-left: 55px;
}
.fun-facts h3 {
  font-size: 63px;
  line-height: 64px;
  font-weight: 900;
  color: #fff;
  display: block;
  padding-bottom: 13px;
}
.fun-facts span {
  font-family: "Source Code Pro";
  display: block;
  text-transform: uppercase;
  color: #fff;
  font-size: 15px;
  line-height: 16px;
  font-weight: 300;
}
/* ===========================



========= 7. Latest Project ======== 



=========================== */

.latest-projects-pan {
  padding-top: 122px;
}
.latest-projects-top header h3 {
  font-size: 27px;
  line-height: 28px;
  text-transform: uppercase;
  color: #130e14;
  font-weight: 700;
  font-family: "Source Sans Pro", sans-serif;
  padding-bottom: 6px;
}
.latest-projects-top header h6 {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 13px;
  line-height: 14px;
  text-transform: uppercase;
  color: #232024;
  letter-spacing: 5px;
}
.latest-projects-top ul {
  text-align: right;
  padding-top: 15px;
}
.latest-projects-top ul > li {
  display: inline-block;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  color: #000;
  letter-spacing: 4px;
  background-image: url(../images/devider.jpg);
  background-position: 0 4px;
  background-repeat: no-repeat;
  padding-left: 18px;
  padding-right: 18px;
}
.latest-projects-top ul > li:last-child {
  padding-right: 0;
}
.latest-projects-top ul > li:first-child {
  padding-left: 0;
  background-image: none;
}
.latest-projects-top ul > li.active {
  color: #89878a;
}
.projects-images {
  padding-top: 59px;
}
.projects-images ul {
  text-align: center;
}
#Grid .mix {
  display: none;
  opacity: 0;
}
.no-gutter [class*="col-"] {
  padding-right: 0;
  padding-left: 0;
}
.projects-images ul li {
  -moz-box-shadow: 0 0 0 1px #fff;
  -webkit-box-shadow: 0 0 0 1px #fff;
  box-shadow: 0 0 0 1px #fff;
  overflow: hidden;
  position: relative;
}
.projects-images ul li a {
  overflow: hidden;
}
.projects-images ul li .figcaption {
  background: rgba(255, 244, 69, 0.7);
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
  -moz-transition: opacity, 0.3s;
  -o-transition: opacity, 0.3s;
  -webkit-transition: opacity, 0.3s;
  transition: opacity, 0.3s;
}
.projects-images ul li section {
  position: absolute;
  text-align: center;
  top: 50%;
  width: 100%;
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.projects-images ul li h5,
.projects-images ul li p,
.projects-images ul li img {
  -moz-transition: all, 0.5s;
  -o-transition: all, 0.5s;
  -webkit-transition: all, 0.5s;
  transition: all, 0.5s;
}
.projects-images ul li h5,
.projects-images ul li p {
  color: #181818;
  margin: 0;
  opacity: 0;
}
.projects-images ul li h5 {
  margin-bottom: 5px;
  -moz-transform: translate3d(0, -200%, 0);
  -ms-transform: translate3d(0, -200%, 0);
  -webkit-transform: translate3d(0, -200%, 0);
  transform: translate3d(0, -200%, 0);
}
.projects-images ul li p {
  -moz-transform: translate3d(0, 200%, 0);
  -ms-transform: translate3d(0, 200%, 0);
  -webkit-transform: translate3d(0, 200%, 0);
  transform: translate3d(0, 200%, 0);
}
.projects-images ul li a:hover img {
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
.projects-images ul li a:hover .figcaption {
  opacity: 1;
}
.projects-images ul li:hover .figcaption h5,
.projects-images ul li:hover .figcaption p {
  opacity: 1;
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.view_button {
  text-transform: uppercase;
  font-size: 13px;
  line-height: 21px;
  display: block;
  margin: 50px auto;
  text-align: center;
  color: #232024;
  letter-spacing: 6px;
  width: 300px;
  border-left: 2px solid #a3a4ab;
  border-right: 2px solid #a3a4ab;
  margin-bottom: 48px;
}
.view_button:hover {
  background-color: #c9cacb;
}
/* ===========================



========= 8. Testimonial ======== 



=========================== */

.testimonial_pan {
  background-color: #f0f0f0;
  padding-top: 114px;
  padding-bottom: 120px;
}
.testimonial_pan article p {
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 2px;
  padding-bottom: 30px;
}
.testimonial_pan article h6 {
  font-family: "Source Sans Pro", sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 5px;
  color: #130e14;
  border-bottom: 1px solid #a3a4ab;
  display: inline-block;
  padding-bottom: 20px;
}
.testimonial_pan .owl-controls .owl-pagination {
  text-align: center;
  padding-top: 28px;
}
.testimonial_pan .owl-controls .owl-pagination .owl-page {
  display: inline-block;
  background-color: #b7b7b7;
  width: 12px;
  height: 11px;
  border-radius: 100%;
  margin: 0 4px;
}
.testimonial_pan .owl-controls .owl-pagination .owl-page.active {
  background-color: #130e14;
}
/* ===========================



========= 9. Logoes Silde ======== 



=========================== */

.logoes-pan {
  position: relative;
  padding-top: 48px;
  padding-bottom: 53px;
}
.logoes-pan ul {
  margin: 0 auto;
  padding: 0 10%;
}
.logoes-pan ul li {
  display: inline-block;
  margin: 0 10px;
  text-align: center;
}
.logoes-pan ul li img {
  margin: 0 auto;
  display: block;
}
.logoes-pan .owl-buttons div {
  font-size: 0;
  line-height: 0;
  position: absolute;
  top: 16px;
  cursor: pointer;
  width: 68px;
  height: 13px;
  background-position: 0 0;
  background-repeat: no-repeat;
}
.logoes-pan .owl-buttons div.owl-prev {
  left: 0;
  background-image: url(../images/prev.png);
}
.logoes-pan .owl-buttons div.owl-next {
  right: 0;
  background-image: url(../images/next.png);
}
/* ===========================



========= 10 . Let's start a project ======== 



=========================== */

.letsproject-pan {
  background-color: #fff445;
  text-align: center;
}
.letsproject-pan a {
  text-transform: uppercase;
  font-weight: 900;
  font-size: 21px;
  line-height: 150px;
  color: #181818;
  letter-spacing: 4px;
  display: inline-block;
}
.letsproject-pan a:hover {
  color: #9a9a9a;
}
/* ===========================



========= 11. Footer ======== 



=========================== */

.footer {
  background-color: #181818;
  padding-top: 119px;
  padding-bottom: 183px;
  color: #999;
  font-weight: 200;
}
.footer address {
  font-size: 12px;
  line-height: 23px;
  font-style: normal;
  letter-spacing: 2px;
}
.footer address a {
  color: #555;
  display: block;
  text-decoration: underline;
}
.footer address a:hover {
  color: #fff;
}
.footer menu.socil-icon-one {
  margin-left: 55px;
}
.footer menu.socil-icon-two {
  margin-left: 16px;
}
.footer ul li {
  text-transform: uppercase;
  font-size: 13px;
  line-height: 37px;
  list-style: none;
  letter-spacing: 3px;
  font-weight: 200;
}
.footer ul li a {
  display: block;
  color: #999;
}
.footer ul li a:hover {
  color: #fff;
}
.footer p {
  font-size: 12px;
  line-height: 13px;
  letter-spacing: 2px;
  padding-top: 2px;
}
.footer address figure {
  padding-bottom: 20px;
}
/* ===========================



========= 12. Header Inner Banner ======== 



=========================== */

.header_inner_banner {
  width: 100%;
  position: relative;
}
.header_inner_banner figure img {
  width: 100%;
  margin: 0 auto;
}
.header_inner_banner .header-title {
  text-transform: uppercase;
  position: absolute;
  z-index: 60;
  right: 0;
  left: 0;
  text-align: center;
  top: 0;
  padding-top: 170px;
}
.header_inner_banner .header-title h2 {
  color: #fff;
  font-weight: 700;
  font-size: 31px;
  line-height: 33px;
  letter-spacing: 7px;
  font-family: "Source Sans Pro", sans-serif;
}
.header_inner_banner .header-title p {
  font-size: 12px;
  line-height: 14px;
  color: #8d8d8d;
  letter-spacing: 4px;
  padding-top: 12px;
}
.header_inner_banner .bg_overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
/* ===========================



========= 13. About Pan ======== 



=========================== */

.about_pan {
  background-color: inherit;
  padding-bottom: 91px;
}
/* ===========================



========= 14. The History ======== 



=========================== */

.the-history article {
  padding-left: 39px;
}
.the-history article h6 {
  text-transform: uppercase;
  font-weight: 800;
  color: #000;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 5px;
  padding-bottom: 19px;
}
.the-history article p {
  font-size: 15px;
  line-height: 27px;
  letter-spacing: 1px;
  color: #555;
  font-weight: 300;
  padding-bottom: 26px;
}
/* ===========================



========= 15. The Team ======== 



=========================== */

.the-team {
  padding-top: 63px;
}
.the-team .header-title {
  text-align: center;
  text-transform: uppercase;
}
.the-team .header-title h2 {
  color: #130e14;
  font-weight: 800;
  font-size: 27px;
  line-height: 28px;
  letter-spacing: 3.5px;
  padding-bottom: 5px;
}
.the-team .header-title p {
  color: #232024;
  font-size: 13px;
  line-height: 14px;
  letter-spacing: 7px;
}
.tema-images {
  padding-top: 109px;
  overflow: hidden;
}
.tema-images li {
  overflow: hidden;
  text-align: center;
  text-transform: uppercase;
}
.tema-images li figure {
  width: 100%;
  overflow: hidden;
  position: relative;
}
.tema-images li figure img {
  margin: 0 auto;
  display: block;
  -moz-transition: all, 0.5s;
  -o-transition: all, 0.5s;
  -webkit-transition: all, 0.5s;
  transition: all, 0.5s;
}
.tema-images li:hover img {
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
.tema-images li .section {
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
  -moz-transition: opacity, 0.3s;
  -o-transition: opacity, 0.3s;
  -webkit-transition: opacity, 0.3s;
  transition: opacity, 0.3s;
}
.tema-images li .social_icons {
  position: absolute;
  text-align: center;
  top: 68%;
  width: 100%;
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.tema-images li .social_icons a {
  width: 28px;
  height: 28px;
  border-radius: 100%;
  background-color: #fff;
  text-align: center;
  line-height: 28px;
  font-size: 14px;
  display: inline-block;
  margin: 0 3px;
  -moz-transform: translate3d(0, -200%, 0);
  -ms-transform: translate3d(0, -200%, 0);
  -webkit-transform: translate3d(0, -200%, 0);
  transform: translate3d(0, -200%, 0);
  -moz-transition: all, 0.5s;
  -o-transition: all, 0.5s;
  -webkit-transition: all, 0.5s;
  transition: all, 0.5s;
}
.tema-images li .social_icons a i {
  opacity: 0.5;
}
.tema-images li:hover .section {
  opacity: 1;
}
.tema-images li:hover social_icons a {
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.tema-images li .social_icons a:hover {
  background-color: #fff445;
}
.tema-images li header {
  padding-top: 36px;
  padding-bottom: ;
}
.tema-images li header h5,
.tema-images li header h6 {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 13px;
  line-height: 14px;
}
.tema-images li header h5 {
  font-weight: 700;
  color: #232024;
  letter-spacing: 6px;
  padding-bottom: 9px;
}
.tema-images li header h6 {
  color: #8d8d8d;
  letter-spacing: 6px;
}
/* ===========================



========= 16. Our expertise ======== 



=========================== */

.our-expertis {
  padding-top: 93px;
  padding-bottom: 82px;
}
.our-expertis article h6 {
  text-transform: uppercase;
  font-size: 13px;
  line-height: 15px;
  color: #000;
  font-weight: 800;
  font-family: "Source Sans Pro", sans-serif;
  letter-spacing: 5px;
  padding-bottom: 12px;
}
.our-expertis article p {
  font-size: 15px;
  line-height: 27px;
  color: #555;
  letter-spacing: 1px;
  font-weight: 300;
  padding-bottom: 25px;
}
.progress_barpan section {
  padding-left: 47px;
}
.progress_barpan ul {
  list-style: none;
}
.progress_barpan li {
  position: relative;
  margin-bottom: 38px;
}
.progress_barpan li .progress {
  height: 3px;
  border-radius: 0;
  background-color: #dbdbdb;
  max-width: 560px;
  box-shadow: none;
  margin-bottom: 0;
}
.progress_barpan li .progress .progress-bar {
  box-shadow: none;
  background-color: #232024;
}
.progress_barpan li h5 {
  text-transform: uppercase;
  letter-spacing: 6px;
  color: #232024;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 13px;
  line-height: 14px;
  padding-bottom: 19px;
}
.progress_barpan li h6 {
  color: #232024;
  letter-spacing: 2px;
  font-size: 13px;
  line-height: 14px;
  font-weight: 400;
  float: right;
  font-family: "Source Sans Pro", sans-serif;
  position: absolute;
  right: 0;
  top: 71%;
}
/* ===========================



========= 17. works ======== 



=========================== */

.works_wrapper {
  padding-top: 95px;
  padding-bottom: 120px;
}
.works_wrapper ul.works-nav {
  text-align: center;
}
.works_wrapper ul.works-nav li {
  display: inline-block;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: #555;
  letter-spacing: 4px;
  background-image: url(../images/devider.jpg);
  background-position: 0 4px;
  background-repeat: no-repeat;
  padding-left: 18px;
  padding-right: 18px;
  font-family: "Source Sans Pro", sans-serif;
}
.works_wrapper ul.works-nav li:last-child {
  padding-right: 0;
}
.works_wrapper ul.works-nav li:first-child {
  padding-left: 0;
  background-image: none;
}
.works_wrapper ul.works-nav li.active {
  color: #000000;
}
.works_wrapper .projects-images {
  padding-top: 80px;
}
.works_images ul li figcaption {
  background: rgba(234, 234, 234, 0.9);
}
.works_images ul li:hover img {
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
.works_images ul li:hover .figcaption {
  opacity: 1;
}
.works_images ul li h5 {
  font-size: 13px;
  line-height: 14px;
  font-weight: 800;
  letter-spacing: 6px;
  padding-bottom: 7px;
}
.works_images ul li h5,
.works_images ul li p {
  color: #130e14;
  text-transform: uppercase;
}
.works_images ul li p {
  font-size: 12px;
  line-height: 13px;
  letter-spacing: 4px;
}
.works_images ul li a {
  width: 22px;
  height: 22px;
  border: 1px solid #000;
  display: inline-block;
  text-align: center;
  border-radius: 100%;
  margin-bottom: 18px;
  -moz-transform: translate3d(0, -900%, 0);
  -ms-transform: translate3d(0, -900%, 0);
  -webkit-transform: translate3d(0, -900%, 0);
  transform: translate3d(0, -900%, 0);
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  color: #000;
}
.works_images ul li:hover a {
  opacity: 1;
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.works_images ul li a:hover {
  background-color: #fff445;
  border-color: #dbd01c;
}
/* ===========================



========= 18. Services ======== 



=========================== */

.all-serivices {
  background-color: #f0f0f0;
  padding-top: 100px;
  padding-bottom: 96px;
}
.all-serivices section {
  text-align: center;
}
.all-serivices section h3 {
  text-transform: uppercase;
  color: #060606;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 13px;
  line-height: 15px;
  display: block;
  letter-spacing: 6px;
  font-weight: 800;
  padding-bottom: 22px;
}
.all-serivices section p {
  font-size: 15px;
  line-height: 23px;
  color: #555;
  letter-spacing: 2px;
  font-weight: 300;
}
.all-serivices section span {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  text-align: center;
  color: #fff;
  line-height: 40px;
  font-size: 18px;
  background-color: #060606;
  margin-bottom: 23px;
}
.all-serivices section:hover span {
  background-color: #fff445;
  transition-delay: 0s;
  transition-duration: 0.6s;
  transition-property: all;
  transition-timing-function: ease;
}
.services-text {
  overflow: hidden;
  padding-top: 92px;
  padding-bottom: 50px;
}
.services-text article h4 {
  font-weight: 300;
  font-size: 19px;
  line-height: 37px;
  letter-spacing: 2px;
  color: #3f3b40;
  font-family: "Source Sans Pro", sans-serif;
  padding-bottom: 39px;
}
.services-text article p {
  font-weight: 300;
  font-size: 15px;
  line-height: 23px;
  letter-spacing: 2px;
  padding-bottom: 23px;
}
.services-text figure {
  float: right;
}
.area-expertise {
  padding-bottom: 110px;
  overflow: hidden;
}
.area-expertise h6,
.contact-wrapper aside h6 {
  font-family: "Source Sans Pro", sans-serif;
  text-transform: uppercase;
  font-size: 13px;
  line-height: 15px;
  color: #000;
  font-weight: 800;
  letter-spacing: 5px;
  padding-bottom: 26px;
}
.area-expertise ul li {
  color: #4e4a4f;
  font-size: 15px;
  line-height: 30px;
  display: block;
  font-weight: 300;
  letter-spacing: 2px;
  padding-left: 22px;
  background-image: url(../images/devider-serivces.png);
  background-repeat: no-repeat;
  background-position: 0 15px;
}
/* ===========================



========= 19. Blog ======== 



=========================== */

.blog-wrapper {
  padding-top: 99px;
  padding-bottom: 71px;
}
.blog-wrapper .blog_left {
  padding-right: 39px;
}
.blog-wrapper .blog_right {
  float: right;
  padding: 0;
}
.blog_left article {
  margin-bottom: 99px;
}
.blog_left article header .post-date {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 14px;
  line-height: 14px;
  color: #555;
  letter-spacing: 2px;
  font-weight: 300;
  text-transform: uppercase;
  padding-bottom: 13px;
}
.blog_left article header h5 {
  font-family: "Source Sans Pro", sans-serif;
  letter-spacing: 2px;
  font-weight: 300;
  font-size: 19px;
  line-height: 20px;
  padding-bottom: 26px;
}
.blog_left article header h5 a {
  color: #130e14;
}
.blog_left article header h5 a:hover {
  text-decoration: underline;
  color: #7f7c45;
}
.blog_left article header .authore-cat-comment {
  text-transform: uppercase;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 2px;
  color: #555;
  font-weight: 600;
  margin-bottom: 41px;
}
.blog_left article header .authore-cat-comment a {
  color: #939393;
}
.blog_left article header .authore-cat-comment a:hover {
  color: #000;
}
.blog_left article p {
  font-size: 15px;
  line-height: 23px;
  letter-spacing: 2px;
  color: #555;
  font-weight: 300;
}
.blog_left article .continue-button {
  display: block;
  width: 178px;
  line-height: 49px;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  font-weight: 200;
  letter-spacing: 5px;
  font-size: 12px;
  background-color: #000;
  margin-top: 45px;
}
.blog_left article .continue-button:hover {
  background-color: #fff445;
  color: #000;
}
.blog_left article .blog-slider-pan {
  position: relative;
  margin-bottom: 79px;
}
.blog_left article .blog-slider-pan ul li {
  list-style: none;
  width: 100%;
}
.blog_left article .blog-slider-pan .owl-buttons div {
  position: absolute;
  top: 50%;
  z-index: 60;
  width: 54px;
  height: 17px;
  background-position: 0 0;
  background-repeat: no-repeat;
  font-size: 0;
}
.blog_left article .blog-slider-pan .owl-buttons div.owl-prev {
  left: 17px;
  background-image: url(../images/blog/left-arrow.jpg);
}
.blog_left article .blog-slider-pan .owl-buttons div.owl-next {
  right: 17px;
  background-image: url(../images/blog/right-arrow.jpg);
}
.blog_left article figure,
.blog_left article .video {
  margin-bottom: 79px;
}
.pagination {
  overflow: hidden;
  width: 100%;
}
.pagination ul {
  list-style: none;
}
.pagination ul li {
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  margin: 0 3px;
  text-transform: uppercase;
}
.pagination ul li > a {
  display: table-cell;
  line-height: 40px;
  border: 1px solid #a3a3a3;
  width: 40px;
}
.pagination ul li:first-child a {
  width: 79px;
  float: left;
  margin-right: 173px;
  margin-left: 0;
}
.pagination ul li:last-child a {
  width: 79px;
  float: right;
  margin-left: 111px;
  margin-right: 0;
}
.pagination ul li > a:hover {
  background-color: #fff445;
}
.blog_right aside.search-from {
  margin-bottom: 78px;
}
.blog_right aside.search-from form {
  position: relative;
}
.blog_right aside.search-from form label {
  display: block;
  width: 100%;
}
.blog_right aside.search-from form label:before {
  content: "\f002";
  font-family: "FontAwesome";
  font-size: 21px;
  line-height: 41px;
  text-align: right;
  position: absolute;
  right: 15px;
  top: 0;
  font-weight: 400;
}
.blog_right aside.search-from input {
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  color: #000;
  height: 44px;
  border: 1px solid #cdcdcd;
  padding: 0 10px;
  transition-delay: 0s;
  transition-duration: 0.6s;
  transition-property: all;
  transition-timing-function: ease;
}
.blog_right aside.search-from input:focus {
  border-color: #fff445;
}
.blog_right aside h6 {
  text-transform: uppercase;
  font-size: 13px;
  line-height: 14px;
  color: #000;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 900;
  letter-spacing: 4px;
  padding-bottom: 34px;
}
.blog_right aside.categories-pan {
  margin-bottom: 53px;
}
.blog_right aside.categories-pan ul {
  list-style: none;
}
.blog_right aside.categories-pan ul li {
  display: block;
  font-size: 15px;
  line-height: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  background-image: url(../images/devider-serivces.png);
  background-position: 0 9px;
  background-repeat: no-repeat;
  padding-left: 21px;
  padding-bottom: 21px;
}
.blog_right aside.categories-pan ul li a {
  color: #555;
}
.blog_right aside.categories-pan ul li a:hover {
  color: #000;
}
.blog_right aside.recent-post-pan {
  margin-bottom: 58px;
}
.blog_right aside.recent-post-pan ul {
  list-style: none;
}
.blog_right aside.recent-post-pan ul li {
  overflow: hidden;
  margin-bottom: 20px;
}
.blog_right aside.recent-post-pan ul li figure {
  float: left;
  width: 70px;
  overflow: hidden;
  height: 70px;
  margin-right: 30px;
}
.blog_right aside.recent-post-pan ul li .section {
  float: right;
}
.blog_right aside.recent-post-pan ul li .section a {
  display: block;
  color: #727172;
  font-size: 15px;
  line-height: 16px;
  letter-spacing: 1px;
  font-weight: 300;
  padding-bottom: 6px;
}
.blog_right aside.recent-post-pan ul li .section a:hover {
  color: #000;
  text-decoration: underline;
}
.blog_right aside.recent-post-pan ul li .section span {
  color: #555;
  font-size: 13px;
  line-height: 14px;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 1px;
}
.blog_right aside.flickr-feed-pan ul {
  list-style: none;
  overflow: hidden;
}
.blog_right aside.flickr-feed-pan ul li {
  display: inline-block;
  margin-bottom: 22px;
}
.blog_right aside.flickr-feed-pan ul li figure {
  width: 85px;
  height: 85px;
  overflow: hidden;
}
.blog_right aside.recent-post-pan ul li figure img {
  max-width: 100%;
  width: 100%;
  height: auto;
}
.blog_right aside.flickr-feed-pan ul li figure img {
  width: 100%;
  max-width: 100%;
  height: auto;
}
.blog_right aside.flickr-feed-pan ul li:nth-child(2),
.blog_right aside.flickr-feed-pan ul li:nth-child(5) {
  margin: 0 8px;
}
.blog-details-pan article {
  margin-bottom: 46px;
}
.blog-details-pan article p {
  padding-bottom: 24px;
}
.comments h6 {
  text-transform: uppercase;
  font-weight: 900;
  color: #000;
  letter-spacing: 3px;
  font-size: 17px;
  line-height: 18px;
  padding-bottom: 78px;
}
.comments ol,
.comments ul {
  list-style: none;
}
.blog-details-pan .comments article,
.blog-details-pan .comments article figure {
  margin-bottom: 0;
}
.blog-details-pan .comments article figure {
  margin-right: 30px;
  float: left;
}
.blog-details-pan .comments article .comment-meta {
  overflow: hidden;
}
.blog-details-pan .comments article .comment-meta h5 {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 800;
  font-size: 13px;
  line-height: 14px;
  color: #000;
  letter-spacing: 1px;
  display: block;
  float: left;
  text-transform: uppercase;
}
.blog-details-pan .comments article .comment-meta h5 span {
  display: block;
  color: #555;
  font-weight: 300;
  padding-top: 15px;
}
.blog-details-pan .comments article .comment-meta .comment-reply-link {
  float: right;
  font-family: "Source Sans Pro", sans-serif;
  color: #fff;
  letter-spacing: 4px;
  font-size: 12px;
  line-height: 38px;
  background-color: #000000;
  text-transform: uppercase;
  display: block;
  width: 98px;
  text-align: center;
}
.blog-details-pan .comments article .comment-meta .comment-reply-link:hover {
  background-color: #fff445;
  color: #000000;
}
.blog-details-pan .comments article .comment-body {
  margin-left: 99px;
  padding-top: 28px;
}
.blog-details-pan .comments article .comment-body p {
  font-size: 15px;
  line-height: 23px;
  color: #555;
  font-weight: 300;
  letter-spacing: 2px;
}
.blog-details-pan .comments ol ul {
  margin-left: 99px;
  padding-top: 30px;
}
.blog-details-pan .leave-comment {
  padding-top: 86px;
}
.blog-details-pan .leave-comment h5 {
  font-family: "Source Sans Pro", sans-serif;
  text-transform: uppercase;
  font-size: 17px;
  line-height: 18px;
  color: #000;
  font-weight: 800;
  letter-spacing: 2px;
  padding-bottom: 78px;
}
.blog-details-pan .leave-comment input[type="text"],
.blog-details-pan .leave-comment input[type="email"],
.blog-details-pan .leave-comment textarea {
  font-family: "Source Sans Pro", sans-serif;
  text-transform: capitalize;
  color: #555;
  font-size: 15px;
  line-height: 17px;
  letter-spacing: 1px;
  font-weight: 300;
  display: block;
  border-bottom: 1px solid #c3bec5;
  outline: none;
  border-left: none;
  border-right: none;
  border-top: none;
  width: 100%;
  padding-left: 23px;
  padding-right: 23px;
  padding-bottom: 18px;
  transition-delay: 0s;
  transition-duration: 0.6s;
  transition-property: all;
  transition-timing-function: ease;
}
.blog-details-pan .leave-comment input[type="text"],
.blog-details-pan .leave-comment input[type="email"] {
  margin-bottom: 56px;
}
.blog-details-pan .leave-comment input[type="submit"] {
  width: 100%;
  text-align: center;
  font-weight: 200;
  color: #fff;
  border: none;
  outline: none;
  display: block;
  font-size: 12px;
  letter-spacing: 5px;
  line-height: 49px;
  height: 49px;
  background-color: #000;
  text-transform: uppercase;
  margin-top: 40px;
}
.blog-details-pan .leave-comment input[type="submit"]:hover {
  background-color: #fff445;
  color: #000;
}
.blog-details-pan .leave-comment input[type="text"]:focus,
.blog-details-pan .leave-comment input[type="email"]:focus,
.blog-details-pan .leave-comment textarea:focus {
  border-bottom-color: #fff445;
}
.video-iframe {
  width: 100%;
  height: 400px;
}
.video-video {
  width: 100%;
  height: 100%;
}
/* ===========================



========= 20. Contact ======== 



=========================== */

.contact-wrapper {
  padding-top: 96px;
}
.contact-wrapper h5 {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 19px;
  line-height: 20px;
  font-weight: 300;
  color: #4e4a4f;
  letter-spacing: 1px;
}
.contact-wrapper .contact-form {
  padding-top: 75px;
}
.contact-wrapper .contact-form input[type="text"]:focus,
.contact-wrapper .contact-form input[type="email"]:focus,
.contact-wrapper .contact-form input[type="tel"]:focus,
.contact-wrapper .contact-form textarea:focus {
  border-bottom-color: #fff445;
}
.contact-wrapper .contact-form input[type="text"],
.contact-wrapper .contact-form input[type="email"],
.contact-wrapper .contact-form input[type="tel"] {
  width: 100%;
  display: inline-block;
  max-width: 332px;
  padding-bottom: 19px;
  margin-bottom: 56px;
  margin-right: 35px;
}
.contact-wrapper .contact-form input[type="text"],
.contact-wrapper .contact-form input[type="email"],
.contact-wrapper .contact-form input[type="tel"],
.contact-wrapper .contact-form textarea {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 15px;
  line-height: 17px;
  color: #555;
  font-weight: 300;
  letter-spacing: 1px;
  padding-left: 22px;
  padding-right: 10px;
  border-bottom: 1px solid #c3bec5;
  transition-delay: 0s;
  transition-duration: 0.6s;
  transition-property: all;
  transition-timing-function: ease;
}
.contact-wrapper .contact-form input[type="email"],
.contact-wrapper .contact-form input[type="tel"] {
  margin-bottom: 45px;
}
.contact-wrapper .contact-form textarea {
  display: block;
  height: 104px;
  padding-bottom: 20px;
  outline: none;
  border-left: none;
  border-right: none;
  border-top: none;
  width: 100%;
  max-width: 700px;
  padding-top: 6px;
}
.contact-wrapper .contact-form input[type="submit"] {
  width: 100%;
  display: block;
  max-width: 701px;
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 49px;
  height: 49px;
  color: #fff;
  letter-spacing: 6px;
  background-color: #000000;
  border: none;
  outline: none;
  transition-delay: 0s;
  transition-duration: 0.6s;
  transition-property: all;
  transition-timing-function: ease;
  margin-top: 40px;
}
.contact-wrapper .contact-form input[type="submit"]:hover {
  background-color: #fff445;
  color: #181818;
}
.contact-wrapper aside {
  padding-left: 37px;
}
.contact-wrapper aside h6 {
  padding-bottom: 30px;
}
.contact-wrapper aside address {
  font-style: normal;
  font-size: 15px;
  line-height: 27px;
  color: #727172;
  font-weight: 300;
  letter-spacing: 1px;
  margin-bottom: 30px;
}
.contact-wrapper aside address a {
  color: #727172;
}
.contact-wrapper aside address a:hover {
  color: #000;
  text-decoration: underline;
}
.contact-wrapper aside .social_icons a {
  color: #222222;
  display: inline-block;
  font-size: 20px;
  line-height: 20px;
  padding-right: 26px;
}
.contact-wrapper aside .social_icons a:hover {
  color: #fff445;
}
.address-map {
  width: 100%;
  margin-top: 96px;
}
.address-map img {
  width: 100%;
  max-width: 100%;
  display: block;
}
.demo-wrapper {
  width: 100%;
  margin: 0 auto;
  height: 395px;
}
#surabaya {
  width: 100%;
  height: 100%;
}
.error_message {
  color: #ff675f;
  font-weight: 500;
  padding-bottom: 15px;
}
h3.succes_message {
  color: #3c3;
}
/* ===========================



========= 21. 404 Page ======== 



=========================== */

.pagenotfound-wrapper {
  text-align: center;
  padding-bottom: 120px;
  padding-top: 100px;
}
.pagenotfound-wrapper header {
  padding-bottom: 47px;
}
.pagenotfound-wrapper header h2 {
  display: inline-block;
  margin: 0 auto;
  width: 170px;
  line-height: 80px;
  font-family: "Source Sans Pro", sans-serif;
  color: #fff;
  font-size: 71px;
  font-weight: 100;
  letter-spacing: 12px;
  background-color: #000;
}
.pagenotfound-wrapper h5 {
  text-transform: uppercase;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 300;
  font-size: 19px;
  line-height: 20px;
  color: #4e4a4f;
  letter-spacing: 3px;
  padding-bottom: 28px;
}
.pagenotfound-wrapper p {
  color: #727172;
  font-size: 15px;
  line-height: 27px;
  letter-spacing: 1px;
  padding-bottom: 73px;
}
.pagenotfound-wrapper a {
  display: inline-block;
  width: 100%;
  max-width: 272px;
  line-height: 49px;
  background-color: #000;
  color: #fff;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 5px;
}
.pagenotfound-wrapper a:hover {
  background-color: #fff445;
  color: #000;
}
/* ===========================



========= 22. Commingsoon Page ======== 



=========================== */

.commingsoon-main-wrapper .background {
  background: #fff;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
.commingsoon-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  z-index: 900;
  padding-top: 127px;
  font-family: "Open Sans", sans-serif;
  text-align: center;
}
.logo-commingsoon {
  padding-bottom: 45px;
}
.logo-commingsoon img {
  margin: 0 auto;
  display: block;
}
.commingsoon-content {
}
.commingsoon-content h2 {
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;
  color: #35373e;
  font-size: 39px;
  line-height: 40px;
  font-weight: 800;
  letter-spacing: 3px;
  padding-bottom: 23px;
}
.commingsoon-content p {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 18px;
  line-height: 24px;
  color: #35373e;
  font-weight: 300;
}
.notify-me-button {
  font-family: "Source Sans Pro", sans-serif;
  text-transform: uppercase;
  font-size: 12px;
  display: block;
  margin: 44px auto;
  line-height: 49px;
  border: 2px solid #35373e;
  width: 161px;
  text-align: center;
  letter-spacing: 4px;
  font-weight: 600;
}
.notify-me-button:hover {
  background-color: #35373e;
  color: #fff;
}
.commingsoon-wrapper footer #countdown {
  text-transform: uppercase;
}
.commingsoon-wrapper footer #countdown .item {
  display: inline-block;
  text-align: center;
  font-weight: 700;
  color: #35373e;
  font-size: 13px;
  letter-spacing: 1px;
  font-family: "Open Sans", sans-serif;
  border-right: 1px solid #35373e;
  margin-right: 58px;
  padding-right: 62px;
}
.commingsoon-wrapper footer #countdown .item p {
  font-family: "Open Sans", sans-serif;
  font-size: 48px;
  line-height: 49px;
  font-weight: 700;
  display: block;
  padding-bottom: 11px;
}
.commingsoon-wrapper footer #countdown .item:last-child {
  border-right: none;
  margin-right: 0;
  padding-right: 0;
}
.commingsoon-wrapper .social-icon-wrapper {
  margin-top: 68px;
  margin-bottom: 60px;
}
.commingsoon-wrapper .social-icon-wrapper ul {
  text-align: center;
  list-style: none;
}
.commingsoon-wrapper .social-icon-wrapper ul li {
  display: inline-block;
}
.commingsoon-wrapper .social-icon-wrapper ul li a {
  text-align: center;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  border: 1px solid #35373e;
  line-height: 27px;
  display: block;
  font-size: 19px;
  color: #35373e;
  margin-right: 11px;
}
.commingsoon-wrapper .social-icon-wrapper ul li a:hover {
  background-color: #35373e;
  color: #fff;
}
.maintenance-main-wrapper {
  position: relative;
  height: 301px;
}
.maintenance-wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}
.ntify_form {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  position: relative;
}
.ntify_form form {
  position: relative;
}
.ntify_form input[type="email"] {
  margin-top: 34px;
  height: 50px;
  width: 100%;
  outline: none;
  border: 1px solid #d2d4d7;
  display: block;
  background-color: transparent;
  padding-left: 22px;
  padding-right: 64px;
  font-size: 15px;
  color: #696b71;
  line-height: 16px;
}
.ntify_form input[type="email"]:focus {
  border-color: #35373e;
}
.ntify_form input[type="submit"] {
  border: none;
  outline: none;
  width: 60px;
  height: 50px;
  display: block;
  background-color: #35373e;
  font-size: 0;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center center;
}
.ntify_form label:before {
  content: "\f1d9";
  font-family: "FontAwesome";
  display: block;
  color: #bababd;
  font-size: 28px;
  line-height: 18px;
  position: absolute;
  right: 16px;
  top: 14px;
  z-index: 1;
  text-align: center;
  cursor: pointer;
}
.ntify_form input[type="submit"]:hover {
  background-color: #35373e;
}
.notify-me-wrapper a {
  margin-top: 32px;
  display: block;
  font-family: "Source Sans Pro", sans-serif;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 13px;
  letter-spacing: 2px;
  color: #35373e;
}
.notify-me-wrapper a:hover {
  color: #35373e;
  text-decoration: underline;
}
.error_message {
  color: #fc6e51;
  padding-bottom: 15px;
  font-size: 13px;
  line-height: 30px;
}
#success_page {
  color: #9ce726;
  padding-bottom: 10px;
  font-size: 12px;
}
#success_page h3 {
  font-size: 17px;
  font-weight: 400px;
  color: #4ab217;
}
#success_page p {
  font-size: 12px;
  font-weight: 400px;
  color: #b3b3b3;
}
</style>