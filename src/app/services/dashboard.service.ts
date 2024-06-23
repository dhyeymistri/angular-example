import { Injectable } from '@angular/core';
import { Dashboard } from '../models/dashboard';
import { Assessment } from '../models/assessments';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  arrDashboard: Dashboard[] = []
  constructor() { }
  
  getDashboardByID(id:string){
    for(var i = 0; i < this.arrDashboard.length; i++){
      if(this.arrDashboard[i].userID == id){
        return this.arrDashboard[i];
      }
    }
    return new Dashboard('','',[]);
  }

  addToDashboard(c:Cart){
    console.log(this.arrDashboard)
    console.log("check")
    for(var i = 0; i < this.arrDashboard.length; i++){
      if(this.arrDashboard[i].userID == c.userID){
        for(var j = 0; j < c.assessments.length; j++){
          for(var k = 0; k < c.cartQuantity[j]; k++){
            this.arrDashboard[i].assessments.push(c.assessments[j])
          }
        }  
        return
      }
    }
    let dashboard_id = (this.arrDashboard.length+1).toString()
    let added_assessments = []
    for(var i = 0; i < c.assessments.length; i++){
      for(var j = 0; j < c.cartQuantity[i]; j++){
        added_assessments.push(c.assessments[i]);
      }
    }
    let new_Dashboard = new Dashboard(dashboard_id,c.userID,added_assessments)
    console.log(new_Dashboard)
    this.arrDashboard.push(new_Dashboard)
    console.log(this.arrDashboard)
  }
}
