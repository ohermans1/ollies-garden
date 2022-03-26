import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './UI/header/header.component';
import { NavComponent } from './UI/nav/nav.component';
import { FooterComponent } from './UI/footer/footer.component';
import { WhatToPlantComponent } from './what-to-plant/what-to-plant.component';
import { FreeMulchComponent } from './free-mulch/free-mulch.component';
import { CalculatorsComponent } from './calculators/calculators.component';
import { PlantItemComponent } from './what-to-plant/plant-item/plant-item.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    WhatToPlantComponent,
    FreeMulchComponent,
    CalculatorsComponent,
    PlantItemComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'free-mulch', component: FreeMulchComponent },
      { path: 'what-to-plant', component: WhatToPlantComponent },
      { path: 'calculators', component: CalculatorsComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
