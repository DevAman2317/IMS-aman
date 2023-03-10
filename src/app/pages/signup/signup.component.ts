import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserapiService } from 'src/app/services/userapi.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private api: UserapiService, private route: Router) {
    this.countries();
  }

  registration = new FormGroup({
    cityId: new FormControl('',[Validators.required]),
    countryId: new FormControl('',[Validators.required]),
    dob: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.email,Validators.required]),
    fname: new FormControl('', [Validators.required,Validators.minLength(3)]),
    gender: new FormControl('',[Validators.required]),
    lname: new FormControl('',[Validators.required,Validators.minLength(3)]),
    phno: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
    stateId: new FormControl('',[Validators.required]),
  });

get ctrl(){
  return this.registration.controls
}

  reg() {
    this.api.userReg(this.registration.value).subscribe((res) => {
      alert(res);
      this.route.navigate(['/unlock']);
    });
  }
  countryOption: any;
  countries() {
    this.api.getCountries().subscribe((res) => {
      console.log(res);
      this.countryOption = res;
    });
  }

  stateOption: any;

  state(id: any) {
    this.api.getState(id).subscribe((res) => {
      console.log(res);
      this.stateOption = res;
    });
  }

  cityOption: any;
  city(id: any) {
    this.api.getCity(id).subscribe((res) => {
      console.log(res);
      this.cityOption = res;
    });
  }
  control: any;
  emailVerify: any;
  emailValidator = false;
  checkEmail(mail: any) {
    this.api.checkMail(mail).subscribe((res) => {
      console.log(res);
      this.emailVerify = res;
      if (this.emailVerify == 'DUPLICATE') {
        this.control = this.registration.invalid;
        this.emailValidator = true;
      } else {
        this.control = false;
        this.emailValidator = false;
      }
    });
  }
}
