import { PublicationsComponent } from './publications/publications.component';
import { UndergradDocsComponent } from './undergrad-docs/undergrad-docs.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/mainpage/mainpage.module').then(
        (m) => m.MainpageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
