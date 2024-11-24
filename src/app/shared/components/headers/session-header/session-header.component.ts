import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session-header',
  templateUrl: './session-header.component.html',
  styleUrls: ['./session-header.component.scss']
})
export class SessionHeaderComponent {

  constructor(private router: Router) {}

  redirectToHome(): void {
    this.router.navigate(['/home']);
  }

  logout(): void {
    localStorage.removeItem('persona');
    this.router.navigate(['/home']);
  }
}
