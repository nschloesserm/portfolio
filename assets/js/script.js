var elem = document.getElementById('gearone');
var elemTwo = document.getElementById('geartwo');
var elemThree = document.getElementById('gearthree');
window.addEventListener('scroll', function() {
	var value = window.scrollY * 0.05;
    var valueTwo = window.scrollY * 0.0438;
	elem.style.transform = `rotate(${value}deg)`; 
    elemTwo.style.transform = `rotate(-${value}deg)`;
    elemThree.style.transform = `rotate(${valueTwo}deg)`;
});