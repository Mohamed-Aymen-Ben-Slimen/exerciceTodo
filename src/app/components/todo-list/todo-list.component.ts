import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TodoModule} from '../../models/todo/todo.module';
import {TodoService} from '../../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: Array<TodoModule>;

  todoNom: string;
  todoContenu: string;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoList = this.todoService.getTodoList();
  }
  addTodo(): void {
    const todo = new TodoModule(this.todoNom, this.todoContenu);
    if (todo.isValid()) {
      this.todoList = this.todoService.addTodo(todo);
    }
  }
  deleteTodo(todo: TodoModule): void {
    this.todoList = this.todoService.deleteTodo(todo);
  }
}
