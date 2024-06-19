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
      'questionID': new FormControl(this.count, Validators.required),
      'qText': new FormControl('', Validators.required),
      'options': new FormControl('', Validators.required),
      'answer': new FormControl('', Validators.required),
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
    // if (this.itineryForm.valid) {
    //   const formData = this.itineryForm.value;
    //   console.log(formdata)
    //   // this.itineries=formdata.products
    //   formdata.itineries.forEach((fmData:any)=>{
    //     console.log(fmData.activities)
    //     let arr_act_temp:Activity[]=[]
    //     fmData.activities.forEach((act:any)=>{
    //       for(var j=0;j<this.productLabels.length;j++){
    //         if(this.productLabels[j]==act){
    //           arr_act_temp.push(new Activity(j,act))
    //         }
    //       }
    //     })
    //     console.log(this.itineries);
    //     this.itineries.push(new Itinery(0,fmData.day,fmData.location,arr_act_temp))
    //   })
     
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
