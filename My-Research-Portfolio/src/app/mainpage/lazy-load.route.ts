import { PublicationsComponent } from './../publications/publications.component';
import { UndergradDocsComponent } from './../undergrad-docs/undergrad-docs.component';
import { MainpageComponent } from './mainpage.component';
import { Routes } from '@angular/router';

export const appRoutesLazyLoad: Routes = [
  {
    path: '',
    component: MainpageComponent,
    children: [
      { path: '', component: UndergradDocsComponent },
      { path: 'home', component: UndergradDocsComponent },
      { path: 'publications', component: PublicationsComponent }
    ],
  },
];
