import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  protected todoItemList: TodoItem[] = [
    {
      id: 1,
      name: "First Todo",
      completed: true,
    },
    {
      id: 2,
      name: "Second Todo",
      completed: true,
    },
    {
      id: 3,
      name: "Third Todo",
      completed: false,
    },
    {
      id: 4,
      name: "Fourth Todo",
      completed: false,
    },
  ]

  getAllTodoItems(): TodoItem[] {
    return this.todoItemList;
  }

  getTodoItemById(id: number): TodoItem | undefined {
    return this.todoItemList.find((item) => item.id === id);
  }

  addTodoItem(item: TodoItem): boolean {
    const itemExists = this.getTodoItemById(item.id);

    if (itemExists) {
      console.error('Item already exists.');
      return false;
    }
    
    this.todoItemList.push(item);
    return true;
  }

  updateTodoItem(): void {
    // TODO: Implement updateTodoItem method.
  }
}