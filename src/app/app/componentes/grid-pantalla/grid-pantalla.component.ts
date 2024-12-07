import {Component, Input, OnInit} from '@angular/core';
import {Tarea} from "../../classes/tarea";
import {MatTable, MatTableModule} from "@angular/material/table";
import {EstadoPipe, TareaService} from "../../servicios";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatButtonModule, MatMiniFabButton} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatTooltip} from "@angular/material/tooltip";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-grid-pantalla',
  standalone: true,
  imports: [
    MatTable,
    MatTableModule,
    EstadoPipe,
    MatCheckbox,
    MatIcon,
    MatMiniFabButton,
    MatIconModule, MatButtonModule,
    MatDividerModule, MatTooltip, HttpClientModule, FormsModule
  ],

  templateUrl: './grid-pantalla.component.html',
  styleUrl: './grid-pantalla.component.css'
})
export class GridPantallaComponent implements OnInit {

  @Input("inputLstTarea") lstTareas: Tarea[] = [];
  @Input("inputTarea") inputTarea: Tarea = new Tarea(0, '', false);
  displayedColumns: string[] = ['done', 'nombre', 'estado', 'accion'];

  constructor(public svrTarea: TareaService) {
  }

  ngOnInit(): void {
    this.cargarLista();

  }

  async cargarLista() {
    this.lstTareas = await this.svrTarea.obtenerTareas();
  }

  cambiarEstado(tarea: Tarea, nuevoEstado: boolean): void {
    tarea.estadoTarea = nuevoEstado;
    this.svrTarea.actualizarTarea(tarea);
  }

  async borrarTarea(element: Tarea) {
    await this.svrTarea.eliminarTarea(element.id)
    this.cargarLista();
  }
}
