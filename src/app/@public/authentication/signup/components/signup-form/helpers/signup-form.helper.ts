import { Inject } from '@angular/core';

@Inject({
  providedIn: 'root',
})
export class SignupFormHelper {
  ErrorMessages: Map<string, string> = new Map<string, string>();

  constructor() {
    this.ErrorMessages.set(
      'email',
      'email should be like : smith@email.com',
    );
    this.ErrorMessages.set(
      'first_name',
      'first name should be like : James ',
    );
    this.ErrorMessages.set(
      'last_name',
      'last name should be like : Smith ',
    );
    this.ErrorMessages.set(
      'username',
      'username should contain 8-20 characters , allowed special characters [@,.,_,-]]',
    );
    this.ErrorMessages.set(
      'password',
      'password should contain 8-20 characters , at least one uppercase letter, one lowercase letter, one number and one special character',
    );
  }

  setErrorMessage(error: string): string {
    // if (error == 'first_name' || error == 'last_name')
    //   return this.ErrorMessages.get('firstlast_name') || 'Invalid input';
    return this.ErrorMessages.get(error) || 'Invalid input';
  }
}
