import { Question } from "./question"

export class AssessmentModel{
    assessmentID: number
    assessmentNo: number
    assessmentDate: Date
    assessmentTime: TimeRanges
    questions: Question[]
    facultyID: number

    constructor(aid:number, ano:number, adate:Date, atime:TimeRanges, qs:Question[], fid: number){
        this.assessmentID = aid
        this.assessmentNo = ano
        this.assessmentDate = adate
        this.assessmentTime = atime
        this.questions = qs
        this.facultyID = fid
    }
}