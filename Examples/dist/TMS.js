"use strict";
console.log("TASK MANAGEMENT SYSTEM");
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
console.log("TASK MANAGEMENT SYSTEM");
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["ToDo"] = "To Do";
    TaskStatus["InProgress"] = "In Progress";
    TaskStatus["Done"] = "Done";
})(TaskStatus || (TaskStatus = {}));
var TaskPriority;
(function (TaskPriority) {
    TaskPriority["Low"] = "Low";
    TaskPriority["Medium"] = "Medium";
    TaskPriority["High"] = "High";
})(TaskPriority || (TaskPriority = {}));
class TaskManagerImpl {
    tasks = [];
    nextId = 1;
    addTask(task) {
        const newTask = { ...task, id: this.nextId++ };
        this.tasks.push(newTask);
        console.log(`Task added [ID: ${newTask.id}]`);
        return newTask;
    }
    updateTaskStatus(id, status) {
        const task = this.tasks.find((t) => t.id === id);
        if (!task) {
            console.warn(`Task not found with ID: ${id}`);
            return null;
        }
        task.status = status;
        return task;
    }
    updateTaskPriority(id, priority) {
        const task = this.tasks.find((t) => t.id === id);
        if (!task) {
            console.warn(`Task not found with ID: ${id}`);
            return null;
        }
        task.priority = priority;
        return task;
    }
    updateTaskDetails(id, title, description) {
        const task = this.tasks.find((t) => t.id === id);
        if (!task) {
            console.warn(`Task not found with ID: ${id}`);
            return null;
        }
        if (title)
            task.title = title;
        if (description)
            task.description = description;
        return task;
    }
    deleteTask(id) {
        const index = this.tasks.findIndex((t) => t.id === id);
        if (index === -1) {
            console.warn(`Cannot delete. Task not found with ID: ${id}`);
            return false;
        }
        this.tasks.splice(index, 1);
        return true;
    }
    getTaskById(id) {
        return this.tasks.find((t) => t.id === id) || null;
    }
    listTasksByStatus(status) {
        return this.tasks.filter((t) => t.status === status);
    }
    listTasksByPriority(priority) {
        return this.tasks.filter((t) => t.priority === priority);
    }
    listAllTasks() {
        return [...this.tasks];
    }
    markAllAsDone() {
        this.tasks.forEach(task => task.status = TaskStatus.Done);
        console.log("All tasks marked as Done.");
    }
}
// =========================
// ✅ Example Usage
// =========================
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
const task3 = manager.addTask({
    title: "Refactor code",
    description: "Clean up the old module",
    status: TaskStatus.ToDo,
    priority: TaskPriority.Low,
});
// List tasks
console.log("All Tasks:", manager.listAllTasks());
console.log("Tasks with Priority 'Low':", manager.listTasksByPriority(TaskPriority.Low));
console.log("Tasks with Status 'To Do':", manager.listTasksByStatus(TaskStatus.ToDo));
// Update title and description
manager.updateTaskDetails(task3.id, "Refactor UI code", "Improve design structure");
// Mark all as done
manager.markAllAsDone();
console.log("All Done Tasks:", manager.listTasksByStatus(TaskStatus.Done));
// Try to delete a non-existing task
console.log("Deleting non-existent task:", manager.deleteTask(999));
