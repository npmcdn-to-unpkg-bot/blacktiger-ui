import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IBaseEntity, BaseService } from './base.service';
import { LoginService } from './login.service';
import { environment } from '../';

export enum CallType {
  Sip, Phone, Hall, Unknown
}

export interface IParticipant extends IBaseEntity {
    callerId: string;
    channel: string;
    muted: boolean;
    phoneNumber: string;
    dateJoined: Date;
    name: string;
    type: CallType;
    host: boolean;
    commentRequested: boolean;
}


@Injectable()
export class ParticipantService extends BaseService<IParticipant> {
  constructor(http: Http, loginService: LoginService) {
    super(http, loginService, '/participant');
  }

  public kick(roomId: string, id: string) {
    return this.http.delete(environment.serviceUrl + '/rooms/' + roomId + '/participants/' + id, {headers: this.appendAuthToken()})
            .catch(this.handleError);
  }

  public mute(roomId: string, id: string) {
    var data = {muted: true};
    return this.http.put(environment.serviceUrl + '/rooms/' + roomId + '/participants/' + id, data, {headers: this.appendAuthToken()})
            .catch(this.handleError);
  }

  public unmute(roomId: string, id: string) {
    var data = {muted: false};
    return this.http.put(environment.serviceUrl + '/rooms/' + roomId + '/participants/' + id, data, {headers: this.appendAuthToken()})
            .catch(this.handleError);
  }

  
}
