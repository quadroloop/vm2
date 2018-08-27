<html>
<head>
<meta name="theme-color" content="#000" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
<link rel="stylesheet" href="./css/bootstrap4.css">
<link rel="stylesheet" href="./css/vm2.css">
<link rel="stylesheet" href="./css/font-awesome.min.css">
</head>
<body>
	<nav class="navbar navbar-light nav-dark">
  <a class="navbar-brand" href="#">
    <img src="./img/v2.gif" width="50" height="50" class="d-inline-block align-top" alt="">
    <span class="logo-text"> vm2</span>
  </a>
  <button class="navbar-toggler d-none" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon" style="color:#fff !important"></span>
  </button>
      
      <div class="right">

      	   <button class="btn btn-primary mr-2">Assembly</button>
      	    <button class="btn btn-info mr-2">Dissassembly</button>
      	    <button class="btn btn-warning mr-2">Boot</button>

      </div>
</nav>
  <div class="mx-3 mt-2 pt-2">
	 <div class="row">

	 	  <div class="col-md-4 border-right mb-2">
	 	  	  <img src="./img/mb1.png" class="img-fluid">
	 	  </div>

          <div class="col-md-4 border-right">
          	   <h4 class="text-primary"><i class="fa fa-slack"></i> Parts Overview</h4>
              <ul class="list-group bg-light">
				  <li class="list-group-item">CPU / Microprocessor 
				  	<span class="float-right">
				  	    <button class="btn btn-danger"><i class="fa fa-close"></i></button>
				  	    <button class="btn btn-success"><i class="fa fa-check"></i></button>
				  	 </span>   
				  </li>
				  <li class="list-group-item">Random Access Memory 
				  	<span class="float-right">
				  	    <button class="btn btn-danger"><i class="fa fa-close"></i></button>
				  	    <button class="btn btn-success"><i class="fa fa-check"></i></button>
				  	 </span>   
				  </li>
				  <li class="list-group-item">Read Only Memory
				  	<span class="float-right">
				  	    <button class="btn btn-danger"><i class="fa fa-close"></i></button>
				  	    <button class="btn btn-success"><i class="fa fa-check"></i></button>
				  	 </span>   
				  </li>
				  <li class="list-group-item">GPU
				  	<span class="float-right">
				  	    <button class="btn btn-danger"><i class="fa fa-close"></i></button>
				  	    <button class="btn btn-success"><i class="fa fa-check"></i></button>
				  	 </span>   
				  </li>
				  <li class="list-group-item">HDD
				  	<span class="float-right">
				  	    <button class="btn btn-danger"><i class="fa fa-close"></i></button>
				  	    <button class="btn btn-success"><i class="fa fa-check"></i></button>
				  	 </span>   
				  </li>
				  <li class="list-group-item">CMOS
				  	<span class="float-right">
				  	    <button class="btn btn-danger"><i class="fa fa-close"></i></button>
				  	    <button class="btn btn-success"><i class="fa fa-check"></i></button>
				  	 </span>   
				  </li>
				</ul>
          </div>

          <div class="col-md-4">
          	  <h3>Results</h3>
          	  <hr>
          	    <p class="text-muted">
          	    	No test has been executed yet. please connect to the device, and the parser will automatically start.
          	    </p>
          	    <button class="btn btn-success"><i class="fa fa-file"></i> Save Results</button>
          	    <button class="btn btn-dark"><i class="fa fa-print"></i> Print Results</button>

          </div>

	 </div>
  </div>
</body>
</html>
