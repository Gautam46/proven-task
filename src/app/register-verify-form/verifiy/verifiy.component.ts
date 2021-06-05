import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/user.model';
import { UserService } from 'src/app/services/user.service';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-verifiy',
  templateUrl: './verifiy.component.html',
  styleUrls: ['./verifiy.component.scss'],
})
export class VerifiyComponent implements OnInit {
  verifiyFormGroup: FormGroup;
  @Output() registerEvent = new EventEmitter<boolean>();
  @Input() userDetails: User;
  showResend: boolean;
  counterSec = 300;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: Router,
    private cacheService: CacheService
  ) {}

  ngOnInit(): void {
    this.verifiyFormGroup = this.fb.group({
      uniqueCode: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      ],
    });
    this.timer();
  }

  onVerify() {
    this.cacheService.setCache('userName', this.userDetails.userName);
    this.userService.userArray.push(this.userDetails);
    this.route.navigateByUrl('users');
  }

  timer() {
    setInterval(() => {
      this.counterSec--;
    }, 1000);

    setTimeout(() => {
      this.showResend = true;
    }, 300000);
  }

  resend() {
    this.verifiyFormGroup.reset();
    this.showResend = false;
    this.counterSec = 300;
    this.timer();
  }
}
