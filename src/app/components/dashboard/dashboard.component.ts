import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Assessment } from '../../models/assessments';
import { Dashboard } from '../../models/dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  arrAssessments:Assessment[]=[]
  dashboard:Dashboard=new Dashboard('','',this.arrAssessments)
  userID:string
  constructor(private dashboardService:DashboardService){
    var tmpID = localStorage.getItem("id")
    this.userID = tmpID==null ? '' : tmpID
    this.dashboard = dashboardService.getDashboardByID(this.userID);
    this.arrAssessments = this.dashboard.assessments
  }
}
