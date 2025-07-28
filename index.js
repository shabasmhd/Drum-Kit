for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);
}
function handleclick(){
 var b=this.innerHTML;
    make(b);
}

document.addEventListener("keypress",function(event){
    make(event.key);
    buttonAnimate(event.key);
});

function make(b) {
    switch (b) {
        case "w":
            var a=new Audio("sounds/crash.mp3");
            a.play();
            break;
     
        case "a":
            var c=new Audio("sounds/kick-bass.mp3");
            c.play();
            break;
    
        case "s":
            var d=new Audio("sounds/snare.mp3");
            d.play();
            break;
        case "d":
                var e=new Audio("sounds/tom-1.mp3");
                e.play();
                break;
        case "j":
            var f=new Audio("sounds/tom-2.mp3");
            f.play();
            break;
        case "k":
            var g=new Audio("sounds/tom-3.mp3");
            g.play();
            break;  
        case "l":
            var h=new Audio("sounds/tom-4.mp3");
            h.play();
            break;  
        default:
            break;
     }
}

function buttonAnimate(curkey) {
    var activebut=document.querySelector("."+curkey);
    activebut.classList.add("pressed");
    setTimeout(function(){
        activebut.classList.remove("pressed");
    },100);
}