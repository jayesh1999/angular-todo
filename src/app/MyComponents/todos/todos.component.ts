import { Component, Input,OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Input() todo:Todo;
  todos: Todo[];
  constructor() {
    this.todos=[];
   }

   addTodo(todo){
     console.log(todo, "adding this new todo to localstorage")
     this.todos.push(todo);
     console.log("todo added successful")
    localStorage.setItem("todo",JSON.stringify(this.todos))
   
   }
  

   deleteTodo(todo){
    console.log(todo)
    const index = this.todos.indexOf(todo)
    this.todos.splice(index,1)
    console.log("item delted successfully")
    localStorage.setItem("todo",JSON.stringify(this.todos))
   }

  ngOnInit(): void {
  }

}
