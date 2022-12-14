import { Component } from '@angular/core';
import { interval } from 'rxjs';

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
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Roberto', 'Magally', 'Hector'];
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

  // KeyValue Pipe
  persona = {
    nombre: 'Oscar',
    edad: 34,
    direccion: 'Santo Domingo, Ecuador'
  }

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Ironman',
      vuela: true
    },
    
  ]

  // Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((res, rej) => {
    setTimeout(() => {
      res('Tenemos data de promesa');
    }, 3500);
  })

}
