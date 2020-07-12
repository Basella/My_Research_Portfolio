import { CommonModule } from '@angular/common';
import { PublicationsComponent } from './../publications/publications.component';
import { UndergradDocsComponent } from './../undergrad-docs/undergrad-docs.component';
import { MainpageComponent } from './mainpage.component';
import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';

export const appRoutesLazyLoad: Routes = [
  {
    path: '',
    component: MainpageComponent,
    children: [
      { path: '', component: AboutComponent },
      { path: 'home', component: AboutComponent },
      { path: 'docs', component: UndergradDocsComponent },
      { path: 'publications', component: PublicationsComponent }
    ],
  },
];
