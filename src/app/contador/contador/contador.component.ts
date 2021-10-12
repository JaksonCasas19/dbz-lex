import { Component } from '@angular/core';
@Component({
    selector: 'app-contador',
    template:`
    <span>{{numero}}</span>
    <br>
    <button (click)="acumular( base )">+{{base}}</button>
    <button (click)="acumular( -base )">-{{base}}</button>
    `

})
export class ContadorComponent{
  numero:number = 0;
  base:number=5;
/*
  sumar(){
    this.numero += 1;
  }
  restar(){
    this.numero -= 1;
  }*/

  acumular(valor:number){
    this.numero += valor;
  }
}