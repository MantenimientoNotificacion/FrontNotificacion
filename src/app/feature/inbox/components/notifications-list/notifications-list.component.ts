import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, switchMap, map } from 'rxjs/operators';
import { Persona } from 'src/app/service/persona.model';
import { BuzonNotificacion } from 'src/app/service/buzon-notificacion.model';
import { Notificacion } from 'src/app/service/notificacion.model';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.scss']
})
export class NotificationsListComponent implements OnInit {
  notificaciones: Notificacion[] = [];
  private readonly buzonUrl = 'http://localhost:8080/v1/buzonnotificacion';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const persona = this.getStoredPersonaFromLocalStorage();

    if (persona) {
      this.getBuzonNotificaciones(persona.correoElectronico, persona.token).subscribe({
        next: (buzon: BuzonNotificacion[]) => {
          if (buzon.length > 0 && buzon[0].notificaciones) {
            this.notificaciones = buzon[0].notificaciones;
            console.log('Notificaciones obtenidas:', this.notificaciones);
          }
        },
        error: (err) => {
          console.error('Error obteniendo las notificaciones:', err);
        }
      });
    } else {
      console.error('No hay persona almacenada en el localStorage.');
    }
  }

  private getStoredPersonaFromLocalStorage(): Persona | null {
    const storedPersona = localStorage.getItem('persona');
    return storedPersona ? JSON.parse(storedPersona) : null;
  }

  private getBuzonNotificaciones(correoElectronico: string, token: string): Observable<BuzonNotificacion[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<BuzonNotificacion[]>(`${this.buzonUrl}/propietario?correo=${correoElectronico}`, { headers }).pipe(
      switchMap(() => {
        return this.http.get<BuzonNotificacion[]>(`${this.buzonUrl}/lista`, { headers }).pipe(
          map((data: BuzonNotificacion[]) => {
            console.log("Buzón de notificaciones obtenido:", data);
            return data;
          }),
          catchError(error => {
            console.error('Error obteniendo el buzón de notificaciones', error);
            return of([]); // Manejo de errores devolviendo un array vacío
          })
        );
      })
    );
  }

  verNotificacion(notificacion: Notificacion): void {
    // Navega al componente NotificationContentComponent pasando la notificación completa
    this.router.navigate(['/content', { notificacion: JSON.stringify(notificacion) }]);
  }
}
