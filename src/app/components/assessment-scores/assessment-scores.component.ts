import { Component } from '@angular/core';
import { AssessmentScore } from '../../models/assessmentScore';
import { AssessmentScoreService } from '../../services/assessment-score.service';

@Component({
  selector: 'app-assessment-scores',
  templateUrl: './assessment-scores.component.html',
  styleUrl: './assessment-scores.component.scss'
})
export class AssessmentScoresComponent {
  assessmentScores: AssessmentScore[]=[]
  constructor(private scores:AssessmentScoreService){
    this.assessmentScores = scores.getAssessmentScores();
  }
}
