import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogoutComponent } from './components/logout/logout.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CarouselComponent } from './components/carousel/carousel.component';

import { DonorService} from './services/donor.service';
import { NgoService} from './services/ngo.service';
import { UserService} from './services/user.service';
import { CreatecampaignComponent } from './components/createcampaign/createcampaign.component';
import { NgoComponent } from './components/createcampaign/ngo/ngo.component';
import { UserComponent } from './components/createcampaign/user/user.component';
import { FoodComponent } from './categories/food/food.component';
import { ClothesComponent } from './categories/clothes/clothes.component';
import { StudyComponent } from './categories/study/study.component';
import { RandomDonationComponent } from './categories/random-donation/random-donation.component';
import { QuantityComponent } from './components/quantity/quantity.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    LogoutComponent,
    NavbarComponent,
    NotFoundComponent,
    CarouselComponent,
    CreatecampaignComponent,
    NgoComponent,
    UserComponent,
    FoodComponent,
    ClothesComponent,
    StudyComponent,
    RandomDonationComponent,
    QuantityComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({})

  ],
  providers: [DonorService,NgoService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
