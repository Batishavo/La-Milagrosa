import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { PagesModule } from '../pages/pages.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PagesModule,
    AppRoutingModule
  ],
  exports:[
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
