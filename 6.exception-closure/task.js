function parseCount(valueToParse) {
	let parsed = Number.parseFloat(valueToParse);
	if (isNaN(parsed)) {
		throw new Error('Невалидное значение');
	}
	return parsed;
}

function validateCount(valueToParse) {
	try {
		return parseCount(valueToParse);
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if (a + b < c || a + c < b || b + c < a) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}

	get perimeter() {
		return Number(this.a + this.b + this.c);
	}

	get area() {
		let p = this.perimeter / 2;
		let s = Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
		return s;
	}
}


function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get perimeter() {
				return "Ошибка! Треугольник не существует"
			},
			get area() {
				return "Ошибка! Треугольник не существует"
			}
		}
	}
} 

getTriangle(2, 5, 5);

const triangle4 = getTriangle(1,3,100);
triangle4.area;
triangle4.perimeter;

const triangle5 = getTriangle(1,3,100);
triangle5.perimeter = "неправильное значение";
triangle5.area = "неправильное значение";
triangle5.area;
triangle5.perimeter;