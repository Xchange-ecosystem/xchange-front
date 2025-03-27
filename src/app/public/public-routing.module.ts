import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicComponent } from './public.component';
import { HomeComponent } from './home/containers/home.component';
import { LoginComponent } from './login/containers/login.componet';
import { FeedComponent } from '../pages/feed/feed.component';
import { CommunityComponent } from '../pages/community/community.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: 
    [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      {
        path:'feed',
        loadComponent: () => import('src/app/pages/feed/feed.component').then(m => m.FeedComponent),
      },
      {
        path:'community',
        loadComponent: () => import('src/app/pages/community/community.component').then(m => m.CommunityComponent),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {}
