export interface Persona {
  identificador: number; // o el tipo adecuado según el servidor
  primerNombre: string;
  segundoNombre?: string;
  primerApellido: string;
  segundoApellido?: string;
  correoElectronico: string;
  token: string;
}
