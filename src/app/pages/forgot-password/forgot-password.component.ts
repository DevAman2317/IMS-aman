import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserapiService } from 'src/app/services/userapi.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  constructor(private api: UserapiService, private route: Router) {}
  forgot = new FormGroup({
    emailId: new FormControl(),
  });
loader=false
  forgotRes: any;
  forgotMsg: any;
  forgotPwd() {
    this.loader=true
    this.forgotMsg = '';
    this.api.forgotPassword(this.forgot.value.emailId).subscribe((res) => {
      this.forgotRes = res;
      if (this.forgotRes == 'Please enter valid email id') {
        this.forgotMsg = this.forgotRes;
        this.loader=false
      } else {
        this.loader=false
       alert(this.forgotRes)
        this.route.navigate(['login'])
      }
    });
  }
}
