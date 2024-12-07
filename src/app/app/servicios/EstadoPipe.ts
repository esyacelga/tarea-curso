import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  standalone: true,
  name: 'estado'
})
export class EstadoPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'COMPLETADO' : 'INGRESADO';
  }
}
