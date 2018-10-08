// Kernel.js
// A JavaScript Based Linux Kernel simulator for vm2 Project
// Author: Bryce Mercines

var tms = 200;
function println(output) {
	setTimeout(()=>{
	document.getElementById('boot').innerHTML += "<a id='out"+tms+"'>"+output+"</a><br>";
	// document.getElementById("axios").href= "#out"+tms;
    },tms);
    tms += 200
    	// document.getElementById("axios").click();    
}

var bytecode = found_parts;
var service = ["Memory Allocator","Network Adapter","Disk Fragmentation","GRUB File Manager","vm2 Interfacer"];

// load kernel
function loadKernel(){

   // continue boot if processor is found is good
  if(bytecode[0] == true  && bytecode[1] == true){	
  if(bytecode[3] == true){ 
  println("Running Linux....");
  println("Searching for [img]...");
  println("<span class='text-y'>vm2</span> Linux Kernel - v 0.0.1");
  println("verifiying source trees [ <span class='text-info'>"+Math.random()+"</span> ]-[ <span class='text-info'>"+Math.random()+"</span> ]-[ <span class='text-info'>"+Math.random()+"</span> ]");
  println(".... Verified !");
    println("verifiying source trees [ <span class='text-info'>"+Math.random()+"</span> ]-[ <span class='text-info'>"+Math.random()+"</span> ]-[ <span class='text-info'>"+Math.random()+"</span> ]");

  println("verifiying source trees [ <span class='text-info'>"+Math.random()+"</span> ]-[ <span class='text-info'>"+Math.random()+"</span> ]-[ <span class='text-info'>"+Math.random()+"</span> ]");

  println("verifiying source trees [ <span class='text-info'>"+Math.random()+"</span> ]-[ <span class='text-info'>"+Math.random()+"</span> ]-[ <span class='text-info'>"+Math.random()+"</span> ]");

  println("verifiying source trees [ <span class='text-info'>"+Math.random()+"</span> ]-[ <span class='text-info'>"+Math.random()+"</span> ]-[ <span class='text-info'>"+Math.random()+"</span> ]");

  println("verifiying source trees [ <span class='text-info'>"+Math.random()+"</span> ]-[ <span class='text-info'>"+Math.random()+"</span> ]-[ <span class='text-info'>"+Math.random()+"</span> ]");

  println("[ "+Math.random()+"] Checking interface drivers...");
  println("[ "+Math.random()+"] allocating fragment [fx006] to [0fcx001]");


  if(bytecode[2] == false){
    // Ram failed
     println("[<span class='text-n'>FAILED</span>] - ERROR, cannot reach address 0xc00fCC..");
     println("Retrying...");
     setTimeout(()=>{
       for(var i=0; i < 10; i++){
          println("[<span class='text-n'>FAILED</span>] - ERROR, cannot reach address 0xc"+Math.floor(Math.random() * 100)+"fCC..")
       }
       println("<span class='text-n'>fatal! - memory adresses arent accessible.. broken pipeline.</span>");
   println("cannot start any other services...");  
   println("<b>Kernel Panic!</b>");

     },5000)
   
  }else{
     for(var i=0; i < 5; i++){
          println("[<span class='text-y'>OK</span>] - Starting service [ "+service[i]+" ] at address 0xc"+Math.floor(Math.random() * 100)+"fCC..")
       }
     println("verifiying addresses.. ");  
    println("[ <span class='text-y'>OK</span> ] - Checking address: [ <span class='text-info'>"+tms+Math.random()+"</span> ];");
        println("[ <span class='text-y'>OK</span> ] - Checking address: [ <span class='text-info'>"+tms+Math.random()+"</span> ];");
    println("[ <span class='text-y'>OK</span> ] - Checking address: [ <span class='text-info'>"+tms+Math.random()+"</span> ];");
    println("[ <span class='text-y'>OK</span> ] - Checking address: [ <span class='text-info'>"+tms+Math.random()+"</span> ];");
    println("[ <span class='text-y'>OK</span> ] - Checking address: [ <span class='text-info'>"+tms+Math.random()+"</span> ];");

    println("");
    println("Done 100%");
    println("Starting GUI...");
    // call GUI
    setTimeout(()=>{
         location.href = "/windows";    
    },tms+3000);

  }

}else{
  // if HDD has failed
     println("");
     println("[ <span class='text-n'>ERROR</span> ] - No Bootable Media detected, please insert a bootable media and try again!");
}
  
 }else{
 	document.body.innerHTML = "";
 }

}