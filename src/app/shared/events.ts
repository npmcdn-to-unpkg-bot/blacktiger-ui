import { EventEmitter } from '@angular/core';
import { IParticipant } from './participant.service';

export interface IConferenceEvent {
    type: string;
    roomNo: string;
}

export interface IParticipantEvent extends IConferenceEvent {
    participant: IParticipant;
}

export interface EventSource {
    onConferenceStart: EventEmitter<IConferenceEvent>;
    onConferenceEnd: EventEmitter<IConferenceEvent>;
    onParticipantJoin: EventEmitter<IParticipantEvent>;
    onParticipantChange: EventEmitter<IParticipantEvent>;
    onParticipantLeave: EventEmitter<IParticipantEvent>;
    onParticipantCommentRequest: EventEmitter<IParticipantEvent>;
    onParticipantCommentRequestCancel: EventEmitter<IParticipantEvent>;
    onParticipantMute: EventEmitter<IParticipantEvent>;
    onParticipantUnmute: EventEmitter<IParticipantEvent>;
}