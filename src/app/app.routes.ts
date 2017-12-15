import { Task2Component } from './components/task2/task2.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppContainerComponent } from './components/app-container/app-container.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { Task1Component } from './components/task1/task1.component';

const routes: Routes = [
  {
    path: 'app',
    component: AppContainerComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'cart', component: CartComponent },
      { path: 'task1', component: Task1Component },
      { path: 'task2', component: Task2Component }
    ]
  },
  { path: '', redirectTo: 'app', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }