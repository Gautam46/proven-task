import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CdkTableModule } from '@angular/cdk/table';
import { RegisterVerifyFormFormComponent } from './register-verify-form/register-verify-form.component';
import { UsersComponent } from './users/users.component';
import { RegistrationComponent } from './register-verify-form/registration/registration.component';
import { VerifiyComponent } from './register-verify-form/verifiy/verifiy.component';
import { TimerMinutesPipe } from './timer-minutes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegisterVerifyFormFormComponent,
    UsersComponent,
    RegistrationComponent,
    VerifiyComponent,
    TimerMinutesPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    CdkTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
