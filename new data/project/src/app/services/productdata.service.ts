import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {
  fetchuserDetails(usersID: number) {
    throw new Error('Method not implemented.');
  }
  getRegisteredusersID(usersID: number) {
    throw new Error('Method not implemented.');
  }
  getRegistereduserID:any;

  constructor(private http:HttpClient) { 

  }
  users(data:any){
    return this.http.post<any>("http://localhost:3000/users",data);
  }
  getData() {
    return this.http.get<any>("http://localhost:3000/users");
  }
deleteUsers(id:number){
return this.http.delete<any>("http://localhost:3000/users/"+id)
}
getRegisteredusersIDs(id:number) {
  return this.http.get<any>("http://localhost:3000/users/")
}
}
