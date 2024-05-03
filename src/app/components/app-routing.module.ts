import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from '../pages/contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';
import { NuestrosServiciosComponent } from '../pages/nuestros-servicios/nuestros-servicios.component';
import { SobreNosotrosComponent } from '../pages/sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'contacto',
        component:ContactoComponent
      },
      {
        path:'nuestro-servicio',
        component:NuestrosServiciosComponent
      },
      {
        path:'sobre-nosotros',
        component:SobreNosotrosComponent
      },
      {
        path:'**',
        redirectTo: 'nuestro-servicio'
      }
    ]  
  }
];

@NgModule({
  declarations: [
   
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule { }
