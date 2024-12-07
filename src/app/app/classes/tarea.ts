export class Tarea {
  id: number;
  nombre: string;
  estadoTarea: boolean


  constructor(id: number, nombre: string, estadoTarea: boolean) {
    this.id = id;
    this.nombre = nombre;
    this.estadoTarea = estadoTarea;
  }
}
