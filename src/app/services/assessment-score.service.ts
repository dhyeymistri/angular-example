import { Injectable } from '@angular/core';
import { AssessmentScore } from '../models/assessmentScore';

@Injectable({
  providedIn: 'root'
})
export class AssessmentScoreService {
  assessmentScores: AssessmentScore[] = []
  constructor() {
    this.assessmentScores = [
      new AssessmentScore(1, 1, 1, 34),
      new AssessmentScore(2, 2, 1, 67),
      new AssessmentScore(4, 3, 1, 90),
      new AssessmentScore(4, 4, 2, 0),
      new AssessmentScore(4, 5, 2, 80),
      new AssessmentScore(4, 6, 2, 70),
    ]
  }

  getAssessmentScores(){
    return this.assessmentScores;
  }
}
