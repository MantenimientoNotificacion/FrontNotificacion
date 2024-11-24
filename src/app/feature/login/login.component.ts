import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { PersonaService } from '../../service/persona.service';
import { Router } from '@angular/router';
import { Persona } from '../../service/persona.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userData = {
    correoElectronico: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private personaService: PersonaService,
    private router: Router
  ) {}

  login() {
    this.authService.login(this.userData).subscribe(
      response => {
        const token = response.token;
        this.authService.setToken(token);

        this.personaService.getPersona(this.userData.correoElectronico, token).subscribe(
          personaData => {
            if (personaData) {
              const persona: Persona = {
                identificador: personaData.identificador,
                primerNombre: personaData.primerNombre,
                segundoNombre: personaData.segundoNombre,
                primerApellido: personaData.primerApellido,
                segundoApellido: personaData.segundoApellido,
                correoElectronico: personaData.correoElectronico,
                token: token
              }; // Guardar persona en el servicio
              this.router.navigate(['/home']);
            } else {
              console.error('Respuesta del servidor no tiene el formato esperado.');
              alert('Error en la respuesta del servidor. Por favor, inténtelo de nuevo más tarde.');
            }
          },
          error => {
            console.error('Error al obtener los datos de la persona:', error);
            alert('Error al obtener los datos de la persona. Por favor, inténtelo de nuevo más tarde.');
          }
        );
      },
      error => {
        console.error('Error en el inicio de sesión:', error);
        alert('Ha ocurrido un error durante el inicio de sesión. Por favor, inténtelo de nuevo más tarde.');
      }
    );
  }
}
