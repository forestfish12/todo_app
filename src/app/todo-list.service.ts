import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  protected todoItemList: TodoItem[] = [
    {
      id: 1,
      title: "First Todo",
      details: "This is the first todo item",
      completed: false,
      deleted: false
    },
    {
      id: 2,
      title: "Second Todo",
      details: "This is the second todo item",
      completed: false,
      deleted: false
    },
    {
      id: 3,
      title: "Third Todo",
      details: "This is the third todo item",
      completed: false,
      deleted: false
    },
    {
      id: 4,
      title: "Fourth Todo",
      details: "This is the fourth todo item",
      completed: false,
      deleted: false
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