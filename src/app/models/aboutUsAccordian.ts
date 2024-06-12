export class aboutUsAccordian{
    acTitle: string
    acImg_path: string
    acWhat: string
    acQual:string
    outerId:string
    innerId1:string
    innerId2:string
    innerId3:string
    constructor(title:string, img_p:string, what:string, qual:string, oId:string, iId1:string, iId2:string, iId3:string,){
        this.acTitle=title
        this.acImg_path=img_p
        this.acWhat=what
        this.acQual=qual
        this.outerId=oId
        this.innerId1=iId1
        this.innerId2=iId2
        this.innerId3=iId3
    }
}