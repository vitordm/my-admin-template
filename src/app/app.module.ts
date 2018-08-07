import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeadTemplateComponent } from './templates/head-template/head-template.component';
import { MenuTemplateComponent } from './templates/menu-template/menu-template.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainComponent } from './templates/main/main.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadTemplateComponent,
    MenuTemplateComponent,
    NotFoundComponent,
    MainComponent,
  ],
  imports: [
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
