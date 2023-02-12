import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainPageComponent } from 'src/layouts/main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxCaptchaModule } from "ngx-captcha"

const appRoutes:Routes = [
  {path:'', component:MainPageComponent}
]

@NgModule({
  declarations: [
    AppComponent, 
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    NgxCaptchaModule,
  ],
  providers: [DataService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }