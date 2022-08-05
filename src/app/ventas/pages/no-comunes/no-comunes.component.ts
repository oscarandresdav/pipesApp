import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Jessica'
  genero: string = 'femenino'
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente() {
    if (this.nombre === 'Jessica') {
      this.nombre = 'Oscar';
      this.genero = 'masculino'
    } else {
      this.nombre = 'Jessica';
      this.genero = 'femenino'
    }
  }

  borrarCliente() {
    this.clientes.pop();
  }

}
