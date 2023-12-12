import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-])[A-Za-z\d@$!%*?\-&]{8,20}$/
      ),
    ]),
  });
  userLocation?: { latitude: number; longitude: number };
  result: any;
  error: string = '';

  constructor(private http: HttpClient, private router: Router) {}

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
    // console.log(data);
    this.http.post('http://localhost:3000/user/signup', data,{withCredentials : true}).subscribe({
      next: (ret) => {
        // console.log(ret);
        this.router.navigate(['/public/auth/verify']);
      },
      error: (error) => {
        console.log(error.error);
        this.error = error.error;
      },
    });
  }
}
