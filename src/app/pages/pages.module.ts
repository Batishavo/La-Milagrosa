import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuestrosServiciosComponent } from './nuestros-servicios/nuestros-servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';



@NgModule({
  declarations: [
    NuestrosServiciosComponent,
    ContactoComponent,
    SobreNosotrosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
