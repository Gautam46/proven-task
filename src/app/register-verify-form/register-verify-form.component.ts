import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-register-verify-form',
  templateUrl: './register-verify-form.component.html',
  styleUrls: ['./register-verify-form.component.scss'],
})
export class RegisterVerifyFormFormComponent implements OnInit {
  yesRegister = true;
  userDetails: User;

  constructor() {}

  ngOnInit(): void {}

  registerEvent(event: any) {
    this.userDetails = event;
    this.yesRegister = false;
  }
}
