import { Routes } from '@angular/router';
import { AboutComponent } from './portifolio/pages/about/about.component';
import { ContactComponent } from './portifolio/pages/contact/contact.component';
import { ExperienceComponent } from './portifolio/pages/experience/experience.component';
import { LinksComponent } from './portifolio/pages/links/links.component';
import { ProjectsComponent } from './portifolio/pages/projects/projects.component';
import { TechStackComponent } from './portifolio/pages/tech-stack/tech-stack.component';
import { PortifolioComponent } from './portifolio/portifolio.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/about',
  },
  {
    path: '',
    component: PortifolioComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'projects',
        component: ProjectsComponent,
      },
      {
        path: 'experience',
        component: ExperienceComponent,
      },
      {
        path: 'links',
        component: LinksComponent,
      },
      {
        path: 'stack',
        component: TechStackComponent,
      },
    ],
  },
];
