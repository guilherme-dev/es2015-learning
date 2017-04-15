
// == Arrow sintax
class TaskCollection {
	constructor(tasks = []) {
		this.tasks = tasks;
	}
	//old version
	logOld() {
		this.tasks.forEach(function(task) {
			console.log(task);
		});
	}
	
	log1() {
		this.tasks.forEach((task) => {
			console.log(task);
		});
	}

	log2() {
		this.tasks.forEach(task => console.log(task));
		this.tasks.forEach((task, index) => console.log(task, index));
		this.tasks.forEach(() => console.log(task));
	}

	prepare() {
		//this
		this.tasks.forEach(task => task.toGulp());

		this.tasks.forEach(task => {
			console.log(this); // same this
		})
	}

}

class Task {
	toGulp() {
		console.log('converting to gulp');
	}
}

new TaskCollection([
	new Task, new Task, new Task
]).prepare();