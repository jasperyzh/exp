<template>
  <nav class="navbar navbar-expand-lg" aria-label="Offcanvas navbar large">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          width="120"
          height="64"
          src="@/assets/placeholder/placeholder.png"
          alt=""
        />
      </a>

      <div class="row p-3">
        <nav class="nav menu__social justify-content-end d-none d-lg-flex">
          <a class="nav-link" href="#"><i class="bi bi-facebook"></i></a>
          <a class="nav-link" href="#"><i class="bi bi-instagram"></i></a>
          <a class="nav-link" href="#"><i class="bi bi-linkedin"></i></a>
          <a class="nav-link" href="#"><i class="bi bi-facebook"></i></a>
        </nav>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar2"
          aria-controls="offcanvasNavbar2"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasNavbar2"
          aria-labelledby="offcanvasNavbar2Label"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbar2Label">
              Explore
            </h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link" href="#">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Our Focus</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">The Good News</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Grants</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Donations</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact Us</a>
              </li>
              <!-- <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </li> -->
            </ul>
            <!-- <form class="d-flex mt-3 mt-lg-0" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> -->

            <nav
              class="
                nav
                menu__social
                justify-content-start
                d-flex d-lg-none
                my-5
              "
            >
              <a class="nav-link" href="#"><i class="bi bi-facebook"></i></a>
              <a class="nav-link" href="#"><i class="bi bi-instagram"></i></a>
              <a class="nav-link" href="#"><i class="bi bi-linkedin"></i></a>
              <a class="nav-link" href="#"><i class="bi bi-facebook"></i></a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>