import { CanActivateFn } from "@angular/router";

export function AdminGuard(): CanActivateFn{
    // let role = "admin";

    return()=>{
        let role = localStorage.getItem("role");
        if(role=="admin"){
            return true;
        }
        alert("sorry no access for role: "+role);
        return false;
    }
}