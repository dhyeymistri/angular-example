import { Address } from "./address"

export class User{
    id:string
    firstName: string
    lastName: string
    email: string
    mobile: string
    dob: Date
    role: string
    password: string
    address:Address

    constructor(id:string, fName:string, lName:string, email:string, mbl:string, dt:Date, rl:string, pwd:string, add:Address){
        this.id = id
        this.firstName = fName
        this.lastName = lName
        this.email = email
        this.mobile = mbl
        this.dob = dt
        this.role = rl
        this.password = pwd
        this.address = add
    }
}