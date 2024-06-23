import { Component } from '@angular/core';
import { User } from '../../models/users';
import { UserService } from '../../services/user.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address } from '../../models/address';
import { formatDate } from '@angular/common';



@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss'
})

export class UpdateUserComponent {
  myForm: FormGroup
  user:User
  users:User[]=[]
  idUpdated:string=''

  constructor(fb: FormBuilder, private userService: UserService){
    // this.users = userService.getUsers();
    this.userService.getUsers().subscribe(data=>{
      this.users = data
      console.log(this.users)
    })
    this.user = new User('','','','','',new Date,'','',new Address(0,0,'','','','',''));

    this.myForm = fb.group({
      'selectName':['', Validators.required],
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
      // this.userService.updateUser(val);
      // console.log(val['selectedName']);
      var tmpUser = new User(val['selectName'],val['firstName'],val['lastName'], val['email'],val['mobile'],val['dob'], val['role'],val['password'], new Address(0,val['houseNo'],val['street'],val['area'],val['state'],val['country'],val['pincode']));
      this.userService.updateUser(tmpUser).subscribe(data=>{
        console.log("updated: "+data);
      })
    } else console.log("form is invalid");
  }

  onChangeType(e: any):void{
    // console.log(e.target.value);

    var idObtained = e.target.value;
    this.idUpdated = idObtained.split(':')[1].trim();
    console.log(this.idUpdated);

    for(var i = 0; i < this.users.length;i++){
      if(this.idUpdated == this.users[i].id)
        this.user = this.users[i];
    }
    // var newDate = this.user.dob;
    // formatDate(newDate,'yyyy-MM-dd',"en-US");

    this.myForm.get('firstName')?.setValue(this.user.firstName.toString());
    // this.myForm.get('selectName')?.setValue(this.user.userID.toString());
    this.myForm.get('lastName')?.setValue(this.user.lastName.toString());
    this.myForm.get('email')?.setValue(this.user.email.toString());
    this.myForm.get('mobile')?.setValue(this.user.mobile.toString());
    this.myForm.get('dob')?.setValue(this.user.dob);
    this.myForm.get('password')?.setValue(this.user.password.toString());
    this.myForm.get('houseNo')?.setValue(this.user.address.houseNo.toString());
    this.myForm.get('street')?.setValue(this.user.address.street.toString());
    this.myForm.get('area')?.setValue(this.user.address.area.toString());
    this.myForm.get('state')?.setValue(this.user.address.state.toString());
    this.myForm.get('country')?.setValue(this.user.address.country.toString());
    this.myForm.get('pincode')?.setValue(this.user.address.pincode.toString());
  }

}

