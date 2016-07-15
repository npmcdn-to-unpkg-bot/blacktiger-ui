import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IBaseEntity, BaseService } from './base.service';
import { LoginService } from './login.service';

export interface IPhoneBookEntry extends IBaseEntity {
  number: string;
}

@Injectable()
export class PhoneBookService extends BaseService<IPhoneBookEntry> {
  constructor(http: Http, loginService: LoginService) {
    super(http, loginService, '/phonebook');
  }
}
