console.log("TASK MANAGEMENT SYSTEM")


/* 
Create a TypeScript program to manage a list of tasks. Each task should have an ID, title, description, 
status (e.g., "To Do," "In Progress," "Done"), 
and priority (e.g., "Low," "Medium," "High"). 
Implement the following features:
Define interfaces for Task and TaskManager.

The TaskManager should support adding a task, updating a task's status or priority, deleting a task, and listing all tasks by status.

Use enums for status and priority to ensure type safety.

Handle edge cases, such as attempting to delete a non-existent task.

 */



// Enums for Status and Priority
enum TaskStatus {
  ToDo = "To Do",
  InProgress = "In Progress",
  Done = "Done",
}

enum TaskPriority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

// Interface for Task
interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
}

// Interface for TaskManager
interface TaskManager {
  addTask(task: Omit<Task, "id">): Task;  // id is system generated so remove id from task 
  updateTaskStatus(id: number, status: TaskStatus): Task | null;
  updateTaskPriority(id: number, priority: TaskPriority): Task | null;
  deleteTask(id: number): boolean;
  listTasksByStatus(status: TaskStatus): Task[];
}

// TaskManager implementation
class TaskManagerImpl implements TaskManager {
  private tasks: Task[] = [];
  private nextId: number = 1;

  addTask(task: Omit<Task, "id">): Task {
    const newTask: Task = { ...task, id: this.nextId++ };
    this.tasks.push(newTask);
    return newTask;
  }

  updateTaskStatus(id: number, status: TaskStatus): Task | null {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) return null;
    task.status = status;
    return task;
  }

  updateTaskPriority(id: number, priority: TaskPriority): Task | null {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) return null;
    task.priority = priority;
    return task;
  }

  deleteTask(id: number): boolean {
    const taskIndex = this.tasks.findIndex((t) => t.id === id);
    if (taskIndex === -1) return false;
    this.tasks.splice(taskIndex, 1);
    return true;
  }

  listTasksByStatus(status: TaskStatus): Task[] {
    return this.tasks.filter((t) => t.status === status);
  }
}

// Example usage
const manager = new TaskManagerImpl();

// Adding tasks
const task1 = manager.addTask({
  title: "Write report",
  description: "Complete the annual report",
  status: TaskStatus.ToDo,
  priority: TaskPriority.High,
});

const task2 = manager.addTask({
  title: "Team meeting",
  description: "Discuss project updates",
  status: TaskStatus.InProgress,
  priority: TaskPriority.Medium,
});

console.log("All tasks:", manager.listTasksByStatus(TaskStatus.ToDo)); // Lists task1
console.log("In Progress tasks:", manager.listTasksByStatus(TaskStatus.InProgress)); // Lists task2

// Updating task
manager.updateTaskStatus(task1.id, TaskStatus.InProgress);
console.log("Updated task1:", manager.listTasksByStatus(TaskStatus.InProgress)); // Lists task1 and task2

// Deleting task
const deleted = manager.deleteTask(task2.id);
console.log("Task deleted:", deleted); // true
console.log("In Progress tasks after deletion:", manager.listTasksByStatus(TaskStatus.InProgress)); // Lists only task1

// Attempting to delete non-existent task
console.log("Delete non-existent task:", manager.deleteTask(999)); // false