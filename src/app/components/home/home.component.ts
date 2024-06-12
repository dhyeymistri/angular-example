import { Component } from '@angular/core';
import { Assessment } from '../../models/assessments';
import { User } from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
    // assessmentName = "A-V18";
    // arrAssessmentNames = ["Python", "ROR", "NodeJS"];
    arrAssessments = [
        new Assessment(1, "ROR", "assets/images/ruby.png",true),
        new Assessment(2, "Angular", "assets/images/angular.png",true),
        new Assessment(3, "Python", "assets/images/python.png",true),
        new Assessment(4, "NodeJS", "assets/images/nodejs.png",false)
    ]
    Users = [
        new User(1, "Dhyey", 100),
        new User(2, "Somebody", 40)
    ]
}