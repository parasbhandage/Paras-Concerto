import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../model/list';
@Injectable({
  providedIn: 'root'
})
export class ListhttpService {
  url:string = "http://localhost:3000/lists";

  constructor(private http:HttpClient) { }

  getAllList():Observable<any[]>
  {
    return this.http.get<any[]>(this.url);
  }
  addtodolist(todo:List):Observable<List>
  {
    return this.http.post<List>(this.url,todo);
  }
  deletelist(id:number){
    //lists?lname=Books%20shopping
    
    console.log(id);
    return this.http.delete(this.url+"/"+id);
  }
}
