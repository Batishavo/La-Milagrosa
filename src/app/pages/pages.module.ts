import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuestrosServiciosComponent } from './nuestros-servicios/nuestros-servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import {MatIconModule} from '@angular/material/icon'; 
import { HttpClientModule } from '@angular/common/http';
import { UtilsModule } from '../utils/utils.module';


@NgModule({
  declarations: [
    NuestrosServiciosComponent,
    ContactoComponent,
    SobreNosotrosComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    HttpClientModule,
    UtilsModule
  ]
})
export class PagesModule { }
