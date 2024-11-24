import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'; // Importa 'of' desde RxJS
import { switchMap } from 'rxjs/operators';
import { Persona } from './persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private readonly personaUrl = 'http://localhost:8080/v1/persona';
  private readonly personaKey = 'persona';

  private persona: Persona | null = null;

  constructor(private http: HttpClient) {
    this.loadStoredData();
  }

  private loadStoredData(): void {
    const storedPersona = localStorage.getItem(this.personaKey);
    if (storedPersona) {
      this.persona = JSON.parse(storedPersona);
    }
  }

  getPersona(correoElectronico: string, token: string): Observable<Persona> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(`${this.personaUrl}?correoElectronico=${correoElectronico}`, { headers }).pipe(
      switchMap((response: any) => {
        if (response && response.identificador) {
          const persona: Persona = {
            identificador: response.identificador,
            primerNombre: response.primerNombre,
            segundoNombre: response.segundoNombre,
            primerApellido: response.primerApellido,
            segundoApellido: response.segundoApellido,
            correoElectronico: response.correoElectronico,
            token: token
          };

          this.setPersona(persona);
          return of(persona); // Utiliza 'of' para devolver persona como Observable
        } else {
          throw new Error('Respuesta del servidor no tiene el formato esperado.');
        }
      })
    );
  }

  private setPersona(persona: Persona): void {
    this.persona = persona;
    localStorage.setItem(this.personaKey, JSON.stringify(persona));
    console.log("Sesión de usuario actual:", this.persona);
  }

  getStoredPersona(): Persona | null {
    return this.persona;
  }
}
