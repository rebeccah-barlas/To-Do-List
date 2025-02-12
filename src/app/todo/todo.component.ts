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
  ];

  searchQuery: string = '';

  addTodo(newTodo: Todo) {
    this.todos.push(newTodo)
  }

  removeTodo(index: number): void {
    this.todos.splice(index, 1); // index is the position in the array where the removal starts, 1 is the number of elements to remove starting from that position
  }

  completeTask(index: number): void {
    this.todos[index].completed = true;
  }

  allCompleted(): boolean {
    return this.todos.length > 0 && this.todos.every(todo => todo.completed);
  }
  get filteredTodos(): Todo[] {
    if (this.searchQuery) {
      return this.todos.filter(todo =>
        todo.task.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
    return this.todos;
  }
}
