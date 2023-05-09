import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent {

  valor:string="test"

  @Output() InputChangeCustomEvent= new EventEmitter<string>()

  @Input() nombre:string= "";

  FuncinputChange(){
    this.InputChangeCustomEvent.emit(this.valor)
  }

}
