import { PublicationsComponent } from './publications/publications.component';
import { UndergradDocsComponent } from './undergrad-docs/undergrad-docs.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  ButtonsModule,
  CardsModule,
  CarouselModule,
  CheckboxModule,
  CollapseModule,
  NavbarModule,
  WavesModule,
  ModalModule,
  TooltipModule,
  PopoverModule,
  ModalDirective,
  TableModule,
  DropdownModule,
  BsDropdownToggleDirective,
  BsDropdownDirective,
  InputsModule,
  IconsModule,
  ChartsModule,
} from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'undergradDocs', component: UndergradDocsComponent },
  { path: 'publications', component: PublicationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    ButtonsModule,
    CardsModule,
    CarouselModule,
    WavesModule,
    CheckboxModule,
    CollapseModule,
    NavbarModule,
    FormsModule,
    IconsModule,
    NavbarModule,
    TooltipModule,
    PopoverModule,
    TableModule,
    InputsModule,
    ModalModule
  ]
})
export class AppRoutingModule { }
