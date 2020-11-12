import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoService} from '../../service/todo.service';
import {TodoModule} from '../../models/todo/todo.module';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()todo: TodoModule;

  @Output() deleteEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTodo(): void {
    this.deleteEmitter.emit(this.todo);
  }
}
