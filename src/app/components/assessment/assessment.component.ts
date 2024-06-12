import { Component } from '@angular/core';
import { Assessment } from '../../models/assessments';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrl: './assessment.component.scss'
})
export class AssessmentComponent {
  arrAssessments = [
    new Assessment(1, "ROR", "assets/images/ruby.png",true),
    new Assessment(2, "Angular", "assets/images/angular.png", false),
    new Assessment(3, "Python", "assets/images/python.png", false),
    new Assessment(4, "NodeJS", "assets/images/nodejs.png",true),
    new Assessment(5, "NodeJS", "assets/images/nodejs.png",true),
    new Assessment(6, "ROR", "assets/images/ruby.png", false),
    new Assessment(7, "Python", "assets/images/python.png", false),
    new Assessment(8, "NodeJS", "assets/images/nodejs.png", false),
    new Assessment(9, "Angular", "assets/images/angular.png", true),
]
}
