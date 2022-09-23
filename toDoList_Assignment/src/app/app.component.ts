import { Component, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from './model/list';
import { ListhttpService } from './service/listhttp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'toDoList';
  //listadded:EventEmitter<List> = new EventEmitter();
  constructor(private service: ListhttpService) { }

  name: any;
  // allbooks:Observable<List[]>;
  lists: List[] = []

  ngOnInit(): void {
    this.service.getAllList().subscribe(data => this.lists = data)
    console.log(this.lists);
  }
 
  ngOnChanges(changes: SimpleChanges): void {
    

  }
  push( name: List) {
    // this.lists.push(name);
    const e = event || window.event;
    console.log(name);
    console.log(this.lists);
    // if(e.keyCode==13)
    this.lists.unshift(name);
    console.log(this.lists);
    this.service.addtodolist(name).subscribe(data => console.log(data));
    //addtodolist()
  }

  // delete(todo: List) {

  //   let objindx = this.lists.findIndex(li => li.lname === todo.lname);
  //   let val = document.getElementById(todo.lname);
  //   if (val) {
  //     this.lists.splice(objindx, 1);
  //     this.service.deletelist(todo.id).subscribe(data => console.log(data));
  //     window.location.reload();
  //   } else
  //     alert('select the list');
  //   console.log(todo.lname);
  //   //this.service.deletelist(todo.lname);
  // }
  getsoftBooks() {
    this.service.getAllList()
  }

}
