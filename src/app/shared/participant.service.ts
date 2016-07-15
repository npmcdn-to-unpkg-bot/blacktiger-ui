import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IBaseEntity, BaseService } from './base.service';
import { LoginService } from './login.service';

export enum ICallType {
  Sip, Phone, Hall, Unknown
}

export interface IParticipant extends IBaseEntity {
    callerId: string;
    channel: string;
    muted: boolean;
    phoneNumber: string;
    dateJoined: Date;
    name: string;
    type: ICallType;
    host: boolean;
}


@Injectable()
export class ParticipantService extends BaseService<IParticipant> {
  constructor(http: Http, loginService: LoginService) {
    super(http, loginService, '/participant');
  }
}
