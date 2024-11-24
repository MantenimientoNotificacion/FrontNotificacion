import { Notificacion } from './notificacion.model';

export interface BuzonNotificacion {
  identificador: string;
  propietario: {
    identificador: string;
    primerNombre: string;
    segundoNombre: string;
    primerApellido: string;
    segundoApellido: string;
    correoElectronico: string;
  };
  nombre: string;
  notificaciones: Notificacion[];
}
