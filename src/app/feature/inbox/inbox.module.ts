import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxRoutingModule } from './inbox-routing.module';
import { InboxComponent } from './components/inbox/inbox.component';
import { NotificationsListComponent } from './components/notifications-list/notifications-list.component';
import { TopButtonsComponent } from './components/top-buttons/top-buttons.component';
import { NotificationContentComponent } from './components/notification-content/notification-content.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    InboxComponent,
    NotificationsListComponent,
    TopButtonsComponent,
    NotificationContentComponent
  ],
  imports: [
    CommonModule, InboxRoutingModule, SharedModule
  ]
})
export class InboxModule { }
