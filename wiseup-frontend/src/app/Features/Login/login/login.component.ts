import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { take } from 'rxjs';
import { AuthService } from '../../../Core/Services/Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  myForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.myForm = this.fb.group({
      email: new FormControl('', []),
      password: new FormControl('', []),
    });
  }

  submitForm() {
    this.authService
      .register(this.myForm.value)
      .pipe(take(1))
      .subscribe((res) => {
        this.authService.tokenPermssions(res.access_token);
      });
  }
}
