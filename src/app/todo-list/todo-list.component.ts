import { Component, inject } from '@angular/core';
import { TodoListService } from '../todo-list.service';
import { TodoItem } from '../todo-item';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todoItemList: TodoItem[] = [];
  todoListService: TodoListService = inject(TodoListService);

  constructor() {
    this.todoItemList = this.todoListService.getAllTodoItems();
  }

}
