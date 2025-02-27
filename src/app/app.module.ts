import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { CareerComponent } from './career/career.component';
import { MainlandingpageComponent } from './mainlandingpage/mainlandingpage.component';
import { CultureComponent } from './culture/culture.component';
import { EnvironmentComponent } from './environment/environment.component';
import { CommunityComponent } from './community/community.component';
import { PlacedStudentsComponent } from './placed-students/placed-students.component';
import { CompanyComponent } from './company/company.component';
import { JavaComponent } from './courses/java/java.component';
import { MernComponent } from './courses/mern/mern.component';
import { MeanComponent } from './courses/mean/mean.component';
import { DotnetComponent } from './courses/dotnet/dotnet.component';
import { TestingComponent } from './courses/testing/testing.component';
import { DevopsComponent } from './courses/devops/devops.component';
import { MoreAboutComponent } from './about/more-about/more-about.component';
import { ContactBtnComponent } from './contact-btn/contact-btn.component';
import { PopUpFromComponent } from './pop-up-from/pop-up-from.component';
import { HashLocationStrategy,LocationStrategy} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    FeaturesComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    CareerComponent,
    MainlandingpageComponent,
    CultureComponent,
    EnvironmentComponent,
    CommunityComponent,
    PlacedStudentsComponent,
    CompanyComponent,
    JavaComponent,
    MernComponent,
    MeanComponent,
    DotnetComponent,
    TestingComponent,
    DevopsComponent,
    MoreAboutComponent,
    ContactBtnComponent,
    PopUpFromComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
