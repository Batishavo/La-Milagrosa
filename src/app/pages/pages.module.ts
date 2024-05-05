import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuestrosServiciosComponent } from './nuestros-servicios/nuestros-servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { MapModule } from '../utils/map/map.module';
import {MatIconModule} from '@angular/material/icon'; 



@NgModule({
  declarations: [
    NuestrosServiciosComponent,
    ContactoComponent,
    SobreNosotrosComponent
  ],
  imports: [
    CommonModule,
    MapModule,
    MatIconModule
  ]
})
export class PagesModule { }
