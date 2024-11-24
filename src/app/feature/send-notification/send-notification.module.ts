import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendNotificationComponent } from './components/send-notification/send-notification.component';
import { SendNotificationRoutingModule } from './send-notification-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { NotificationDetailsComponent } from './components/notification-details/notification-details.component';



@NgModule({
  declarations: [
    SendNotificationComponent,
    UsersListComponent,
    NotificationDetailsComponent,
  ],
  imports: [
    CommonModule,
    SendNotificationRoutingModule, SharedModule
  ]
})
export class SendNotificationModule { }
