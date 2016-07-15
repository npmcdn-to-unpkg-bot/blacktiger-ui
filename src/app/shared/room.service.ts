import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IBaseEntity, BaseService } from './base.service';
import { LoginService } from './login.service';
import { IParticipant } from './participant.service';

export interface IContact {
  name: string;
  email: string;
  phoneNumber: string;
  comment: string;
}

export interface IRoom extends IBaseEntity {
  name: string;
  contact: IContact;
  postalCode: string;
  city: string;
  hallNumber: string;
  phoneNumber: string;
  countryCallingCode: string;
  participants: IParticipant[];
}

@Injectable()
export class RoomService extends BaseService<IRoom> {
  constructor(http: Http, loginService: LoginService) {
    super(http, loginService, '/rooms');

  }
}
