import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'matcha-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(private http: HttpClient, private router: Router) {}
  error: string = '';

  onSubmit() {
    let data = this.loginForm.value;
    this.http
      .post('http://localhost:3000/user/login', data, { withCredentials: true })
      .subscribe({
        next: (ret :any) => {
          console.log(ret);
          sessionStorage.setItem('session' , JSON.stringify(ret.session));
            this.router.navigate(['/']);
        },
        error: (err) => {
          console.log(err);
          this.error = err.error;
        },
      });
  }
}
