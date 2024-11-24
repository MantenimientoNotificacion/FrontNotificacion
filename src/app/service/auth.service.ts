import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth'; // URL base de tu API

  constructor(private http: HttpClient) {}

  // Método para registrar un nuevo usuario
  register(userData: any): Observable<any> {

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/register`, userData, { headers });
  }

  // Método para iniciar sesión
  login(userData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/login`, userData, { headers });
  }

  // Método para guardar el token de autenticación en el almacenamiento local
  setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Método para obtener el token de autenticación desde el almacenamiento local
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Método para eliminar el token de autenticación del almacenamiento local (cerrar sesión)
  logout(): void {
    localStorage.removeItem('authToken');
  }
}

