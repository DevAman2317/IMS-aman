import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserapiService } from 'src/app/services/userapi.service';

@Component({
  selector: 'app-unlock',
  templateUrl: './unlock.component.html',
  styleUrls: ['./unlock.component.css'],
})
export class UnlockComponent {
  constructor(private unlock: UserapiService, private router: Router) {}

  unlockForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    tempPwd: new FormControl('', Validators.required),
    newPwd: new FormControl('', [Validators.required]),
    confirmPwd: new FormControl('', [Validators.required]),
  });
  pwdValidator = false;
  samePwd() {
    if (this.unlockForm.value.newPwd != this.unlockForm.value.confirmPwd) {
      this.pwdValidator = true;
    } else {
      this.pwdValidator = false;
    }
  }

  unlockRes: any;
  unlockMsg = false;
  unlockAcc() {
    this.unlock.unlock(this.unlockForm.value).subscribe((res) => {
      this.unlockRes = res;
      console.log(this.unlockRes);
      if (this.unlockRes == 'Incorrect Temporary Password') {
        this.unlockMsg = true;
      } else {
        this.unlockMsg = false;
        alert(this.unlockRes);
        this.router.navigate(['login']);
      }
    });
  }
}
