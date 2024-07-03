import { Component, inject } from '@angular/core';
import { TodoListService } from '../todo-list.service';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  todoItemList: TodoItem[];
  todoService: TodoListService = inject(TodoListService);

  constructor() {
    this.todoItemList = this.todoService.getAllTodoItems();
  }

  completeHandler(id: number): void {
  //   this.item.completed = this.item.completed ? false : true;
    const todoItem = this.todoItemList.find(item => item.id === id);
    if (todoItem) {
      todoItem.completed = !todoItem.completed;
    }
  }
}
