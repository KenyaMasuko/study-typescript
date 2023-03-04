const Practice = () => {
	class Employee {
		private id: number;
		private name: string;
		private salary: number;

		work() {
			console.log("働きます");
		}

		protected getSalary(): number {
			return this.salary;
		}

		protected setSalary(salary: number): void {
			this.salary = salary;
		}
	}

	interface Shape {
		calcArea(): number;
	}

	class Client {
		private shape: Shape;
	}

	class Rectangle implements Shape {
		private width: number;
		private height: number;

		calcArea(): number {
			return this.width * this.height;
		}
	}

	class Circle implements Shape {
		private radius: number;

		calcArea(): number {
			return this.radius * Math.PI;
		}
	}

	return <div>practice</div>;
};

export default Practice;
