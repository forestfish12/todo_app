import { Component, Input } from '@angular/core';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input({required: true}) item!: TodoItem;

  completeHandler(): void {
  //   const checked: boolean | undefined = section.classList.toggle('completed');
    const checked: boolean = 
  //   if (checked) {
  //     button.innerText = 'Uncheck';
  //   } else {
  //     button.innerText = 'Check'
  //   }
  // }
}
