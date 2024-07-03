import { Injectable, inject } from '@angular/core';
import { TodoItem } from './todo-item';
import { TodoListService } from './todo-list.service';

@Injectable({
  providedIn: 'root'
})
export class ListSplitterService {
  listService: TodoListService = inject(TodoListService);
  list: TodoItem[] = this.listService.getAllTodoItems();

  // getUncompletedItems(): TodoItem[] | [] {
  //   return this.list.filter(item => !item.deleted && !item.completed);
  // }

  // getCompletedItems(): TodoItem[] | [] {
  //   return this.list.filter(item => !item.deleted && item.completed);
  // }

  getItemsByStatus(completed: boolean): TodoItem[] {
    return this.list.filter(item => !item.deleted && item.completed === completed);
  }
}
