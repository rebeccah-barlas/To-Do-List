import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-form',
  standalone: false,

  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  newTask: string = '';
  newDuration: number = 0;
  newPriority: 'HIGH' | 'NORMAL' | 'LOW' = 'NORMAL'; //default set to "normal" priority

  @Output() save = new EventEmitter<Todo>(); // emits an object of type "Todo"

  addToDo() {
    console.log('Add Todo Triggered', this.newPriority);
    if (this.newDuration > 0) {
      const newTodo: Todo = { // "const" declares a constant variable called newTodo that is of type Todo
        task: this.newTask,
        completed: false,
        duration: this.newDuration,
        priority: this.newPriority
      };
      this.save.emit(newTodo); //emitting the newTodo object through the save event that is then heard by the parent

      // below - resetting form values after the new task is added
      this.newTask = '';
      this.newDuration = 0;
      this.newPriority = 'NORMAL';
    }
  }
}
