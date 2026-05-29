import {Routes} from '@angular/router';
import {HomePageComponent} from './features/home-page/home-page.component';
import {ProjectDetailsComponent} from './features/project-details/project-details.component';
import {projectGuardGuard} from './core/guards/project-guard-guard';

export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'projects/:name', component: ProjectDetailsComponent, canActivate: [projectGuardGuard]},
];
