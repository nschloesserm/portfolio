var elem = document.getElementById('gearone');
var elemTwo = document.getElementById('geartwo');
var elemThree = document.getElementById('gearthree');
var elemFour = document.getElementById('gearfour');
var elemFive = document.getElementById('gearfive');
var elemSix = document.getElementById('textgear');
window.addEventListener('scroll', function() {
	var value = window.scrollY * 0.05;
    var valueTwo = window.scrollY * 0.0438;
    var valueThree = window.scrollY * 0.038;
    var valueFour = window.scrollY * 0.0187;
    var valueFive = window.scrollY * 0.00378;
	elem.style.transform = `rotate(-${value}deg)`; 
    elemTwo.style.transform = `rotate(${value}deg)`;
    elemThree.style.transform = `rotate(-${valueTwo}deg)`;
    elemFour.style.transform = `rotate(${valueThree}deg)`;
    elemFive.style.transform = `rotate(-${valueFour}deg)`;
    elemSix.style.transform = `translateX(-${valueFive}rem)`;
});