var elem = document.getElementById('gearone');
var elemTwo = document.getElementById('geartwo');
var elemThree = document.getElementById('gearthree');
var elemFour = document.getElementById('gearfour');
window.addEventListener('scroll', function() {
	var value = window.scrollY * 0.05;
    var valueTwo = window.scrollY * 0.0438;
    var valueThree = window.scrollY * 0.038;
	elem.style.transform = `rotate(${value}deg)`; 
    elemTwo.style.transform = `rotate(-${value}deg)`;
    elemThree.style.transform = `rotate(${valueTwo}deg)`;
    elemFour.style.transform = `rotate(-${valueThree}deg)`;
});