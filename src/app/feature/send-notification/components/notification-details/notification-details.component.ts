import { Component } from '@angular/core';

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.scss']
})
export class NotificationDetailsComponent {
  notificationContent: string = '';

  onInput(event: Event): void {
    const inputElement = event.target as HTMLTextAreaElement;
    this.notificationContent = inputElement.value;
  }

}
