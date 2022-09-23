import { Component, Input, OnInit } from '@angular/core';
import { List } from '../model/list';
import { ListhttpService } from '../service/listhttp.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  list: List []=[];

  isDisabled: boolean = false;
  constructor(private service: ListhttpService) { 

  }

  ngOnInit(): void {

  }

  delete(todo: List) {

    let objindx = this.list.findIndex(li => li.lname === todo.lname);
    let val = <HTMLInputElement>document.getElementById("checkbox"+todo.id) !;
    ;
    
    if (val.checked) {
      this.list.splice(objindx, 1);
      this.service.deletelist(todo.id).subscribe(data => data=todo);
    } else 
      alert('select the checkbox');
    console.log(todo.lname);
  }
}
