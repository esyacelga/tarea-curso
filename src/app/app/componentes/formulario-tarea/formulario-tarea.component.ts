import {Component, EventEmitter, Output} from '@angular/core';
import {Tarea} from "../../classes/tarea";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {JsonPipe} from "@angular/common";
import {TareaService} from "../../servicios";

@Component({
  selector: 'app-formulario-tarea',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, JsonPipe],
  templateUrl: './formulario-tarea.component.html',
  styleUrl: './formulario-tarea.component.css'
})
export class FormularioTareaComponent {
  @Output("outTarea") outTarea: EventEmitter<Tarea> = new EventEmitter<Tarea>()
  tarea: Tarea = new Tarea(0, '', false);

  constructor(public svrTarea: TareaService) {
  }

  async guardarTarea() {
    await this.svrTarea.crearTarea(this.tarea);
    this.outTarea.emit(this.tarea);
  }

}
