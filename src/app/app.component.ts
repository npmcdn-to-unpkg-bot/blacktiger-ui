import { Component } from '@angular/core';
import { InformationComponent } from './information';
import { NavigationComponent } from './navigation';
import { BannerComponent } from './banner';
import { NGL_DIRECTIVES } from 'ng-lightning/ng-lightning';
import { TransmissionComponent } from './transmission';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LoginService } from './shared';
@Component({
  moduleId: module.id,
  selector: 'bt-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [BannerComponent, InformationComponent, NavigationComponent, NGL_DIRECTIVES, TransmissionComponent, ROUTER_DIRECTIVES],
  providers: [LoginService]
})
export class AppComponent {
  authenticated: boolean = false;
  username: string;
  password: string;
  
  constructor(private loginService: LoginService) {
    this.loginService.onAuthenticationChange.subscribe(() => {
      this.authenticated = loginService.isAuthenticated();
    });
  }

  login() {

    if (this.loginService.isAuthenticated()) {
      this.loginService.deauthenticate();
    }
  }

  completeLogin() {
    this.loginService.authenticate("H45-0000-1", "12345");
    
  }
}
