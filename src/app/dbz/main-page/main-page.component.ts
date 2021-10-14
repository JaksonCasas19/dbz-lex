import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  
  constructor(){
    
  }

  /*get personajes():Personaje[]{
    return this.dbzService.personajes;
  }*/

  nuevo: Personaje = {
    nombre:'Maestro Roshi',
    poder:1000
  }
/*
  agregarNuevoPersonaje(argumento:Personaje){
    this.personajes.push(argumento);
    this.play()
  }*/

  /*play(){
    var audio = new Audio('/assets/new-message-alert.mp3');
    audio.play();
}*/

  /*cambiarNombre(event:any){
    console.log(event.target.value);
  }*/


}
