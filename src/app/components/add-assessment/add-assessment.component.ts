import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AssessmentModel } from '../../models/assessmentModel';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/question';

@Component({
  selector: 'app-add-assessment',
  templateUrl: './add-assessment.component.html',
  styleUrl: './add-assessment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

}) 
export class AddAssessmentComponent {
  assessment: AssessmentModel = new AssessmentModel(0,0,new Date(),[],0)
  arrQuestions: Question[] = []
  // product: Product=new Product(0,"",0,"",[]);
  questionForm: FormGroup
  count:number=0
  public questionLabels = ['MCQ', 'TF'];
  questions:Question[]=[]
  selectedQ:string[]=[]
  check:number[]=[]
  opt1:string=''
  opt2:string=''
  opt3:string=''
  opt4:string=''
  optLabel:string[]=[this.opt1, this.opt2,this.opt3,this.opt4]

  readonly panelOpenState = signal(false);

  firstFormGroup = this.formBuilder.group({
    assessmentID:['', Validators.required],
    assessmentNo:['', Validators.required],
    assessmentDate:['', Validators.required],
    facultyID:['', Validators.required],
  });
  secondFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this.formBuilder.group({

  });


  constructor(private formBuilder: FormBuilder, private questionService: QuestionService) {
    let data = this.questionService.getQuestions();
    this.arrQuestions = data;
    console.log(this.arrQuestions);

    this.questionForm = this.formBuilder.group({
      questions:this.formBuilder.array([this.createQuestionFormGroup()])
    });
  }

  onSelectionChange(s:string, i:number){
    if(this.check.length < i+1) this.check.push(0);
    if(s == this.questionLabels[0]) this.check[i] = 1;
    else if(s == this.questionLabels[1]) this.check[i] = 2;
    console.log(this.check);
  }

  private createQuestionFormGroup(): FormGroup{
    this.count++;
    return new FormGroup({
      'id': new FormControl(this.count, Validators.required),
      'qText': new FormControl('', Validators.required),
      'opt1': new FormControl('', Validators.required),
      'opt2': new FormControl('', Validators.required),
      'opt3': new FormControl('', Validators.required),
      'opt4': new FormControl('', Validators.required),
      // 'answer': new FormControl('', Validators.required),
      'qType': new FormControl('', Validators.required)
    })
  }

  public addItineryFormGroup() {
    const all_questions = this.questionForm.get('questions') as FormArray
    all_questions.push(this.createQuestionFormGroup())
  }
  
  public removeOrClearItinery(i: number) {
    this.check.pop();
    const all_questions = this.questionForm.get('questions') as FormArray
    if (all_questions.length > 1) {
      all_questions.removeAt(i)
    } else {
      all_questions.reset()
    }
  }

  saveFirstStepData(formData: FormGroup){
    // console.log(formData.value);
    this.assessment.assessmentID = formData.value.assessmentID;
    this.assessment.assessmentNo = formData.value.assessmentNo;
    this.assessment.assessmentDate = formData.value.assessmentDate;
    this.assessment.facultyID = formData.value.facultyID;
    console.log(this.assessment);
  }

  saveSecondStepData(formdata:any){
    console.log(formdata)
    this.questions=formdata.questions
      
      // this.itineries=formdata.products
      formdata.questions.forEach((fmData:any)=>{
        var noQ = this.questionService.getQuestions().length+1;
        var q = new Question(noQ.toString(),fmData.qT,[fmData.opt1,fmData.opt2,fmData.opt3,fmData.opt4],"",fmData.qType);
        this.arrQuestions.push(q);
        console.log(this.arrQuestions);
        // // this.optLabel = [this.opt1, this.opt2, this.opt3, this.opt4]
        // fmData.options.forEach((act:any)=>{
        //   for(var j=0;j<this.optLabel.length;j++){
        //     if(this.optLabel[j]==act){
        //       arr_opt_temp.push(new Option(j.toString(),act))
        //     }
        //   }
        // })
        // console.log(this.itineries);
        // this.itineries.push(new Itinery(0,fmData.day,fmData.location,arr_act_temp))
      })
    //   // Optional: Call a service to save to backend
    //   console.log('Itineries:', this.itineries);
    //   this.product.itinery=this.itineries
    //   this.arrProducts.push(this.product)
    //   this.resetForm();
    //   console.log(this.arrProducts)
    // } else {
    //   // Handle form validation errors
    // }
  }

  resetForm() {
    this.questionForm.reset();
    this.questions=[];
  }

  questionsArr(): FormArray{
    return this.questionForm.get("questions") as FormArray
  }

  
}
