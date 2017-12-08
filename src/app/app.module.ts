import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AuthService } from './services/auth.service';

const routes = [
  {path: 'register', component: RegistrationComponent},
  {path: '', redirectTo: 'register', pathMatch: 'full'},
  {path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    PagenotfoundComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }
