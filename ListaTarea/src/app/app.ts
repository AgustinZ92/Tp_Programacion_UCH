import { Component } from '@angular/core';
import { TodoListComponent } from './components/todo-list/todo-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}