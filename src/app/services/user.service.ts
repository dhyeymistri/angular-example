import { Injectable } from '@angular/core';
import { User } from '../models/users';
import { Address } from '../models/address';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  arrUsers: User[]=[]
  baseUrl:string="http://localhost:3000"
  httpHeader={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  constructor(private httpClient: HttpClient) {
    this.arrUsers = [
      // new User(1, "john", "hugh", "john@gmail.com", "3342354897", new Date("2014-05-22"), "user","john@123", new Address(1, 7, "7th main", "rajajinagar", "Karnataka", "india", "234234")),
      // new User(2, "jane", "fi", "jane@gmail.com", "3342254897", new Date("2002-05-22"), "admin","jane@123", new Address(1, 7, "7th main", "malleshwaram", "Karnataka", "india", "555555")),
    ]
  }

  getUsers():Observable<User[]>{
    // return this.arrUsers;
    return this.httpClient.get<User[]>(this.baseUrl + '/users').pipe(catchError(this.httpError));
  }

  getUserByID(id:string){
    for(var i = 0; i < this.arrUsers.length; i++){
      if(this.arrUsers[i].id == id){
        return this.arrUsers[i];
      }
    }
    return new User("", '','', '','',new Date(''),'','',new Address(0,0,'','','','',''));
  }

  // adUser(v:any){
  //   this.arrUsers.push(new User(this.arrUsers.length+1, v.firstName, v.lastName, v.email, v.mobile, v.dob, v.role, v.password, new Address(this.arrUsers.length+1, v.houseNo, v.street, v.area, v.state, v.country, v.pincode)));
  //   console.log(this.arrUsers);
  // }

  adUser(u:User):Observable<User>{
    return this.httpClient.post<User>(this.baseUrl + '/users', JSON.stringify(u), this.httpHeader).pipe(catchError(this.httpError));
  }

  updateUser(u:User){
    // console.log(v.selectName);
    // for(var i = 0; i < this.arrUsers.length; i++){
    //   if(v.selectName == this.arrUsers[i].id){
    //     this.arrUsers[i]=v;
    //   }
    // }
    var id = u['id'];
    return this.httpClient.put<User>(this.baseUrl + '/users/'+id, JSON.stringify(u), this.httpHeader).pipe(catchError(this.httpError));

    this.arrUsers.forEach(r => {
      console.log(r);
    });
  }

  Login(log: any):boolean{
    for(var i = 0; i < this.arrUsers.length; i++){
      if(log.email == this.arrUsers[i].email){
        if(log.password == this.arrUsers[i].password) {
          console.log("password correct");
          localStorage.setItem("role", this.arrUsers[i].role);
          return false;
        } else {
          console.log("incorrect password");
          return true;
        }
      }
    }
    console.log("email not found");
    return true;
  }

  checkLogin(){
    if(localStorage.getItem("id")==null) {
      return false
    }
    return true
  }

  httpError(error:HttpErrorResponse){
    let msg='';
    if(error.error instanceof ErrorEvent){
      msg=error.error.message;
    }
    else{
      msg=`Error Code:${error.status}\nMessafe:${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }

}
