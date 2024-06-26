import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { AdminGuard } from './guards/adminGuard';
import { ViewAssessmentDetailsComponent } from './components/view-assessment-details/view-assessment-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"aboutus", component:AboutUsComponent},
  {path:"assessments", component:AssessmentComponent},
  {path:"admin", component:AdminComponent, canActivate:[AdminGuard()]},
  {path:"contactus", component:ContactUsComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"viewassessmentdetails/:id", component:ViewAssessmentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
