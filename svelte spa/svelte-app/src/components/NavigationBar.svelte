<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <!-- <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Sign in</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div> -->
      <div class="modal-body">
        <!-- ...................................................................... -->
        <h4 class="mb-4">Sign in</h4>
        <form>
          <div class="input-group mb-3"><span class="input-group-text"> <i class="fa fa-user" /> </span> <input type="text" class="form-control" placeholder="Username" /></div>
          <!-- input-group end.// -->
          <div class="input-group mb-3">
            <span class="input-group-text"> <i class="fa fa-lock" /> </span>
            <input type="text" class="form-control" placeholder="Password" />
            <button type="button" class="btn btn-light">
              <i class="text-muted fa fa-eye" />
            </button>
          </div>

          <!-- input-group end.// -->
          <div class="d-flex mb-3">
            <label class="form-check me-auto"> <input class="form-check-input" type="checkbox" value="" checked="" /> <span class="form-check-label"> Remember </span> </label>
            <a href="#" class="text-decoration-none">Forgot password</a>
          </div>
          <!-- col end.// -->
          <button class="btn btn-primary w-100" type="button"> Sign in </button>
          <p class="text-divider my-4">or access via</p>
          <a href="#" class="btn btn-light w-100">
            <img src="bootstrap5-ecommerce/images/icons/social/google.svg" height="20" width="20" /> <span class="ms-1 align-middle">Continue with Google</span>
          </a>
          <p class="mb-0 mt-4 text-center">Don’t have an account? <a href="#">Sign Up</a></p>
        </form>
        <!-- form end.// -->
        <!-- card-body end.// -->
        <!-- ...................................................................... -->
      </div>
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> -->
    </div>
  </div>
</div>
<nav class="main-header navbar navbar-expand navbar-white navbar-light">
  <!-- Left navbar links -->
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars" /></a>
    </li>
    <li class="nav-item d-none d-sm-inline-block">
      <a href="index3.html" class="nav-link">Home</a>
    </li>
    <li class="nav-item d-none d-sm-inline-block">
      <a href="#" class="nav-link">Contact</a>
    </li>

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter"> Launch demo modal </button>
  </ul>

  <!-- Right navbar links -->
  <ul class="navbar-nav ml-auto">
    <!-- Navbar Search -->
    <li class="nav-item">
      <a class="nav-link" data-widget="navbar-search" href="#" role="button">
        <i class="fas fa-search" />
      </a>
      <div class="navbar-search-block">
        <form class="form-inline">
          <div class="input-group input-group-sm">
            <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
            <div class="input-group-append">
              <button class="btn btn-navbar" type="submit">
                <i class="fas fa-search" />
              </button>
              <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                <i class="fas fa-times" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </li>

    <!-- Messages Dropdown Menu -->
    <li class="nav-item dropdown">
      <a class="nav-link" data-toggle="dropdown" href="#">
        <i class="far fa-comments" />
        <span class="badge badge-danger navbar-badge">3</span>
      </a>
      <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
        <a href="#" class="dropdown-item">
          <!-- Message Start -->
          <div class="media">
            <img src="dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle" />
            <div class="media-body">
              <h3 class="dropdown-item-title">
                Brad Diesel
                <span class="float-right text-sm text-danger"><i class="fas fa-star" /></span>
              </h3>
              <p class="text-sm">Call me whenever you can...</p>
              <p class="text-sm text-muted"><i class="far fa-clock mr-1" /> 4 Hours Ago</p>
            </div>
          </div>
          <!-- Message End -->
        </a>
        <div class="dropdown-divider" />
        <a href="#" class="dropdown-item">
          <!-- Message Start -->
          <div class="media">
            <img src="dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3" />
            <div class="media-body">
              <h3 class="dropdown-item-title">
                John Pierce
                <span class="float-right text-sm text-muted"><i class="fas fa-star" /></span>
              </h3>
              <p class="text-sm">I got your message bro</p>
              <p class="text-sm text-muted"><i class="far fa-clock mr-1" /> 4 Hours Ago</p>
            </div>
          </div>
          <!-- Message End -->
        </a>
        <div class="dropdown-divider" />
        <a href="#" class="dropdown-item">
          <!-- Message Start -->
          <div class="media">
            <img src="dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3" />
            <div class="media-body">
              <h3 class="dropdown-item-title">
                Nora Silvester
                <span class="float-right text-sm text-warning"><i class="fas fa-star" /></span>
              </h3>
              <p class="text-sm">The subject goes here</p>
              <p class="text-sm text-muted"><i class="far fa-clock mr-1" /> 4 Hours Ago</p>
            </div>
          </div>
          <!-- Message End -->
        </a>
        <div class="dropdown-divider" />
        <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
      </div>
    </li>
    <!-- Notifications Dropdown Menu -->
    <li class="nav-item dropdown">
      <a class="nav-link" data-toggle="dropdown" href="#">
        <i class="far fa-bell" />
        <span class="badge badge-warning navbar-badge">15</span>
      </a>
      <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
        <span class="dropdown-item dropdown-header">15 Notifications</span>
        <div class="dropdown-divider" />
        <a href="#" class="dropdown-item">
          <i class="fas fa-envelope mr-2" /> 4 new messages
          <span class="float-right text-muted text-sm">3 mins</span>
        </a>
        <div class="dropdown-divider" />
        <a href="#" class="dropdown-item">
          <i class="fas fa-users mr-2" /> 8 friend requests
          <span class="float-right text-muted text-sm">12 hours</span>
        </a>
        <div class="dropdown-divider" />
        <a href="#" class="dropdown-item">
          <i class="fas fa-file mr-2" /> 3 new reports
          <span class="float-right text-muted text-sm">2 days</span>
        </a>
        <div class="dropdown-divider" />
        <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
      </div>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-widget="fullscreen" href="#" role="button">
        <i class="fas fa-expand-arrows-alt" />
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" href="#" role="button">
        <i class="fas fa-th-large" />
      </a>
    </li>
  </ul>
