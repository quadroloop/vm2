// vm2.js 
// Author: Bryce Mericnes 2018

 window.onload = ()=>{
  	  if(localStorage.mode) {
         if(localStorage.mode == "os"){
            switchMode();
         }
      }else{
           localStorage.mode = "mb";
      }
  	}


  var mode = "mb";
  function switchMode() {
      var tbtn = document.getElementById("cast");
     if(mode == "mb"){
        tbtn.innerHTML = '<i class="fa fa-circle text-warning"></i> OS Simulation';
        mode = "os";
        localStorage.mode = "os";
     }else{
       tbtn.innerHTML = '<i class="fa fa-circle text-info"></i> Motherboard Diagnostics';
       mode = "mb";
       localStorage.mode = "mb";
     }
  } 

   function rpc() {
        // evaluate scan results
        var icon1state, icon2state, icon3state, icon4state ,item1state, item2state, item3state, item4state;

        if(found_parts[0] == true){
           icon1state = "circle"
           item1state = "";
        }else{
           icon1state = "times"
           item1state = "errorx";
        }

        if(found_parts[1] == true){
           icon2state = "circle"
           item2state = "";
        }else{
           icon2state = "times"
           item2state = "errorx";
        }

        if(found_parts[2] == true){
           icon3state = "circle"
           item3state = "";
        }else{
           icon3state = "times"
           item3state = "errorx";
        }


        if(found_parts[3] == true){
           icon4state = "circle"
           item4state = "";
        }else{
           icon4state = "times"
           item4state = "errorx";
        }

           var results = `<li class="list-group-item `+item1state+` animated fadeInUp delay-100">
            <i class="fa fa-`+icon1state+` text-muted"></i> PS / Power Supply (ATX)
          </li>

          <li class="list-group-item `+item2state+`  animated fadeInUp delay-300">
            <i class="fa fa-`+icon2state+` text-info"></i> CPU / Microprocessor 
          </li>

          <li class="list-group-item `+item3state+` animated fadeInUp delay-500">
            <i class="fa fa-`+icon3state+` text-warning"></i> RAM / Random-Access Memory 
          </li>

          <li class="list-group-item `+item4state+` animated fadeInUp delay-700">
            <i class="fa fa-`+icon4state+` text-success"></i> ROM / Read-Only Mermory
          </li>`;

          document.getElementById("parts").innerHTML += results;

        // animate in trigger event

        document.getElementById("vm2logo").classList.add("fadeOutUp");
        document.getElementById("bannerx").classList.add("fadeOutUp");
        document.getElementById("statusbar").classList.add("delay-200");
        document.getElementById("statusbar").classList.add("fadeUp");
        document.getElementById("status").classList.add("delay-400");
        document.getElementById("status").classList.add("bounceOut");


         setTimeout(()=>{
          document.getElementById("loader").style.display = "block";
         },2000);

         
         setTimeout(()=>{
            document.getElementById("banner").classList.add("fadeOut");
       document.getElementById("hero").classList.add("fadeOut");
       document.getElementById("hero").classList.add("slower");

       // select screen based on mode selected 
         if(localStorage.mode == "mb"){
            document.getElementById("about").style.display = "block";
         }else{
            document.body.style = "background-color:#000";
            document.getElementById("OS").style.display = "block";
         }

         },4000);



      
          setTimeout(()=>{
            document.getElementById("banner").style.display = "none";
            document.getElementById("hero").style.display = "none";
            document.getElementById("appx").style.display = "block";

            if(localStorage.mode == "os"){
                // run kernel instantly
                loadKernel();
            }

          },5000)           

   }


    function lpc() {
       document.getElementById("banner").classList.add("fadeOut");
                    document.getElementById("banner").classList.add("slow");
          document.getElementById("hero").classList.add("fadeOut");
                    document.getElementById("hero").classList.add("slower");

          setTimeout(()=>{
            document.getElementById("banner").style.display = "none";
            document.getElementById("hero").style.display = "none";
            document.getElementById("appx").style.display = "block";

          },1000)           

   }


 // setInterval(()=>{
 //       axios.get("socket.c")
 //       .then((res)=>{
 //          if(res.data != localStorage.socket){
 //              lpc();
 //              localStorage.socket = res.data;
 //          }
 //       });
 //    },200);

       var parseCount = 0;

    function pulseLoader() {
          if(parseCount == 4){
          document.getElementById("pulseArray").style.display = "block";
          setTimeout(()=>{
              document.getElementById("pulseArray").classList.add("fadeOut");
          },900);
        }
     }  


    var cmd = document.body;
    cmd.addEventListener("keydown", function (e) {
    if (e.keyCode === 86) { 
    	   rpc();
    	}
 
      // part is found
     if(e.keyCode === 51){
       parseCount++;
       found_parts.push(true);
      pulseLoader();
     } 

     // part is not found 
    if(e.keyCode === 187){
       parseCount++;
       found_parts.push(false);  
       pulseLoader();
     } 
    });


   