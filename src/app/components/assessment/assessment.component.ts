import { Component, OnInit } from '@angular/core';
import { Assessment } from '../../models/assessments';
import { UserService } from '../../services/user.service';
import { CartService } from '../../services/cart.service';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrl: './assessment.component.scss'
})
export class AssessmentComponent{
  ifLogin:string=''
  userID:string=''
  arrAssessments = [
    new Assessment("1", "ROR", "assets/images/ruby.png",true),
    new Assessment("2", "Angular", "assets/images/angular.png", false),
    new Assessment("3", "Python", "assets/images/python.png", false),
    new Assessment("4", "NodeJS", "assets/images/nodejs.png",true),
    new Assessment("5", "NodeJS", "assets/images/nodejs.png",true),
    new Assessment("6", "ROR", "assets/images/ruby.png", false),
    new Assessment("7", "Python", "assets/images/python.png", false),
    new Assessment("8", "NodeJS", "assets/images/nodejs.png", false),
    new Assessment("9", "Angular", "assets/images/angular.png", true),
]

constructor(private userService: UserService, private cartService:CartService){
  if(!this.userService.checkLogin()){
    this.ifLogin="#loginModal"
    } else {
      this.ifLogin="#cartModal"
    }
}

addToCart(assessment: Assessment){
  var tmpID = localStorage.getItem("id")
  this.userID = tmpID==null ? '' : tmpID
  this.cartService.addToCart(assessment, this.userID);
}
}


