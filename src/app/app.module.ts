import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule, ModalModule, ButtonsModule, WavesModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/pages/home/header/header.component';
import { WhatIDoComponent } from './components/pages/home/what-ido/what-ido.component';
import { TestimonialsComponent } from './components/pages/home/testimonials/testimonials.component';
import { ContactComponent } from './components/pages/home/contact/contact.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ResumeComponent } from './components/pages/resume/resume.component';
import { ExperienceComponent } from './components/pages/resume/experience/experience.component';
import { SkillsComponent } from './components/pages/resume/skills/skills.component';
import { CertificatesComponent } from './components/pages/resume/certificates/certificates.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { PromptComponent } from './prompt/prompt.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent,
    WhatIDoComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
    ResumeComponent,
    ExperienceComponent,
    SkillsComponent,
    CertificatesComponent,
    PortfolioComponent,
    PromptComponent
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    ModalModule,
    ButtonsModule,
    WavesModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule,
    MatBottomSheetModule,
    MatIconModule,
    MatToolbarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
