import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { ListprojetsComponent } from './components/dashboard/listprojets/listprojets.component';
import { DetailprojetComponent } from './components/dashboard/detailprojet/detailprojet.component';

const routes: Routes = [
  {
    path: 'register', component: UserComponent,
    children: [{
      path: '', component: RegisterComponent
    }]
  },
  {
    path: 'login', component: UserComponent,
    children: [{
      path: '', component: LoginComponent
    }]
  },
  {
    path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard],
    children: [
     { path: 'projects', component: ListprojetsComponent,pathMatch: 'full'},
     { path: 'projects/:id', component: DetailprojetComponent,pathMatch: 'full'}
    ]
     
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
