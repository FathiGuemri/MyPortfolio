import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ResumeComponent } from './components/pages/resume/resume.component';
import { ContactComponent } from './components/pages/home/contact/contact.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'resume', component: ResumeComponent},
  { path: 'portfolio', component: PortfolioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
