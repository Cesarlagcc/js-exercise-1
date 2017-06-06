var text ='The Sum is ';

function addIt(numA, numB){
	var total = numA + numB;
	console.log(text + total);
}

// addIt(10,5);
// addIt(20,20);

// console.log(text);

//meethods are functions attached to an objects

function multiply(numA, numB){
	var total = numA * numB;
	return total;

}

var myClass = "you are all great";
var kurt = {
	arms:2,
	bigNose: true,
	hairColor:'brown',
	slogan: function(what){
		console.log(what + 'is awesome');
	}
}

kurt.slogan('JavaScript ');
kurt.hairColor= 'grey';
console.log(kurt.hairColor);

console.log(myClass);

console.log(multiply(12,12));