import { Assessment } from "./assessments"

export class Dashboard{
    id:string
    userID:string
    assessments:Assessment[]

    constructor(id:string, uid:string, ass:Assessment[]){
        this.id = id
        this.userID = uid
        this.assessments = ass
    }
}