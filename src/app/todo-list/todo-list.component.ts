import { Component, inject } from '@angular/core';
import { TodoListService } from '../todo-list.service';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todoItemList: TodoItem[] = [];
  todoListService: TodoListService = inject(TodoListService);

  constructor() {
    this.todoItemList = this.todoListService.getAllTodoItems();
  }

  completeHandler(e: Event): void {
    console.log(`Clicked ${e}`)
  }
}
