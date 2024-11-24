import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.scss']
})
export class HeaderHomeComponent {

  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    return localStorage.getItem('persona') !== null;
  }

  logout(): void {
    // Eliminar los datos de persona del localStorage
    localStorage.removeItem('persona');

    // Redirigir al home
    this.router.navigate(['/home']);
  }

  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }

  redirectToRegister(): void {
    this.router.navigate(['/register']);
  }
}
