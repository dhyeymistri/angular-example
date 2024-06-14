import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/users';
import { Address } from '../../models/address';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  myForm: FormGroup
  constructor(fb: FormBuilder, private userService: UserService){
    this.myForm = fb.group({
      'firstName':[''],
      'lastName':[''],
      'email':[''],
      'mobile':[''],
      'dob':[''],
      'role':['user'],
      'password':[''],
      'houseNo':[0],
      'street':[''],
      'area':[''],
      'state':[''],
      'country':[''],
      'pincode':[''],
      // 'address':[''],
      // 'uType':[''],
      // 'cType':['']
    });
  }

  onSubmit(val:any):void{
    // var tmpUser = new User(1,val['firstName'],val['lastName'], val['email'],val['mobile'],val['dob'], val['role'],val['password'], new Address(0,val['houseNo'],val['street'],val['area'],val['state'],val['country'],val['pincode']));
    this.userService.adUser(val);
  }

}
