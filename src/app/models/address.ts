import { count } from "rxjs"

export class Address{
    userID: number
    houseNo: number
    street: string
    area: string
    state: string
    country: string
    pincode: string

    constructor(id:number,hNo:number, st:string, ar:string, state:string, ctry:string, pcode:string){
        this.userID = id
        this.houseNo = hNo
        this.street = st
        this.area = ar
        this.state = state
        this.country = ctry
        this.pincode = pcode
    }
}