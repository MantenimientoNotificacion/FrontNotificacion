import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendNotificationComponent } from './components/send-notification/send-notification.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { NotificationDetailsComponent } from './components/notification-details/notification-details.component';

const routes: Routes = [
  { path: "", component: SendNotificationComponent, children:[
    {path: "", component: UsersListComponent},
    {path: "", component: NotificationDetailsComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SendNotificationRoutingModule { }
