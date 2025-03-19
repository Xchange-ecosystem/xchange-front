import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {FeedComponent} from "./pages/feed/feed.component"
import { NotFoundComponent } from './core/share/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./public/public.module')
  .then(m => m.PublicModule) },
  {path: 'feed', component:FeedComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
