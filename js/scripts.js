function myFunction() {
    var x = document.getElementById("startDIV");
    var y = document.getElementById("contentDIV"); 

    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display="none"
    } else {
      x.style.display = "none";
      y.style.display="block"

    }
}
var contentDIV =document.getElementById("contentDIV")
contentDIV=window.location.replace()


function random_fact(){
    random1 = Math.ceil(Math.random()*6)
    var span =document.getElementById("fact-f")

    if (random1 == 1){
        span.innerText='fact1'
    }
    else if (random1 == 2){
        span.innerText='fact2'
        }
    else if (random1 == 3){
        span.innerText='fact3'
        }
    else if (random1 == 4) { 
        span.innerText='fact4'
    }
    else if (random1 == 5) {
        span.innerText='fact5'
        }
    else {
        span.innerText='fact6'
    } 

}
