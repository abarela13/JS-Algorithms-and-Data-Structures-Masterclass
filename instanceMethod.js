class Student {
	constructor(firstName, lastName, year) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.grade = year;
		this.tardies = 0;
		this.scores = [];
	}
	fullName() {
		return `Your full name is ${this.firstName} ${this.lastName}`;
	}
	markLate() {
		this.tardies += 1;
		if (this.tardies >= 3) {
			return "YOU ARE EXPELLED!!!!";
		}
		return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
	}
	addScore(score) {
		this.scores.push(score);
		return this.scores;
	}
	calculateAverage() {
		let sum = this.scores.reduce(function (a, b) {
			return a + b;
		});
		return sum / this.scores.length;
	}

	// Class Method
	static EnrollStudents() {
		return "ENROLLING STUDENTS!";
	}
}

let firstStudent = new Student("Colt", "Steele", 1);
let secondStudent = new Student("Blue", "Steele", 2);

console.log(firstStudent);
console.log(secondStudent);

firstStudent.addScore(45);
firstStudent.addScore(95);
firstStudent.addScore(87);
firstStudent.addScore(91);
firstStudent.calculateAverage();

console.log(firstStudent.firstName, firstStudent.calculateAverage());

// Utility Method
Student.EnrollStudents();
