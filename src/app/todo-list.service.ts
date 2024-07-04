import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  protected idCount = 5;

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

  addTodoItem(name: string): boolean {

    
    this.todoItemList.push({
      name: name,
      id: this.idCount,
      completed: false
    });

    this.idCount++;

    return true;
  }

  updateTodoItem(): void {
    // TODO: Implement updateTodoItem method.
  }

  updateList(list: Array<TodoItem>): void {
    this.todoItemList = list;
    console.log(this.todoItemList);
  }

  deleteTodoItem(id: number): void {
    this.todoItemList = this.todoItemList.filter(item => item.id !== id);
    console.log(this.getAllTodoItems());
  }
}