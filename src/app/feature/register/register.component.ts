import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { PersonaService } from '../../service/persona.service';
import { Persona } from '../../service/persona.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  userData = {
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    correoElectronico: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private personaService: PersonaService
  ) {}

  register() {
    this.authService.register(this.userData).subscribe(
      response => {
        const token = response.token;
        this.authService.setToken(token);
        this.personaService.getPersona(this.userData.correoElectronico, token).subscribe(
          personaData => {
            const persona: Persona = {
              identificador: personaData.identificador,
              primerNombre: personaData.primerNombre,
              segundoNombre: personaData.segundoNombre,
              primerApellido: personaData.primerApellido,
              segundoApellido: personaData.segundoApellido,
              correoElectronico: personaData.correoElectronico,
              token: token
            }; // Almacena la persona en el servicio PersonaService
            this.router.navigate(['/home']);
          },
          error => {
            console.error('Error al obtener los datos de la persona:', error);
            alert('Error al obtener los datos de la persona. Por favor, inténtelo de nuevo más tarde.');
          }
        );
      },
      error => {
        console.error('Error en el registro:', error);
        alert('Ha ocurrido un error durante el registro. Por favor, inténtelo de nuevo más tarde.');
      }
    );
  }
}
