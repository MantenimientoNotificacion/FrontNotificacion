export interface Notificacion {
  identificador: string;
  autor: {
    identificador: string;
    primerNombre: string;
    segundoNombre: string;
    primerApellido: string;
    segundoApellido: string;
    correoElectronico: string;
  };
  titulo: string;
  contenido: string;
  fechaCreacion: string;
  estado: string;
  fechaProgramada: string;
  tipoEntrega: string;
  destinatario: {
    identificador: string;
    primerNombre: string;
    segundoNombre: string;
    primerApellido: string;
    segundoApellido: string;
    correoElectronico: string;
  }[];
}
