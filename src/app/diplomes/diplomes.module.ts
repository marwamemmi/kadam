import { NgModule } from '@angular/core';
import { DiplomesRoutingModule } from './diplomes-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListDiplomeComponent } from './list-diplome/list-diplome.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DiplomeFormComponent } from './diplome-form/diplome-form.component';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import {NgxPaginationModule} from 'ngx-pagination';
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
    NgxPaginationModule
   

  ]
})
export class DiplomesModule { }
