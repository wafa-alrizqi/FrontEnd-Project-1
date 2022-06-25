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
var fact_f =document.getElementById("fact-f")
fact_f=window.location.replace()


function random_fact(){
    random1 = Math.ceil(Math.random()*6)
    // var span =document.getElementById("fact-f")
    var h4 = document.getElementById("h4-fact")
    var p = document.getElementById("p-fact")
    var img = document.getElementById("img-fact")

    


    if (random1 == 1){
        h4.innerText=' Sudan has more pyramids than any country in the world'
        p.innerText=
        "Not only does Sudan have more pyramids than Egypt, but the numbers aren't even close. While 138 pyramids have been discovered in Egypt, Sudan boasts around 255. Next, see if you can answer these real Jeopardy! questions about geography."
        img.src="https://www.rd.com/wp-content/uploads/2021/05/sudan-pyramids-interesting-fact_rd.com-2-Getty-Images.jpg?resize=768,512"

    }
    else if (random1 == 2){
        h4.innerText='fact2'
        p.innerText=
        "Not only"
        img.src="https://www.rd.com/wp-content/uploads/2021/05/sudan-pyramids-interesting-fact_rd.com-2-Getty-Images.jpg?resize=768,512"
        }
    else if (random1 == 3){
        h4.innerText='fact3'
        }
    else if (random1 == 4) { 
        h4.innerText='fact4'
    }
    else if (random1 == 5) {
        h4.innerText='fact5'
        }
    else {
        h4.innerText='fact6'
    } 

}
