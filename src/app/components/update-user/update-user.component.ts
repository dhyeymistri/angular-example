import { Component } from '@angular/core';
import { User } from '../../models/users';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss'
})
export class UpdateUserComponent {
  arrUsers: User[] = []
  constructor(private users:UserService){
    this.arrUsers = users.getUsers();
  }
}
