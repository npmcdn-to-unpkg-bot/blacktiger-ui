import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared';
@Component({
  moduleId: module.id,
  selector: 'bt-banner',
  templateUrl: 'banner.component.html',
  styleUrls: ['banner.component.css']
})
export class BannerComponent implements OnInit {
  shown: boolean = false;

  constructor(private loginService: LoginService) {
    loginService.onAuthenticationChange.subscribe(() => {
      this.shown = loginService.isAuthenticated();
    });
  }

  ngOnInit() {
  }

}
