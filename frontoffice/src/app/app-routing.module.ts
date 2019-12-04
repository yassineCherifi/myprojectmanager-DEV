import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { ListprojetsComponent } from './components/dashboard/listprojets/listprojets.component';
import { DetailprojetComponent } from './components/dashboard/detailprojet/detailprojet.component';
import { IssueComponent } from './components/dashboard/detailprojet/issue/issue.component';
import { TaskComponent } from './components/dashboard/detailprojet/task/task.component';
import { SprintComponent } from './components/dashboard/detailprojet/sprint/sprint.component';
import { DetailsprintComponent } from './components/dashboard/detailprojet/detailsprint/detailsprint.component';
import { TestComponent } from './components/dashboard/detailprojet/test/test.component';
import { UserdetailComponent } from './components/dashboard/userdetail/userdetail.component';
import { ReleaseComponent } from './components/dashboard/detailprojet/release/release.component';
import { DocumentationComponent } from './components/dashboard/detailprojet/documentation/documentation.component';
import { ContributorComponent } from './components/dashboard/detailprojet/contributor/contributor.component';
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
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'projects', pathMatch: 'full' },
      { path: 'projects', component: ListprojetsComponent, pathMatch: 'full' },
      { path: 'userdetail', component: UserdetailComponent },

      {
        path: 'projects/:id', component: DetailprojetComponent, children: [
          { path: '', redirectTo: 'issues', pathMatch: 'full' },
          { path: 'contributors', component: ContributorComponent },
          { path: 'issues', component: IssueComponent },
          { path: 'tasks', component: TaskComponent },
          { path: 'tests', component: TestComponent },
          { path: 'sprints', component: SprintComponent },
          { path: 'sprints/:idSprint', component: DetailsprintComponent },
          { path: 'releases', component: ReleaseComponent },
          { path: 'documentations', component: DocumentationComponent }


        ]

      }

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
