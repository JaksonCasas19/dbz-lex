import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  constructor(private dbzService:DbzService){}

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre:'Vegeta',
      poder:7500
    }
  ];


  nuevo: Personaje = {
    nombre:'Maestro Roshi',
    poder:1000
  }

  agregarNuevoPersonaje(argumento:Personaje){
    this.personajes.push(argumento);
    this.play()
  }

  play(){
    var audio = new Audio('/assets/new-message-alert.mp3');
    audio.play();
}

  /*cambiarNombre(event:any){
    console.log(event.target.value);
  }*/


}
