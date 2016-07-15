import { Injectable, EventEmitter } from '@angular/core';
import { EventSource, IConferenceEvent, IParticipantEvent } from './events';

@Injectable()
export class PushEventService implements EventSource {

  private _onConferenceStart = new EventEmitter<IConferenceEvent>();
  private _onConferenceEnd = new EventEmitter<IConferenceEvent>();
  private _onParticipantJoin = new EventEmitter<IParticipantEvent>();
  private _onParticipantChange = new EventEmitter<IParticipantEvent>();
  private _onParticipantLeave = new EventEmitter<IParticipantEvent>();
  private _onParticipantCommentRequest = new EventEmitter<IParticipantEvent>();
  private _onParticipantCommentRequestCancel = new EventEmitter<IParticipantEvent>();
  private _onParticipantMute = new EventEmitter<IParticipantEvent>();
  private _onParticipantUnmute = new EventEmitter<IParticipantEvent>();
  
  public get onConferenceStart(): EventEmitter<IConferenceEvent> {
    return this._onConferenceStart;
  }

  public get onConferenceEnd(): EventEmitter<IConferenceEvent> {
    return this._onConferenceEnd;
  }

  public get onParticipantJoin(): EventEmitter<IParticipantEvent> {
    return this._onParticipantJoin;
  }

  public get onParticipantChange(): EventEmitter<IParticipantEvent> {
    return this._onParticipantChange;
  }

  public get onParticipantLeave(): EventEmitter<IParticipantEvent> {
    return this._onParticipantLeave;
  }

  public get onParticipantCommentRequest(): EventEmitter<IParticipantEvent> {
    return this._onParticipantCommentRequest;
  }

  public get onParticipantCommentRequestCancel(): EventEmitter<IParticipantEvent> {
    return this._onParticipantCommentRequestCancel;
  }

  public get onParticipantMute(): EventEmitter<IParticipantEvent> {
    return this._onParticipantMute;
  }

  public get onParticipantUnmute(): EventEmitter<IParticipantEvent> {
    return this._onParticipantUnmute;
  }
}
