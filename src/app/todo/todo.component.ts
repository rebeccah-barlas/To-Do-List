import { Component } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo',
  standalone: false,

  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todos: Todo[] = [
    { task: "Complete bootcamp lab", completed: false, duration: 90, priority: 'HIGH' },
    { task: "Clean bathroom", completed: true, duration: 30, priority: 'LOW' },
    { task: "Do dishes", completed: false, duration: 15, priority: 'NORMAL' },
    { task: "Take car to shop", completed: true, duration: 60, priority: 'HIGH' }
  ];

  addTodo(newTodo: Todo) {
    this.todos.push(newTodo) // "push" adds to the array
  }

  removeTodo(index: number): void {
    this.todos.splice(index, 1); // index is the position in the array where the removal starts, 1 is the number of elements to remove starting from that position
  }

  completeTask(index: number): void {
    this.todos[index].completed = true;
  }
  isListEmpty(): boolean {
    return this.todos.length === 0; // strict equality - checks if the length of the todos array is exactly 0
  }
  allCompleted(): boolean {
    return this.todos.every(todo => todo.completed) // "every" method checks if all todos have the completed property set to true
  }
}
