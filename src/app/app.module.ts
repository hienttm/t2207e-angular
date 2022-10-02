import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentComponent} from "./student/student.component";
import {ClassroomComponent} from "./page/classroom/classroom.component";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./page/home/home.component";
import {LoginComponent} from "./page/login/login.component";
import {Route, RouterModule, Routes} from "@angular/router";
import {AboutUsComponent} from "./page/about-us/about-us.component";
import {ContactUsComponent} from "./page/contact-us/contact-us";
import {RegisterComponent} from "./page/register/register.component";
import {FoodComponent} from "./page/food/food.component";
import {HttpClientModule} from "@angular/common/http";
import {WeatherComponent} from "./page/weather/weather.component";
import {DemoExamComponent} from "./page/demo-exam/demo-exam.component";


//khai báo các page trong website:
const appRoutes: Routes =[
  {path: '',component:HomeComponent},
  {path: 'login',component:LoginComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'register',component:RegisterComponent},
  {path:'food',component:FoodComponent},
  {path:'weather',component:WeatherComponent},
  {path:'demo-exam',component:DemoExamComponent},


]

@NgModule({
  declarations: [
    AppComponent, StudentComponent, ClassroomComponent, HomeComponent, LoginComponent, AboutUsComponent, AboutUsComponent,
    ContactUsComponent,RegisterComponent,FoodComponent,WeatherComponent, DemoExamComponent


  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
