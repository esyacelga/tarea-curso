import {Component, ViewChild} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardModule} from "@angular/material/card";
import {FormularioTareaComponent} from "../formulario-tarea/formulario-tarea.component";
import {GridPantallaComponent} from "../grid-pantalla/grid-pantalla.component";
import {ComportamientoPantalla} from "../../classes/comportamiento-pantalla";
import {JsonPipe, NgIf} from "@angular/common";
import {MatDivider} from "@angular/material/divider";
import {MatTooltip} from "@angular/material/tooltip";
import {Tarea} from "../../classes/tarea";

@Component({
  selector: 'app-contenedor-pantalla',
  standalone: true,
  imports: [MatButtonModule, MatCard, MatCardContent,
    MatCardModule,
    FormularioTareaComponent, GridPantallaComponent, MatCardHeader, MatCardActions, NgIf, MatDivider, MatTooltip, JsonPipe],
  templateUrl: './contenedor-pantalla.component.html',
  styleUrl: './contenedor-pantalla.component.css'
})
export class ContenedorPantallaComponent {
  comportarmiento: ComportamientoPantalla = ComportamientoPantalla.GRID
  tarea!: Tarea;
  @ViewChild('hijo') hijo!: FormularioTareaComponent;
  lstTareas: Tarea[] = [];

  setearOpcion(opcion: ComportamientoPantalla) {
    this.comportarmiento = opcion;

  }

  guardarTarea(opcion: ComportamientoPantalla) {
    this.hijo.guardarTarea();
    this.comportarmiento = opcion;
  }

  protected readonly ComportamientoPantalla = ComportamientoPantalla;

  cargarTarea($event: Tarea) {
    this.tarea = $event;
    this.lstTareas.push($event)
  }
}
