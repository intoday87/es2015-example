var evens = [1,2,3,4];

// Expression bodies
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);

console.log("odds", odds);
console.log("nums", nums);

var fives = [];

// Statement bodies
nums.forEach(v => {
	if (v % 5 === 0)
		fives.push(v);
});

console.log(fives);

// Lexical this
var bob = {
	_name: "Bob",
	_friends: [],
	printFriends() {
	this._friends.forEach(f =>
		console.log(this._name + " knows " + f));
	}
};

// Lexical arguments
function square() {
	let example = () => {
		let numbers = [];
		for (let number of arguments) {
			numbers.push(number * number);
		}

		return numbers;
	};

	return example();
}

console.log(square(2, 4, 7.5, 8, 11.5, 21)); // returns: [4, 16, 56.25, 64, 132.25, 441]
