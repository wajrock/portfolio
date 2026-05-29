import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import projectsList from '../..//shared/projects.json';
import {Project} from '../../shared/models';

export const projectGuardGuard: CanActivateFn = (route) => {
  const router = inject(Router);
  const projects = projectsList as Project[];
  const name = route.paramMap.get('name');

  const isValid = projects.some((project) => project.name === name);

  console.log(isValid);

  if (isValid) {
    return true;
  } else {
    return router.parseUrl('');
  }
};
