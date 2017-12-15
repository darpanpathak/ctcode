import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppServiceService } from './services/app-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';

import { AppContainerComponent } from './components/app-container/app-container.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { Task2Component } from './components/task2/task2.component';
import { Task1Component } from './components/task1/task1.component';

@NgModule({
  declarations: [
    AppComponent,
    AppContainerComponent,
    HomeComponent,
    CartComponent,
    Task2Component,
    Task1Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
