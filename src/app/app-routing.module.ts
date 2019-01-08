import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PicnicAddParticipantComponent } from './components/picnic-add-participant/picnic-add-participant.component';
import { PicnicAddComponent } from './components/picnic-add/picnic-add.component';
import { PicnicHomeComponent } from './components/picnic-home/picnic-home.component';
import { PicnicListComponent } from './components/picnic-list/picnic-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'picnic/:id/view',
    component: PicnicListComponent,
  },
  {
    path: 'picnic/:id/add',
    component: PicnicAddParticipantComponent,
  },
  {
    path: 'add',
    component: PicnicAddComponent,
  },
  {
    path: '',
    component: PicnicHomeComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
