import { Component, Input, Output,EventEmitter} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() nuevo:Personaje = {
    nombre: '',
    poder: 0
  }
  constructor(private dbzService:DbzService){}

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if (this.nuevo.nombre.trim().length === 0){
      return;
    }
    //this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    this.play();
    console.log(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }

  play(){
    var audio = new Audio('/assets/new-message-alert.mp3');
    audio.play();
  }
}
