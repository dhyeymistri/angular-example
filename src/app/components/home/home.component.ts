import { Component } from '@angular/core';
import { Assessment } from '../../models/assessments';
import { AssessmentService } from '../../services/assessment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
    arrAssessments:Assessment[]=[]
    byIdAssessment: Assessment = new Assessment("0","","",true)
    constructor(private assessmentService:AssessmentService, private router:Router){
        this.arrAssessments = this.assessmentService.getAssessments();
    }

    displayDetails(id: string){
        this.byIdAssessment = this.assessmentService.getAssessmentByID(id);
        console.log(this.byIdAssessment);
        this.router.navigate(['viewassessmentdetails/'+id])
    }

    // assessmentName = "A-V18";
    // arrAssessmentNames = ["Python", "ROR", "NodeJS"];
    // arrAssessments = [
    //     new Assessment(1, "ROR", "assets/images/ruby.png",true),
    //     new Assessment(2, "Angular", "assets/images/angular.png",true),
    //     new Assessment(3, "Python", "assets/images/python.png",true),
    //     new Assessment(4, "NodeJS", "assets/images/nodejs.png",false)
    // ]
    // serv = new AssessmentService();
}