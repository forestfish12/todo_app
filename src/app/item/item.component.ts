import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'todo-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
  host: {"[class.completed]":"item.completed"}
})
export class ItemComponent {
  @Input() item!: TodoItem;
  @Output() onComplete = new EventEmitter<number>();
  @Output() onDelete = new EventEmitter<number>();
  
  changeHandler(id: number): void {
    this.onComplete.emit(id);
  }

  deleteHandler(id: number): void {
    this.onDelete.emit(id)
  }
}


