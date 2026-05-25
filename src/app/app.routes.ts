import {Routes} from '@angular/router';
import {HomePageComponent} from './features/home-page/home-page.component';
import {ProjectDetailsComponent} from './features/project-details/project-details.component';

export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'projects/:id', component: ProjectDetailsComponent},
];
