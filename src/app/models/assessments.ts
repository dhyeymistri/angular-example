export class Assessment{
    id:number
    assessmentName:string
    assessmentImgSrc:string
    activeBool:boolean
    constructor(id:number,aName:string,aImgSrc:string, adBool:boolean){
        this.id = id
        this.assessmentName = aName
        this.assessmentImgSrc=aImgSrc
        this.activeBool=adBool
    }
}