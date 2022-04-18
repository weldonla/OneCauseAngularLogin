import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'one-cause-angular-login';

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }
}