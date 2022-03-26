import { Component, OnInit } from '@angular/core';
declare  var mensaje1:any; 
@Component({
  selector: 'app-base-datos',
  templateUrl: './base-datos.component.html',
  styleUrls: ['./base-datos.component.css']
})
export class BaseDatosComponent implements OnInit {
  titulo ="informacion no disponible ";
  onClick1(){
  mensaje1();

  }
  constructor() { }

  ngOnInit(): void {
  }

}
