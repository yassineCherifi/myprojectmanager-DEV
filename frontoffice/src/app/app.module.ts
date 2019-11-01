import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './components/user/register/register.component';
import { UserService } from './services/user.service';
import { FormsModule} from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/user/login/login.component'
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ListprojetsComponent } from './components/dashboard/listprojets/listprojets.component';
import { DetailprojetComponent } from './components/dashboard/detailprojet/detailprojet.component';
import { ProjetService } from './services/projet.service';
import { IssuesService } from './services/issues.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,
    ListprojetsComponent,
    DetailprojetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [UserService,ProjetService,IssuesService,AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
