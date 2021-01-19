import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClothesComponent } from './categories/clothes/clothes.component';
import { FoodComponent } from './categories/food/food.component';
import { RandomDonationComponent } from './categories/random-donation/random-donation.component';
import { StudyComponent } from './categories/study/study.component';
import { CreatecampaignComponent } from './components/createcampaign/createcampaign.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { QuantityComponent } from './components/quantity/quantity.component';


import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
 {path:'food',component:FoodComponent},
 {path:'clothes',component:ClothesComponent},
{path:'study',component:StudyComponent},
{path:'random-donation',component:RandomDonationComponent},
{path:'quantity',component:QuantityComponent},
  
  //{path:'login' , redirectTo:'LoginComponent' , pathMatch:'full'},
  {path:'login' ,component:LoginComponent},
  {path:'home' ,component:HomeComponent},

  {path:'logout',component:LogoutComponent},
  
  
  {path: 'signup',component:SignUpComponent},
  {path: 'createcampaign', component:CreatecampaignComponent},
  {path: '**' , component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
