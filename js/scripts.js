function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in username');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in username and password');

    }else if(pw.value.length > 8){
        alert('Max of 8');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        window.location.href = 'sign-in.html';
        alert('Your account has been created');
    }
}

function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    if(userName.value == storedName && userPw.value == storedPw){
        window.location.href = 'index.html';
        alert('You are logged in.');
        }else{
        alert('Error on login');
    }
}

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
    var h4 = document.getElementById("h4-fact")
    var p = document.getElementById("p-fact")
    var img = document.getElementById("img-fact")

    if (random1 == 1){
        h4.innerText='Sudan has more pyramids than any country in the world'
        p.innerText=
        "Not only does Sudan have more pyramids than Egypt, but the numbers aren't even close. While 138 pyramids have been discovered in Egypt, Sudan boasts around 255. Next, see if you can answer these real Jeopardy! questions about geography."
        img.src="https://www.rd.com/wp-content/uploads/2021/05/sudan-pyramids-interesting-fact_rd.com-2-Getty-Images.jpg?resize=768,512"

    }
    else if (random1 == 2){
        h4.innerText='The circulatory system is more than 60,000 miles long'
        p.innerText=
        "If a child’s entire circulatory system—we're talking veins, arteries, and capillaries—were laid out flat, it would stretch for more than 60,000 miles, according to the Franklin Institute. By the time we reach adulthood, our bodies have become home to approximately 100,000 miles of blood vessels. That's just one of the mind-blowing facts that sound made up (but aren't)."
        img.src="https://www.rd.com/wp-content/uploads/2021/05/circulatory-system-miles-long-interesting-fact_rd.com-2-getty-images.jpg?resize=768,512"
        }
    else if (random1 == 3){
        h4.innerText='The cornea is one of only two parts of the human body without blood vessels'
        p.innerText=
        "The cornea is the clear part of the eye that covers the pupil and other parts of the eye. Cartilage and the cornea are the only types tissue in the human body that do not contain blood vessels, according to scientists at the Harvard Department of Ophthalmology's Schepens Eye Research Institute. Your eye also has some other bizarre features you probably did't know about."
        img.src="https://www.rd.com/wp-content/uploads/2021/05/cornea-no-blood-vessels-interesting-fact_rd.com-getty-images.jpg?resize=768,512"
        }
    else if (random1 == 4) { 
        h4.innerText='The Philippines consists of 7,641 islands'
        p.innerText=
        "The Philippines is an archipelago, which means it's made up of a group of islands—7,641 islands, to be exact. That figure does not include the thousands of sandbars and other landforms that emerge during low tide."
        img.src="https://www.rd.com/wp-content/uploads/2021/05/phillipines-many-islands-interesting-facts_rd.com-2-getty-images.jpg?resize=768,512"
        }
    else if (random1 == 5) {
        h4.innerText="There's enough gold inside Earth to coat the planet"
        p.innerText=
        "Turns out, there's quite a bit of gold on—or, really, in—our planet: 99 percent of the precious metal can be found in the Earth's core, Discover Magazine reports. How much is there? Enough to coat the entire surface of the Earth in 1.5 feet of gold."
        img.src="https://www.rd.com/wp-content/uploads/2021/05/split-screen-earth-and-gold-orb.jpg?resize=768,512"
        }
    else {
        h4.innerText="Japan has one vending machine for every 40 people"
        p.innerText=
        "Japan is thought to have one of the highest densities of vending machines in the world, with one for every 40 people in the country. While most sell various types of beverages, others feature ice cream, noodles, and disposable cameras."
        img.src="https://www.rd.com/wp-content/uploads/2021/11/japan-vending-machines-interesting-fact_rd.com-2-Getty-Images.jpg?resize=768,512"
        }
}
function myDark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
