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
}