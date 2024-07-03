import { Component, inject } from '@angular/core';
import { TodoListService } from '../todo-list.service';
import { TodoItem } from '../todo-item';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [ItemComponent],
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
