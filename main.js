var stt =0;
let body =document.getElementById("body");
let main =document.getElementById("main");
let gallery=document.getElementsByClassName("gallery");
function wallAnit() {
    stt +=-379;
    document.getElementById("wall").style.left=stt;
    if(stt==-3032){
        stt=379;
    }
}
  body.onscroll =function(){
    if(body.scrollTop>200){
        main.style.overflow="scroll";
    }
    else{
        main.style.overflow="hidden";
    }
}
gallery[0].onclick=function(){
      location.replace("converter.html");
     }
gallery[1].onclick=function(){
    document.getElementById("load").style.display="block";
}