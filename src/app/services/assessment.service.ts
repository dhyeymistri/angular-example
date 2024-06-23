import { Injectable } from '@angular/core';
import { Assessment } from '../models/assessments';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {
  arrAssessments:Assessment[]=[]
  constructor() {
    this.arrAssessments = [
      new Assessment("1", "ROR", "assets/images/ruby.png",true),
      new Assessment("2", "Angular", "assets/images/angular.png",true),
      new Assessment("3", "Python", "assets/images/python.png",true),
      new Assessment("4", "NodeJS", "assets/images/nodejs.png",false)
  ]
   }

   getAssessments(){
    return this.arrAssessments
   }

   getAssessmentByID(id:string){
    for(var i = 0; i < this.arrAssessments.length; i++){
      if(this.arrAssessments[i].id == id) {
        // console.log(this.arrAssessments[i].assessmentName);
        return this.arrAssessments[i];
      }
    }
    return new Assessment("0","","",true);
   }
}
