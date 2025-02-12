import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { CareerComponent } from './career/career.component';
import { MainlandingpageComponent } from './mainlandingpage/mainlandingpage.component';
import { CultureComponent } from './culture/culture.component';
import { EnvironmentComponent } from './environment/environment.component';
import { CommunityComponent } from './community/community.component';

const routes: Routes = [
  {
    path: '', component: MainlandingpageComponent
  },
  {
    path: 'hero', component: HeroComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'features', component: FeaturesComponent
  },
  {
    path: 'services', component: ServicesComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'career', component: CareerComponent
  },
  {
    path: 'culture', component: CultureComponent
  },
  {
    path: 'environment', component: EnvironmentComponent
  },
  {
    path: 'community' , component: CommunityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
