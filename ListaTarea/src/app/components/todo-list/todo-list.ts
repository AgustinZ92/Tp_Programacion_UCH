import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoListComponent {

  newTask: string = '';

  tasks: Task[] = [];

  addTask(): void {

    if (this.newTask.trim() === '') {
      return;
    }

    const task: Task = {
      id: Date.now(),
      title: this.newTask,
      completed: false,
      createdAt: new Date()
    };

    this.tasks.push(task);

    this.newTask = '';
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  toggleTask(task: Task): void {
    task.completed = !task.completed;
  }

  get totalTasks(): number {
    return this.tasks.length;
  }

  get completedTasks(): number {
    return this.tasks.filter(task => task.completed).length;
  }

  get pendingTasks(): number {
    return this.tasks.filter(task => !task.completed).length;
  }

}