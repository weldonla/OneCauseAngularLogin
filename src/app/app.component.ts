﻿import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services/authentication.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'one-cause-angular-login';
  currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        // this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    // logout() {
    //     this.authenticationService.logout();
    //     this.router.navigate(['/login']);
    // }
}


// ﻿import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// import { AuthenticationService } from './_services/authentication.service';
// import { User } from './_models/user';

// // import './_content/app.less';

// @Component({ selector: 'app', templateUrl: 'app.component.html' })
// export class AppComponent {
//     currentUser: User;

//     constructor(
//         private router: Router,
//         private authenticationService: AuthenticationService
//     ) {
//         this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
//     }

//     logout() {
//         this.authenticationService.logout();
//         this.router.navigate(['/login']);
//     }
// }