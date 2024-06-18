import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { AdminGuard } from './guards/adminGuard';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"aboutus", component:AboutUsComponent},
  {path:"assessments", component:AssessmentComponent},
  {path:"admin", component:AdminComponent, canActivate:[AdminGuard()]},
  {path:"contactus", component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*, {enableTracing:true}*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
