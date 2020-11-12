import { Injectable } from '@angular/core';
import {TodoModule} from '../models/todo/todo.module';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoList: Array<TodoModule> = [];

  constructor() { }

  // Getter
  public getTodoList(): Array<TodoModule> {
    return this.todoList;
  }

  public addTodo(todo: TodoModule): Array<TodoModule> {
    this.todoList.push(todo);
    return this.todoList;
  }
  public deleteTodo(todo: TodoModule): Array<TodoModule> {
    for ( let i = 0; i < this.todoList.length; i++){ if ( this.todoList[i] === todo) { this.todoList.splice(i, 1); i--; }}
    return this.todoList;
  }
}
