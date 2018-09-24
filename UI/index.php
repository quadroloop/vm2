<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>vm2</title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <meta content="" name="keywords">
  <meta content="" name="description">

  <!-- Facebook Opengraph integration: https://developers.facebook.com/docs/sharing/opengraph -->
  <meta property="og:title" content="">
  <meta property="og:image" content="">
  <meta property="og:url" content="">
  <meta property="og:site_name" content="">
  <meta property="og:description" content="">

  <!-- Twitter Cards integration: https://dev.twitter.com/cards/  -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="">
  <meta name="twitter:title" content="">
  <meta name="twitter:description" content="">
  <meta name="twitter:image" content="">

  <!-- Place your favicon.ico and apple-touch-icon.png in the template root directory -->
  <link href="favicon.ico" rel="shortcut icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800" rel="stylesheet">

  <!-- Bootstrap CSS File -->
  <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Libraries CSS Files -->
  <link href="lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">
  <link href="lib/animate-css/animate.min.css" rel="stylesheet">

  <!-- Main Stylesheet File -->
  <link href="css/style.css" rel="stylesheet">
</head>

<body>
  <div id="preloader"></div>

  <!--==========================
  Hero Section
  ============================-->
  <section id="hero" class="animated">
    <div class="hero-container">
      <div class="animated" id="banner">
        <div class="hero-logo animated fadeInUp">
<!--           <img class="" src="img/logo-x.png" alt="Imperial" width="180px">

 -->
         <div class="lds-ripple"><div></div><div></div></div>
         </div>
        <h1>vm2</h1>
        <h2><span class="rotating">
        Virtual Machine 2,
        Arduino-based Computer Motherboard Trainer,
        Built with Arduino C++ and Web Technology</span></h2>
        <div class="actions">
          <a href="#about" id="scanBtn" class="btn-get-started">Scan</a>
          <a href="#services" class="btn-services">Our Services</a>
        </div>
      </div>
    </div>
  </section>

  <!--==========================
  Header Section
  ============================-->
 <div id="appx" class="animated fadeInDown"> 
  <header id="header" class="animated">
    <div class="container">

      <div id="logo" class="pull-left">
        <a href="#hero"><img src="./img/v2.gif" alt="" title="" /><span class="ml-2" style="font-size: 20px !important;">vm2</span></img></a>
        <!-- Uncomment below if you prefer to use a text image -->
      </div>

      <nav id="nav-menu-container">
        <ul class="nav-menu">
          <li class="menu-active"><a href="#hero">Home</a></li>
          <li><a href="#about">Scan</a></li>
          <li><a href="#services">Print Results</a></li>
          <li><a href="#portfolio">Save Results</a></li>
          <li><a href="#testimonials">Exit</a></li>
        </ul>
      </nav>
      <!-- #nav-menu-container -->
    </div>
  </header>
  <!-- #header -->

  <!--==========================
  About Section
  ============================-->
  <section id="about">
    <div class="container about-container">
      <div class="row">

        <div class="col-lg-6 about-img animated slideInLeft">
          <img src="./img/mb1.png" alt="">
        </div>

        <div class="col-md-6 about-content">
        	<ul>
              <li class="media">
                  CPU       
              </li>
            </ul>  
        </div>
      </div>
    </div>
  </section>
</div>


  <!-- Required JavaScript Libraries -->
  <script src="lib/jquery/jquery.min.js"></script>
  <script src="lib/bootstrap/js/bootstrap.min.js"></script>
  <script src="lib/superfish/hoverIntent.js"></script>
  <script src="lib/superfish/superfish.min.js"></script>
  <script src="lib/morphext/morphext.min.js"></script>
  <script src="lib/wow/wow.min.js"></script>
  <script src="lib/stickyjs/sticky.js"></script>
  <script src="lib/easing/easing.js"></script>

  <!-- Template Specisifc Custom Javascript File -->
  <script src="js/custom.js"></script>
  <script>
   window.onload = ()=>{
  		// document.getElementById("appz").focus();
  	}

    var cmd = document.body;
    cmd.addEventListener("keydown", function (e) {
    if (e.keyCode === 86) { 
    	    document.getElementById("banner").classList.add("fadeOut");
    	        	    document.getElementById("banner").classList.add("slow");
    	    document.getElementById("hero").classList.add("fadeOutUp");
    	        	    document.getElementById("hero").classList.add("slower");

    	    setTimeout(()=>{
    	    	document.getElementById("banner").style.display = "none";
    	    	document.getElementById("hero").style.display = "none";
    	    	document.getElementById("appx").style.display = "block";

    	    },1000)     	    

    	}
    });
   
  </script>


  <script src="contactform/contactform.js"></script>


</body>

</html>
