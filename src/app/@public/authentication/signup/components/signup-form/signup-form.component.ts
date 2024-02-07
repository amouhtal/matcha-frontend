import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { SignupFormHelper } from './helpers/signup-form.helper';

@Component({
  selector: 'matcha-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})

export class SignupFormComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i),
    ]),
    first_name: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Za-z '-]+$/),
    ]),
    last_name: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Za-z '-]+$/),
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._@-]{8,20}$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-])[A-Za-z\d@$!%*?\-&]{8,20}$/,
      ),
    ]),
  });
  userLocation?: { latitude: number; longitude: number };
  result: any;
  error: string = '';
  emailError: string = '';
  firstNameError: string = '';
  lastNameError: string = '';
  usernameError: string = '';
  passwordError: string = '';

  constructor(private http: HttpClient, private router: Router,private signupFormHelper : SignupFormHelper) {}

  ngOnInit(): void {
    this.signupForm.statusChanges.subscribe();
    if ('geolocation' in navigator) {
      this.result = navigator.geolocation.getCurrentPosition((position) => {
        this.userLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
      });
    }
  }

  async onSubmit() {
    let data = this.signupForm.value;
    data.latitude = this.userLocation?.latitude;
    data.longitude = this.userLocation?.longitude;
    console.log(data);
    this.http.post('http://localhost:3000/user/signup', data,{withCredentials : true}).subscribe({
      next: (ret) => {
        const queryParams: NavigationExtras = {
          queryParams: { username: data.username } 
        };
      
        console.log(ret);
        this.router.navigate(['/public/auth/verify'], queryParams);
      },
      error: (error) => {
        console.log(error.error);
        this.error = error.error;
      },
    });
  }

  onFocus(fieldname : string){
    console.log('focus : ',fieldname);
    this.signupForm.get('email')?.getError('required');
    this.signupForm.get('email')?.getError

  }
  onBlur(fieldname : string){ 
    if(this.signupForm.get(fieldname)?.invalid && this.signupForm.get(fieldname)?.dirty){
      if(fieldname == 'email'){
        this.emailError = this.signupFormHelper.setErrorMessage(fieldname);
      }
      else if(fieldname == 'first_name' ){
        this.firstNameError = this.signupFormHelper.setErrorMessage(fieldname);
      }
      else if(fieldname == 'last_name'){
        this.lastNameError = this.signupFormHelper.setErrorMessage(fieldname);
      }
      else if(fieldname == 'username'){
        this.usernameError = this.signupFormHelper.setErrorMessage(fieldname);
      }
      else if(fieldname == 'password'){
        this.passwordError = this.signupFormHelper.setErrorMessage(fieldname);
      }
    }
    else{
        
      if(fieldname == 'email'){
        this.emailError = ''
      }
      else if(fieldname == 'first_name' ){
        this.firstNameError = ''
      }
      else if(fieldname == 'last_name'){
        this.lastNameError = ''
      }
      else if(fieldname == 'username'){
        this.usernameError = ''
      }
      else if(fieldname == 'password'){
        this.passwordError = ''
      }
    }
  }

  redirectLogin(){
    this.router.navigate(['/public/auth/login']);
  }
}
