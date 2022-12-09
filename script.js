if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.js')
      .then(() => { console.log('Service Worker Registered'); });
  }
  
function showdiv(){
    document.getElementById("optionm").style.display = "inline-flex"; 
    document.getElementById("optb").style.display = "none"; 
    document.getElementById("close").style.display = "block"; 
    document.getElementById("optionm").style.opacity = "100%"; 
}
function closediv(){
    document.getElementById("optionm").style.opacity = "0%"; 
    document.getElementById("optionm").style.display = "none"; 
    document.getElementById("optb").style.display = "block"; 
    document.getElementById("close").style.display = "none"; 
}
check();
var sl=0;
setTimeout(() => {
    if(sl<(4*screen.availWidth)){
   sl+=screen.availWidth;
   document.getElementById("slideshow").scrollLeft=sl;
   moveS();
    }else{ sl=0; moveS(); 
        document.getElementById("slideshow").scrollLeft=sl;
    }
  }, 5000)
  function moveS(){
    if(sl<(4*screen.availWidth)){
        sl+=screen.availWidth;
        document.getElementById("slideshow").scrollLeft=sl;
       
         }else {sl=0; 
            document.getElementById("slideshow").scrollLeft=sl;}
    setTimeout(() => {
      moveS();
      }, 5000)
  }
  
function check(){
 if( document.documentElement.scrollTop > 100){
document.getElementById("nav").id = "navbar"; 
document.getElementById("l2").style.display="inline-block" ;
document.getElementById("l22").style.display="inline-block" ;
document.getElementById("l1").style.display="none" ;
    document.getElementById("l11").style.display="none" ;
    
 }else{
 
    document.getElementById("navbar").id = "nav";
    document.getElementById("l2").style.display="none" ;
    
document.getElementById("l22").style.display="none" ;
document.getElementById("l1").style.display="inline-block" ;
    document.getElementById("l11").style.display="inline-block" ;
 
}}


