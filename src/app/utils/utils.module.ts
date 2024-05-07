import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { ResenasComponent } from './resenas/resenas.component';
import { GaleriaComponent } from './galeria/galeria.component';



@NgModule({
  declarations: [
    MapComponent,
    ResenasComponent,
    GaleriaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MapComponent,
    ResenasComponent,
    GaleriaComponent
  ]
})
export class UtilsModule { }
