import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IBaseEntity, BaseService } from './base.service';
import { LoginService } from './login.service';

export interface ISipAccount extends IBaseEntity {
    name: string;
    email: string;
    phoneNumber: string;
    sipId: string;
    sipPass: string;
}

@Injectable()
export class SipAccountService extends BaseService<ISipAccount> {
  constructor(http: Http, loginService: LoginService) {
    super(http, loginService, '/sipaccounts');
  }
}
