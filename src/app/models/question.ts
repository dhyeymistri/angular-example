export class Question{
    questionID: number
    qText: string
    options: string[]
    answer: string
    qType: string

    constructor(id:number, qT: string, opt:string[], ans:string, qType:string){
        this.questionID = id
        this.qText = qT
        this.options = opt
        this.answer = ans
        this.qType = qType
    }
}