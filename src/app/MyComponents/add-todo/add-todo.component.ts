import { Component, Output,OnInit,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

title: string;
desc:string;

@Output() todoAdd: EventEmitter<Todo>  =  new EventEmitter();

  constructor() { }

  onSubmit(){
    const todo = {
      sno : 7,
      title: this.title,
      desc : this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
    console.log("adding todo...",todo)
  }
  ngOnInit(): void {
  }

}