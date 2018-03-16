import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers:[TodoService]
})
export class TodoComponent implements OnInit {

  toDoListArray:any[];
  key:String ="";
  constructor(private toDoService:TodoService) { }

  ngOnInit() {
    this.toDoService.getToDoList().snapshotChanges()
    .subscribe(item =>{
      this.toDoListArray = [];

      item.forEach(element => {
        var temp = element.payload.toJSON();
        temp['key'] = element.key;
        this.toDoListArray.push(temp);

      })
    })
  }
  onAdd(itemTitle){

    if(!itemTitle.value.trim())
    return;

    if(this.key != ""){
      this.toDoService.updateItem(this.key,itemTitle.value);
    }else{
      this.toDoService.addItem(itemTitle.value);
    }
    itemTitle.value = null;
    this.key = "";
  }
  onDelete(key:string){
    this.toDoService.deleteItem(key);
    
  }
  onEdit(task,itemTitle){
    itemTitle.value = task.item;
    this.key = task.key
 
  }
}
