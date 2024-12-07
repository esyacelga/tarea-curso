import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Tarea} from "../../classes/tarea";
import {lastValueFrom} from "rxjs";
import {BrowserModule} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root',

})
export class TareaService {

  private apiUrl = 'http://localhost:3000/tareas'; // URL del API

  constructor(private http: HttpClient) {}

  async obtenerTareas(): Promise<Tarea[]> {
    return await lastValueFrom(this.http.get<Tarea[]>(this.apiUrl));
  }

  async actualizarTarea(tarea: Tarea): Promise<Tarea> {
    return await lastValueFrom(this.http.put<Tarea>(this.apiUrl, tarea));
  }

}
