import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage.component';
import { appRoutesLazyLoad } from './lazy-load.route';
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
  InputsModule,
  IconsModule,
} from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MainpageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutesLazyLoad),
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
export class MainpageModule { }
