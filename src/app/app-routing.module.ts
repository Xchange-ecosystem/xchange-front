import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {FeedComponent} from "./pages/feed/feed.component"
import { NotFoundComponent } from './core/share/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./public/public.module')
  .then(m => m.PublicModule) },
  { path: '**', component: NotFoundComponent },
  {
    path:'feed',
    loadComponent: () => import('src/app/pages/feed/feed.component').then(m => m.FeedComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
