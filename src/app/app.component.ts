import { Component } from '@angular/core';
import { resolve } from 'dns';
import { promise } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre: string = 'Capitan America';
  PI: number = Math.PI;
  porcentaje: number = 0.123;
  salario: number = 1234.5;
  contra: boolean = true;
  valorPromesa = new Promise<string>(
    (resolve) => {
      setTimeout(() => {
        resolve('Llego la data');
      }, 3500);
    }
  );
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  };
  fecha = new Date();
  nombre2: string = 'JOSUE aLirio CoreA maRtinez';
}
