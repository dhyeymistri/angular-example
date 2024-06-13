export class AssessmentScore{
    id: number
    assessmentID: number
    traineeID: number
    score: number

    constructor(id:number, asid:number, tid:number, sc:number){
        this.id = id
        this.assessmentID = asid
        this.traineeID = tid
        this.score = sc
    }
}