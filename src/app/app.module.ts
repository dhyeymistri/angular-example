import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { AssessmentScoresComponent } from './components/assessment-scores/assessment-scores.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AddAssessmentComponent } from './components/add-assessment/add-assessment.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ViewAssessmentDetailsComponent } from './components/view-assessment-details/view-assessment-details.component';
import { CartModalComponent } from './components/cart-modal/cart-modal.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    AssessmentComponent,
    AboutUsComponent,
    AdminComponent,
    ContactUsComponent,
    NgSwitchComponent,
    NgClassComponent,
    AddUserComponent,
    ViewUserComponent,
    UpdateUserComponent,
    AssessmentScoresComponent,
    LoginModalComponent,
    AddAssessmentComponent,
    ViewAssessmentDetailsComponent,
    CartModalComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatIconModule,
    // HttpClientModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
