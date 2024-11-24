import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InboxComponent } from "./components/inbox/inbox.component";
import { NotificationsListComponent } from "./components/notifications-list/notifications-list.component";
import { NotificationContentComponent } from "./components/notification-content/notification-content.component";

const routes: Routes = [
  {
    path: "",
    component: InboxComponent,
    children: [
      { path: "list", component: NotificationsListComponent },
      { path: "content", component: NotificationContentComponent },
      { path: "", pathMatch: "full", redirectTo: "list" } // Redirecciona por defecto a la lista de notificaciones
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule {}