</nav>

<style>
  /*! CSS Used from: https://bootstrap-ecommerce.com/bootstrap5-ecommerce/css/bootstrap.css?v=3.0 */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  h4 {
    margin-top: 0;
    margin-bottom: 0.3rem;
    font-weight: 600;
    line-height: 1.25;
    color: #212529;
  }
  h4 {
    font-size: calc(1.275rem + 0.3vw);
  }
  @media (min-width: 1200px) {
    h4 {
      font-size: 1.5rem;
    }
  }
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  a {
    color: #0d6efd;
    text-decoration: none;
  }
  a:hover {
    color: #0a58ca;
    text-decoration: underline;
  }
  img {
    vertical-align: middle;
  }
  label {
    display: inline-block;
  }
  button {
    border-radius: 0;
  }
  button:focus {
    outline: dotted 1px;
    outline: -webkit-focus-ring-color auto 5px;
  }
  input,
  button {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  button {
    text-transform: none;
  }
  button,
  [type="button"] {
    -webkit-appearance: button;
  }
  ::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }
  .form-control {
    display: block;
    width: 100%;
    padding: 0.43rem 0.84rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #51585e;
    background-color: #f9f9f9;
    background-clip: padding-box;
    border: 1px solid #dee2e6;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.35rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .form-control {
      transition: none;
    }
  }
  .form-control:focus {
    color: #51585e;
    background-color: #fff;
    border-color: #6ea8fe;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(231, 241, 255, 0.7);
  }
  .form-control::-webkit-input-placeholder {
    color: #9da1a7;
    opacity: 1;
  }
  .form-control::-moz-placeholder {
    color: #9da1a7;
    opacity: 1;
  }
  .form-control:-ms-input-placeholder {
    color: #9da1a7;
    opacity: 1;
  }
  .form-control::-ms-input-placeholder {
    color: #9da1a7;
    opacity: 1;
  }
  .form-control::placeholder {
    color: #9da1a7;
    opacity: 1;
  }
  .form-control:disabled {
    background-color: #e9ecef;
    opacity: 1;
  }
  .form-check {
    display: block;
    min-height: 1.5rem;
    padding-left: 1.5em;
    margin-bottom: 0.125rem;
  }
  .form-check .form-check-input {
    float: left;
    margin-left: -1.5em;
  }
  .form-check-input {
    width: 1em;
    height: 1em;
    margin-top: 0.25em;
    vertical-align: top;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: 1px solid rgba(0, 0, 0, 0.3);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    transition: background-color 0.15s ease-in-out, background-position 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .form-check-input {
      transition: none;
    }
  }
  .form-check-input[type="checkbox"] {
    border-radius: 0.25em;
  }
  .form-check-input:active {
    -webkit-filter: brightness(80%);
    filter: brightness(80%);
  }
  .form-check-input:focus {
    border-color: #6ea8fe;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(231, 241, 255, 0.7);
  }
  .form-check-input:checked {
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
  .form-check-input:checked[type="checkbox"] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
  }
  .form-check-input:disabled {
    pointer-events: none;
    -webkit-filter: none;
    filter: none;
    opacity: 0.5;
  }
  .form-check-input:disabled ~ .form-check-label {
    opacity: 0.5;
  }
  .input-group {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
  }
  .input-group > .form-control {
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    min-width: 0;
  }
  .input-group > .form-control:focus {
    z-index: 3;
  }
  .input-group-text {
    display: flex;
    align-items: center;
    padding: 0.43rem 0.672rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #51585e;
    text-align: center;
    white-space: nowrap;
    background-color: #e9ecef;
    border: 1px solid #dee2e6;
    border-radius: 0.35rem;
  }
  .input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
    margin-left: -1px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .btn {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #51585e;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.43rem 0.84rem;
    font-size: 1rem;
    border-radius: 0.35rem;
    transition: color 0.1s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .btn {
      transition: none;
    }
  }
  .btn:hover {
    color: #51585e;
    text-decoration: none;
  }
  .btn:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(231, 241, 255, 0.7);
  }
  .btn:disabled {
    pointer-events: none;
    opacity: 0.65;
  }
  .btn-primary {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
  .btn-primary:hover {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
  }
  .btn-primary:focus {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
    box-shadow: 0 0 0 0.2rem rgba(49, 132, 253, 0.5);
  }
  .btn-primary:active {
    color: #fff;
    background-color: #0a58ca;
    border-color: #0a53be;
  }
  .btn-primary:active:focus {
    box-shadow: 0 0 0 0.2rem rgba(49, 132, 253, 0.5);
  }
  .btn-primary:disabled {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
  .btn-light {
    color: #000;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }
  .btn-light:hover {
    color: #000;
    background-color: #f9fafb;
    border-color: #f9fafb;
  }
  .btn-light:focus {
    color: #000;
    background-color: #f9fafb;
    border-color: #f9fafb;
    box-shadow: 0 0 0 0.2rem rgba(211, 212, 213, 0.5);
  }
  .btn-light:active {
    color: #000;
    background-color: #f9fafb;
    border-color: #f9fafb;
  }
  .btn-light:active:focus {
    box-shadow: 0 0 0 0.2rem rgba(211, 212, 213, 0.5);
  }
  .btn-light:disabled {
    color: #000;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(81, 88, 94, 0.12);
    box-shadow: 0 0.05rem 0.2rem rgba(0, 0, 0, 0.03);
    border-radius: 0.35rem;
  }
  .card-body {
    flex: 1 1 auto;
    padding: 1.25rem 1.25rem;
  }
  .align-middle {
    vertical-align: middle !important;
  }
  .d-flex {
    display: flex !important;
  }
  .w-100 {
    width: 100% !important;
  }
  .my-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .mt-4 {
    margin-top: 1.5rem !important;
  }
  .me-auto {
    margin-right: auto !important;
  }
  .mb-0 {
    margin-bottom: 0 !important;
  }
  .mb-3 {
    margin-bottom: 1rem !important;
  }
  .mb-4 {
    margin-bottom: 1.5rem !important;
  }
  .ms-1 {
    margin-left: 0.25rem !important;
  }
  .text-center {
    text-align: center !important;
  }
  .text-decoration-none {
    text-decoration: none !important;
  }
  /*! CSS Used from: https://bootstrap-ecommerce.com/bootstrap5-ecommerce/css/ui.css?v=3.0 */
  .btn-light {
    background-color: #fff;
    border-color: #dee2e6;
    color: #212529;
  }
  .btn-light:hover {
    border-color: #c1c9d0;
    color: #0d6efd;
  }
  .text-divider {
    text-align: center;
    display: flex;
    font-size: 0.875rem;
    color: #9da1a7;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .text-divider:after,
  .text-divider:before {
    content: "";
    height: 1px;
    background: #dee2e6;
    flex: 1;
    margin: 0 7px;
  }
  /*! CSS Used from: https://bootstrap-ecommerce.com/bootstrap5-ecommerce/fonts/fontawesome/css/all.min.css */
  .fa {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
  }
  .fa-lock:before {
    content: "\f023";
  }
  .fa-user:before {
    content: "\f007";
  }
  .fa {
    font-family: "Font Awesome 5 Free";
  }
  .fa {
    font-weight: 900;
  }
  /*! CSS Used fontfaces */
  /* @font-face {
    font-family: "Font Awesome 5 Free";
    font-style: normal;
    font-weight: 400;
    font-display: auto;
    src: url(https://bootstrap-ecommerce.com/bootstrap5-ecommerce/fonts/fontawesome/webfonts/fa-regular-400.eot);
    src: url(https://bootstrap-ecommerce.com/bootstrap5-ecommerce/fonts/fontawesome/webfonts/fa-regular-400.eot#iefix) format("embedded-opentype"),
      url(https://bootstrap-ecommerce.com/bootstrap5-ecommerce/fonts/fontawesome/webfonts/fa-regular-400.woff2) format("woff2"),
      url(https://bootstrap-ecommerce.com/bootstrap5-ecommerce/fonts/fontawesome/webfonts/fa-regular-400.woff) format("woff"),
      url(https://bootstrap-ecommerce.com/bootstrap5-ecommerce/fonts/fontawesome/webfonts/fa-regular-400.ttf) format("truetype"),
      url(https://bootstrap-ecommerce.com/bootstrap5-ecommerce/fonts/fontawesome/webfonts/fa-regular-400.svg#fontawesome) format("svg");
  }
  @font-face {
    font-family: "Font Awesome 5 Free";
    font-style: normal;
    font-weight: 900;
    font-display: auto;
    src: url(https://bootstrap-ecommerce.com/bootstrap5-ecommerce/fonts/fontawesome/webfonts/fa-solid-900.eot);
    src: url(https://bootstrap-ecommerce.com/bootstrap5-ecommerce/fonts/fontawesome/webfonts/fa-solid-900.eot#iefix) format("embedded-opentype"),
      url(https://bootstrap-ecommerce.com/bootstrap5-ecommerce/fonts/fontawesome/webfonts/fa-solid-900.woff2) format("woff2"),
      url(https://bootstrap-ecommerce.com/bootstrap5-ecommerce/fonts/fontawesome/webfonts/fa-solid-900.woff) format("woff"),
      url(https://bootstrap-ecommerce.com/bootstrap5-ecommerce/fonts/fontawesome/webfonts/fa-solid-900.ttf) format("truetype"),
      url(https://bootstrap-ecommerce.com/bootstrap5-ecommerce/fonts/fontawesome/webfonts/fa-solid-900.svg#fontawesome) format("svg");
  } */
</style>
