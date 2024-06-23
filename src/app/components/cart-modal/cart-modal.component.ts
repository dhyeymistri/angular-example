import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart';
import { UserService } from '../../services/user.service';
import { Assessment } from '../../models/assessments';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.scss'
})
export class CartModalComponent{
  userCart:Cart=new Cart('','',[],[],0)
  cartQuantity:number[]=[]
  userID:string=''
  arrAssessments: Assessment[]=[]
  cartTotal:number=0

  constructor(private cartService: CartService, private userService:UserService, private dashboardService: DashboardService){
    var tmpID = localStorage.getItem("id")
    this.userCart = tmpID==null ? new Cart('','',[],[],0) : cartService.getCartByID(tmpID)
    this.cartTotal = this.userCart.cartTotal
    this.arrAssessments = this.userCart.assessments
    this.cartQuantity = this.userCart.cartQuantity
    console.log(cartService.getCarts())
  }

  addQuantity(i:number){
    this.userCart.cartQuantity[i]++;
    this.cartTotal = this.userCart.cartTotal++
  }
  decreaseQuantity(i:number){
    this.userCart.cartQuantity[i]--;
    this.cartTotal = this.userCart.cartTotal--
    if(this.userCart.cartQuantity[i]==0){
      this.userCart.cartQuantity.splice(i,1)
      this.userCart.assessments.splice(i,1)
      this.cartTotal = this.userCart.cartTotal--
    }
  }
  checkOut(){
    var tmpID = localStorage.getItem("id")
    if(tmpID!=null) {
      let user_cart = this.cartService.getCartByID(tmpID)
      this.dashboardService.addToDashboard(user_cart)
      // this.cartService.clearCard(tmpID)
      this.arrAssessments = this.userCart.assessments=[]
      this.cartQuantity = this.userCart.cartQuantity=[]
      this.cartTotal = this.userCart.cartTotal=0
    }
  }
}
