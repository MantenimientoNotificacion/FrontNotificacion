import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './feature/home/home.component';
import { LoginComponent } from './feature/login/login.component';
import { RegisterComponent } from './feature/register/register.component';
import { SendNotificationModule } from './feature/send-notification/send-notification.module';
import { InboxModule } from './feature/inbox/inbox.module';
import { AuthService } from './service/auth.service';
import { PersonaService } from './service/persona.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    SendNotificationModule,
    InboxModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
