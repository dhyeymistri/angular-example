import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      'firstName':['', Validators.required],
      'lastName':['', Validators.required],
      'email':['', Validators.compose([Validators.email, Validators.required])],
      'mobile':['', Validators.compose([Validators.required, Validators.pattern('^[0-9]{10}$')])],
      'dob':['', Validators.required],
      'role':['user', Validators.required],
      'password':['', Validators.compose([Validators.required])],
      'houseNo':[0, Validators.required],
      'street':['', Validators.required],
      'area':['', Validators.required],
      'state':['', Validators.required],
      'country':['', Validators.required],
      'pincode':['', Validators.required],
    });
  }

  // get f(){return this.myForm.controls;}

  onSubmit(val:any):void{
    // var tmpUser = new User(1,val['firstName'],val['lastName'], val['email'],val['mobile'],val['dob'], val['role'],val['password'], new Address(0,val['houseNo'],val['street'],val['area'],val['state'],val['country'],val['pincode']));
    if(this.myForm.valid){
      this.userService.adUser(val);
      console.log(val);
    } else console.log("Form is invalid");
  }

}
