import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent{
  showCart:boolean=false
  loginText:string=""
  checkModal:string=''
  ModalID:string=''

constructor(private userService: UserService){
  if(this.userService.checkLogin()){
    this.showCart=true
    this.loginText="Logout"
  } else{
    this.loginText="Login"
    this.checkModal="modal"
    this.ModalID="#loginModal"
  }
}

logout(){
  if(this.loginText=="Logout"){
    localStorage.clear()
    location.reload()
  }
}
}
