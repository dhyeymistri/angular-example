import { Injectable } from '@angular/core';
import { User } from '../models/users';
import { Address } from '../models/address';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  arrUsers: User[]=[]
  constructor() {
    this.arrUsers = [
      new User(1, "john", "hugh", "john@gmail.com", "3342354897", new Date("2014-05-22"), "user","john@123", new Address(1, 7, "7th main", "rajajinagar", "Karnataka", "india", "234234")),
      new User(2, "jane", "fi", "jane@gmail.com", "3342254897", new Date("2002-05-22"), "user","jane@123", new Address(1, 7, "7th main", "malleshwaram", "Karnataka", "india", "555555")),
    ]
  }

  getUsers(){
    return this.arrUsers;
  }

  getUserByID(id:number){
    for(var i = 0; i < this.arrUsers.length; i++){
      if(this.arrUsers[i].userID == id){
        return this.arrUsers[i];
      }
    }
    return new User(0, '','', '','',new Date(''),'','',new Address(0,0,'','','','',''));
  }

  adUser(v:any){
    this.arrUsers.push(new User(this.arrUsers.length+1, v.firstName, v.lastName, v.email, v.mobile, v.dob, v.role, v.password, new Address(this.arrUsers.length+1, v.houseNo, v.street, v.area, v.state, v.country, v.pincode)));
    console.log(this.arrUsers);
  }
}
