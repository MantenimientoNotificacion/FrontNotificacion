import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Persona {
  id: number;
  nombre: string;
  correoElectronico: string;
  token: string;
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const personaString = localStorage.getItem('persona');
    if (personaString) {
      const persona: Persona = JSON.parse(personaString);
      const headers = new HttpHeaders().set('Authorization', `Bearer ${persona.token}`);
      this.http.get<Persona[]>('http://localhost:8080/v1/persona/all', { headers }).subscribe(
        (data) => {
          this.personas = data;
          console.log('Personas cargadas:', this.personas);
        },
        (error) => {
          console.error('Error al cargar personas:', error);
        }
      );
    } else {
      console.warn('Token no encontrado en localStorage. No se puede cargar personas.');
    }
  }
}
