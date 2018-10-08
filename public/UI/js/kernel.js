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

// load kernel
function loadKernel(){

  if(bytecode[0] == true){	
  println("Running Linux....");
  println("Searching for [img]...");
  println("<span class='text-y'>vm2</span> Linux Kernel - v 0.0.1");
  
 }else{
 	document.body.innerHTML = "";
 }

}