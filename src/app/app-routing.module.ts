import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './auth.guard';
import { RegisterVerifyFormFormComponent } from './register-verify-form/register-verify-form.component';

const routes: Routes = [
  { path: '', component: RegisterVerifyFormFormComponent },
  { path: 'users', canActivate: [AuthGuard], component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
