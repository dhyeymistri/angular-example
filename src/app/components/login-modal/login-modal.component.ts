import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss'
})
export class LoginModalComponent {
  loginForm: FormGroup
  invalid: boolean=false

  constructor(fb: FormBuilder, private userService: UserService){
    this.loginForm = fb.group({
      'email':['', Validators.compose([Validators.email, Validators.required])],
      'password':['', Validators.required]
    });
  }

  onSubmit(val: any){
    if(this.loginForm.valid){
       this.invalid = this.userService.checkLogin(val);
    } else console.log("invalid form");
  }
}
