import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    AssessmentScoresComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
