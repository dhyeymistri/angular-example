import { AssessmentModel } from "./assessmentModel"

export class Cart{
    id: number
    userID: number
    assessmentArray: AssessmentModel[]
    quantityArray:number[]
    total: number

    constructor(id: number, userID:number, assArr:AssessmentModel[], quanArr:number[], t:number){
        this.id = id
        this.userID = userID
        this.assessmentArray = assArr
        this.quantityArray = quanArr
        this.total = t
    }

}