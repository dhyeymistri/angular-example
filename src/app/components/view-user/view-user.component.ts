import { Component } from '@angular/core';
import { User } from '../../models/users';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.scss'
})
export class ViewUserComponent {
  arrUsers: User[] = []
  constructor(private users:UserService){
    this.arrUsers = users.getUsers();
  }
}
