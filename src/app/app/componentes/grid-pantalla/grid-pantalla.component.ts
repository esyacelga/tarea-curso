import {Component, Input, OnInit} from '@angular/core';
import {Tarea} from "../../classes/tarea";
import {MatTable, MatTableModule} from "@angular/material/table";
import {EstadoPipe} from "../../servicios";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatButtonModule, MatMiniFabButton} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-grid-pantalla',
  standalone: true,
  imports: [
    MatTable,
    MatTableModule,
    EstadoPipe,
    MatCheckbox,
    MatIcon,
    MatMiniFabButton, MatIconModule, MatButtonModule, MatDividerModule, MatTooltip
  ],

  templateUrl: './grid-pantalla.component.html',
  styleUrl: './grid-pantalla.component.css'
})
export class GridPantallaComponent implements OnInit {

  @Input("inputLstTarea") lstTareas: Tarea[] = [];
  @Input("inputTarea") inputTarea: Tarea = new Tarea(0, '', false);
  displayedColumns: string[] = ['done', 'nombre', 'estado', 'accion'];

  ngOnInit(): void {
    if (this.inputTarea.estadoTarea)
      this.lstTareas.push(this.inputTarea)
  }

  cambiarEstado(element: Tarea) {
    element.estadoTarea = !element.estadoTarea;
  }

  borrarTarea(element: Tarea) {
    this.lstTareas = this.lstTareas.filter(t => t.id !== element.id);
  }
}
