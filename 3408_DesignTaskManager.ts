class TaskManager {
	constructor(private tasks: number[][]) {}

	add(userId: number, taskId: number, priority: number): void {
		this.tasks.push([userId, taskId, priority]);
		this.tasks.sort((a: number[], b: number[]) => (a[2] || 0) - (b[2] || 0));
	}

	edit(taskId: number, newPriority: number): void {}

	rmv(taskId: number): void {}

	execTop(): number {}
}

const taskManager = new TaskManager([[4, 104, 5], [102, 8], [], [101], [5, 105, 15], []]);

taskManager.add(0, 0, 0);
