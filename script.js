function change(){


const q = document.getElementById('quote')
q.textContent = "JavaScript is the world's most misunderstood programming language. --Douglas Crockford"

const inf = document.getElementsByClassName('info-box');
inf[0].style.backgroundColor = "rgb(184, 140, 46)";
inf[1].style.backgroundColor = "rgb(46, 184, 69)";
inf[2].style.backgroundColor = "rgb(110, 46, 184)";


const list = document.getElementsByTagName("li")

list[2].textContent = " Task 3 Text Changed "



document.querySelector('footer').textContent = "Have a great day"

}