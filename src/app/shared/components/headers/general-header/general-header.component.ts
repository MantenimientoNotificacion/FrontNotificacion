import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-header',
  templateUrl: './general-header.component.html',
  styleUrls: ['./general-header.component.scss']
})
export class GeneralHeaderComponent {

  constructor(private router: Router) {}

  redirectToHome(): void {
    this.router.navigate(['/home']);
  }
}
