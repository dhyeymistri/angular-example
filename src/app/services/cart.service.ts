import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { Assessment } from '../models/assessments';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  arrCart:Cart[]=[]
  constructor() {
    this.arrCart=[
      new Cart("1","1",[new Assessment("1", "ROR", "assets/images/ruby.png",true), new Assessment("2", "Angular", "assets/images/angular.png",true)],[1,2], 3),
      new Cart("2","2",[new Assessment("3", "Python", "assets/images/python.png",true),
        new Assessment("4", "NodeJS", "assets/images/nodejs.png",false)],[2,1], 3)
    ]
    console.log(this.arrCart)
  }

  getCartByID(id:string){
    for(var i = 0; i < this.arrCart.length; i++){
      if(this.arrCart[i].userID == id){
        return this.arrCart[i];
      }
    }
    return new Cart('','',[],[],0);
  }

  addToCart(a:Assessment, id:string){
    for(var i = 0; i < this.arrCart.length; i++){
      if(this.arrCart[i].userID == id){
        for(var j = 0; j < this.arrCart[i].assessments.length; j++){
          if(this.arrCart[i].assessments[j].assessmentName == a.assessmentName){
            this.arrCart[i].cartQuantity[j]++
            this.arrCart[i].cartTotal++
            console.log(this.arrCart)
            return
          }
        }
        this.arrCart[i].assessments.push(a)
        this.arrCart[i].cartQuantity.push(1)
        this.arrCart[i].cartTotal++
        console.log(this.arrCart)
        return
      }
    }
    var cartL = (this.arrCart.length+1).toString()
    var tmpCart = new Cart(cartL,id,[a],[1],1)
    this.arrCart.push(tmpCart)
    return
  }

  clearCard(id:string){
    for(var i = 0; i < this.arrCart.length; i++){
      if(this.arrCart[i].userID == id){
        this.arrCart[i].assessments=[]
        this.arrCart[i].cartQuantity=[]
        this.arrCart[i].cartTotal=0
        console.log(this.arrCart[i])
      }
    }
  }

  

  getCarts(){
    return this.arrCart
  }
}
