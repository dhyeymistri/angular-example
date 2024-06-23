export class Assessment{
    id:string
    assessmentName:string
    assessmentImgSrc:string
    activeBool:boolean
    constructor(id:string,aName:string,aImgSrc:string, adBool:boolean){
        this.id = id
        this.assessmentName = aName
        this.assessmentImgSrc=aImgSrc
        this.activeBool=adBool
    }
}