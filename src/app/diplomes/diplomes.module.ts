import { NgModule } from '@angular/core';
import { DiplomesRoutingModule } from './diplomes-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListDiplomeComponent } from './list-diplome/list-diplome.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DiplomeFormComponent } from './diplome-form/diplome-form.component';



@NgModule({
  declarations: [
    ListDiplomeComponent,
    DiplomeFormComponent,
   
  
  ],
  imports: [
    DiplomesRoutingModule,
    FormsModule,
    CommonModule,
    Ng2SearchPipeModule,


  ]
})
export class DiplomesModule { }
