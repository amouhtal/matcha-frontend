import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { publicIpv4} from 'public-ip';
import { Router } from '@angular/router';

@Component({
  selector: 'matcha-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({
    email: new FormControl('exampl@gmail.com', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i),
    ]),
    first_name: new FormControl('david', [
      Validators.required,
      Validators.pattern(/^[A-Za-z '-]+$/),
    ]),
    last_name: new FormControl('david', [
      Validators.required,
      Validators.pattern(/^[A-Za-z '-]+$/),
    ]),
    username: new FormControl('tesxt12', [
      Validators.required,
      Validators.pattern(/^(?=.{8,20}$)[a-zA-Z0-9._\-@]+$/g),
    ]),
    password: new FormControl('Test-1234', [
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
    console.log(data);
    this.http.post('http://localhost:3000/user/signup', data).subscribe({
      next: (ret) => {
        console.log(ret);
        sessionStorage.setItem('session', JSON.stringify(ret));
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.log(error.error);
        this.error = error.error;
      },
    });

  }
  title = 'angular-ip-address';
  api_key = '8e2aabd794194b1d9e486a1bd398ee3f';
  url = 'https://ipgeolocation.abstractapi.com/v1/?api_key=8e2aabd794194b1d9e486a1bd398ee3f';

  ipAddress = '';
  mData: any;
  async getUserLocation() {
    // const ip = await publicIpv4();
    // const response = await fetch(`http://ip-api.com/json/${ip}`);
    // let data = await response.json();
    // console.log(data);
    // return {
    //   name: data.city,
    //   lat: data.lat,
    //   lng: data.lon,
    // };
    console.log("getting data from api : " , this.url);
    this.http.get(this.url).subscribe({
      next: (ret) => {
        console.log(ret)
        this.mData = ret;
      },
      error: (error) => {
        console.log(error.error);
        this.error = error.error;
      },
    });
  }
}
