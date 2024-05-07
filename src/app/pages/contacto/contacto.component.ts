import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  constructor(private http: HttpClient) { }

  llamarAhora(): void {
    // Lógica para realizar la llamada
    // Por ejemplo, podrías abrir una URL de teléfono
    window.open('tel:+524454580706', '_self');
    
    // O podrías hacer una solicitud HTTP a un backend que maneje la llamada
    // Esto podría ser una solicitud POST a una API que inicie una llamada telefónica
    // this.http.post('URL_DEL_BACKEND', { data }).subscribe(response => {
    //   console.log('Llamada iniciada con éxito');
    // });
  }
}
