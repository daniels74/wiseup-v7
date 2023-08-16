import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../Core/Services/Auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  auth!: boolean;
  user!: object;

  constructor(private authServ: AuthService) {}

  ngOnInit() {
    this.authServ.auth.subscribe((authState) => {
      this.auth = authState;
    });

    if (this.auth === true) {
      this.authServ.user.subscribe((user) => (this.user = user));
    }
  }
}
