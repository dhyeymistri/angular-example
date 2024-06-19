import { Injectable } from '@angular/core';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  arrQuestions: Question[]=[]
  constructor() {
    this.arrQuestions=[
      new Question(1, "What is your name?", [],"answer1", "MCQ"),
      new Question(2, "true or false?", [],"true", "TF")
    ]
  }

  getQuestions(){
    return this.arrQuestions
  }
}
