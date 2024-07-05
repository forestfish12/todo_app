import { Component, inject } from '@angular/core';
import { TodoListService } from '../todo-list.service';
import { TodoItem } from '../todo-item';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [ItemComponent],
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
    const todoItem = this.todoItemList.find(item => item.id === id);
    if (todoItem) {
      todoItem.completed = !todoItem.completed;
    }
  }

  deleteHandler(id: number): void {
    this.todoService.deleteTodoItem(id);
    //Needs to set local list equal to the service list because the deleteTodoItem generates a new object
    this.todoItemList = this.todoService.getAllTodoItems(); 
  }

  addHandler(name: string): void {
    this.todoService.addTodoItem(name);
  }
}
