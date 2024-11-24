import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) {}

  navigateToSendNotification(): void {
    if (localStorage.getItem('persona')) {
      this.router.navigate(['/send-notification']);
    } else {
      alert('Debe iniciar sesión o registrarse primero.');
      // Redirigir al componente de login o registro si es necesario
      this.router.navigate(['/login']); // Por ejemplo, redirige al login
    }
  }

  navigateToInbox(): void {
    if (localStorage.getItem('persona')) {
      this.router.navigate(['/inbox']);
    } else {
      alert('Debe iniciar sesión o registrarse primero.');
      // Redirigir al componente de login o registro si es necesario
      this.router.navigate(['/login']); // Por ejemplo, redirige al login
    }
  }
}
