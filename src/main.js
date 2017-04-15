/*
* var, let, const
*/

// hoisting
function fire(bool) {

	//var foo;   -- hoisted to the top
	if (bool) {
		var foo = 'bar';

		console.log(foo); //bar
	} else {
		console.log(foo); //undefined
	}
}

fire(false);

// LET
function fire2(bool) {


	if (bool) {
		let foo = 'bar'; //let is block level

		console.log(foo); //bar
	} else {
		console.log(foo); //not defined
	}
}

// CONST
// can't be reasigned, but it can be changed
const names = ['John', 'Susan'];

names.push('Susan');
console.log(names); //prints the 3 names

names = ['Andre']; //doesn't work

//When to use? Depends, google it. But :
//Use var at the top level
//Default to using let
//Use const when you don't want to reasign
//Force immutability with:
const months = Object.freeze([]);



/*
	Default variables
*/

function applyDiscount(cost, discount = .10) {
	return cost - (cost * discount);
}

function defaultDiscount() {
	return .10;
}

function applyDiscount2(cost, discount = defaultDiscount()){
	return cost - (cost * discount);
}