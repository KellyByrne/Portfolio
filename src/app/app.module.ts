import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WhoIAmComponent } from './who-i-am/who-i-am.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FreelanceInfoComponent } from './freelance-info/freelance-info.component';
import { FooterComponent } from './footer/footer.component';
import { BlogInfoComponent } from './blog-info/blog-info.component';
import { AllSkillsSectionComponent } from './all-skills-section/all-skills-section.component';
import { AllProjectsSectionComponent } from './all-projects-section/all-projects-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProfessionalComponent } from './projects/professional/professional.component';
import { PersonalComponent } from './projects/personal/personal.component';
import { IllustratorComponent } from './projects/illustrator/illustrator.component';
import { ProjectsService } from './projects.service';
import { EachPersonalComponent } from './projects/personal/each-personal/each-personal.component';
import { PortfolioProgressComponent } from './portfolio-progress/portfolio-progress.component';
import { BrandingComponent } from './branding/branding.component';

const appRoutes : Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full' },
  {path: 'projects/professional', component: ProfessionalComponent},
  {path: 'projects/personal', component: PersonalComponent},
  {path: 'projects/personal/:id', component: EachPersonalComponent},
  {path: 'projects/illustrator', component: IllustratorComponent},
  {path: 'portfolio-process', component: PortfolioProgressComponent},
  {path: 'branding', component: BrandingComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    WhoIAmComponent,
    SkillsPageComponent,
    SkillsComponent,
    ProjectsPageComponent,
    ProjectsComponent,
    PageErrorComponent,
    HomePageComponent,
    HeaderComponent,
    FreelanceInfoComponent,
    FooterComponent,
    BlogInfoComponent,
    AllSkillsSectionComponent,
    AllProjectsSectionComponent,
    AboutMeComponent,
    ProfessionalComponent,
    PersonalComponent,
    IllustratorComponent,
    EachPersonalComponent,
    PortfolioProgressComponent,
    BrandingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
