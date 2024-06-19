import { Question } from "./question"

export class AssessmentModel{
    assessmentID: number
    assessmentNo: number
    assessmentDate: Date
    questions: Question[]
    facultyID: number

    constructor(aid:number, ano:number, adate:Date, qs:Question[], fid: number){
        this.assessmentID = aid
        this.assessmentNo = ano
        this.assessmentDate = adate
        this.questions = qs
        this.facultyID = fid
    }
}