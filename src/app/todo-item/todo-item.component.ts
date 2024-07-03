import { Component, Input } from '@angular/core';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
  host: {
    '[class.completed]': 'item.completed',
  }
})
export class TodoItemComponent {
  @Input({required: true}) item!: TodoItem;

  completeHandler(): void {
    this.item.completed = this.item.completed ? false : true;
  }
}