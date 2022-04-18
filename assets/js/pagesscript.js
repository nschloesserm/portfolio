var elem = document.getElementById('gearone');
var elemTwo = document.getElementById('geartwo');
var elemThree = document.getElementById('gearthree');
var elemFour = document.getElementById('gearfour');
var elemFive = document.getElementById('gearfive');
var elemSix = document.getElementById('textgear');
window.addEventListener('scroll', function() {
	var value = window.scrollX * 0.05;
    var valueTwo = window.scrollX * 0.0503;
    var valueThree = window.scrollX * 0.025;
    var valueFour = window.scrollX * 0.0072;
    var valueFive = window.scrollX * 0.00365;
	elem.style.transform = `rotate(-${value}deg)`; 
    elemTwo.style.transform = `rotate(${value}deg)`;
    elemThree.style.transform = `rotate(-${valueTwo}deg)`;
    elemFour.style.transform = `rotate(${valueThree}deg)`;
    elemFive.style.transform = `rotate(-${valueFour}deg)`;
    elemSix.style.transform = `translateX(-${valueFive}rem)`;
});