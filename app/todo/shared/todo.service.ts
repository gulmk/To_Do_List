import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class TodoService {
  todoList: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }

  getToDoList(){
    this.todoList = this.firebasedb.list('items');
    return this.todoList;
  }

  addItem(item:string){
    this.todoList.push ({
      item:item
    })
  }

  deleteItem(key:string){
    this.todoList.remove(key);
  }

  updateItem(key,value){
    this.todoList.update(key,{item:(value)});
  }
}
