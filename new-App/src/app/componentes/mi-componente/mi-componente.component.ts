import { Component } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno';



@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})

export class MiComponenteComponent {
  //  nombre:string= "santiago garces"
  ClaseDinamica:string=""
  DisabledFlag:boolean=false

   alumno:Alumno={
    nombre:"nuevoAlumno",
    edad:21,
    CantPositivos:2

   }

   alumnos:Alumno[]=[]
   
   constructor(){
    this.alumnos.push(this.alumno)
  }
   incrementar(){
    this.alumno.edad++
    // console.log(this.nombre)
   }
   decrementar(){
    this.alumno.edad-=1
   }

}
