import { Assessment } from "./assessments"

export class Cart{
    id:string
    userID:string
    assessments:Assessment[]
    cartQuantity:number[]
    cartTotal:number

    constructor(id:string, uid:string, ass:Assessment[],cartQ:number[],cartT:number){
        this.id = id
        this.userID = uid
        this.assessments = ass
        this.cartQuantity = cartQ
        this.cartTotal = cartT
    }
}