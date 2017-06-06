 // console.log("this works");
 // Variables should always be at the top of the page.
var myName 
var myAge = 24;
var myHobbies = ['video games','Going to concerts','watching movies']//This is an array example.

//This delcares the var myDog as an Object and assigns it various properties. 
var myDog = {
	name: 'Apollo',
	age: 2,
	likes: ['playing ball','walks','eating']
};//curly braces create objects. Objects have properties associated with them. 

myName ='Cesar Andon'; //Value for the variable of my name is placed on here. 

/*
//Below would show how to do as above but instead of in seperate lines it would be done in 1 line instead.
var myCar = 'Toyota';
console.log(myCar);
*/

/*
console.log(myName); // Variables don't have quotes around, strings require quotes around them.

console.log(myAge);

console.log(myHobbies);
*/

//Object properties are accessed via dot notation.
console.log(myDog.name);
console.log(myDog.age);

//Items within an array can be accessed via [], arrays start counting from 0. 
console.log(myDog.likes[0]);