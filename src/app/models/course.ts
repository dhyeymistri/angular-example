export class Course{
    courseId: number
    cName: string
    cDescription: string

    constructor(id:number, cName:string, cDesc:string){
        this.courseId = id
        this.cName = cName
        this.cDescription = cDesc
    }
}