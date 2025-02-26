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
import { JavaComponent } from './courses/java/java.component';
import { MernComponent } from './courses/mern/mern.component';
import { MeanComponent } from './courses/mean/mean.component';
import { TestingComponent } from './courses/testing/testing.component';
import { DevopsComponent } from './courses/devops/devops.component';
import { DotnetComponent } from './courses/dotnet/dotnet.component';

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
    path: 'mock-test', component: CultureComponent
  },
  {
    path: 'placed-students', component: EnvironmentComponent
  },
  {
    path: 'community', component: CommunityComponent
  },
  {
    path: 'courses/java', component: JavaComponent
  },
  {
    path: 'courses/mern', component: MernComponent
  },
  {
    path: 'courses/mean', component: MeanComponent
  },
  {
    path: 'courses/testing', component: TestingComponent
  },
  {
    path: 'courses/devops', component: DevopsComponent
  },
  {
    path: 'courses/dotnet', component: DotnetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
