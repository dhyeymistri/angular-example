import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Assessment } from '../../models/assessments';
import { AssessmentService } from '../../services/assessment.service';

@Component({
  selector: 'app-view-assessment-details',
  templateUrl: './view-assessment-details.component.html',
  styleUrl: './view-assessment-details.component.scss'
})
export class ViewAssessmentDetailsComponent {
  assessment:Assessment=new Assessment("0",'','',false);
  constructor(private activatedRoute:ActivatedRoute, assessmentService:AssessmentService){
    this.activatedRoute.params.subscribe((params:Params)=>{
      this.assessment = assessmentService.getAssessmentByID(params['id']);
      console.log(this.assessment);
      // console.log(params['id'])
    })
  }
}
