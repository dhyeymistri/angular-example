import { options } from "./options"

export class Question{
    id: string
    qText: string
    options: string[]
    answer: string
    qType: string

    constructor(id:string, qT: string, opt:string[], ans:string, qType:string){
        this.id = id
        this.qText = qT
        this.options = opt
        this.answer = ans
        this.qType = qType
    }
}