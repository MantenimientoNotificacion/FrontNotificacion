import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Notificacion } from 'src/app/service/notificacion.model';

@Component({
  selector: 'app-notification-content',
  templateUrl: './notification-content.component.html',
  styleUrls: ['./notification-content.component.scss']
})
export class NotificationContentComponent implements OnInit {
  notificacion: Notificacion | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtiene la notificación desde los parámetros de la ruta
    this.route.paramMap.subscribe(params => {
      const notificacionStr = params.get('notificacion');
      if (notificacionStr) {
        this.notificacion = JSON.parse(notificacionStr) as Notificacion;
      } else {
        console.error('No se encontró la notificación en los parámetros de la ruta.');
      }
    });
  }
}
