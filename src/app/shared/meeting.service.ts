import { Injectable } from '@angular/core';
import { IRoom } from './room.service';
import { IParticipant, CallType, ParticipantService} from './participant.service';
import { EventSource, IConferenceEvent, IParticipantEvent } from './events';
import { PushEventService } from './push-event.service';

@Injectable()
export class MeetingService {
  rooms: IRoom[];
  eventSource: EventSource;

  constructor(private participantService: ParticipantService, pushEventService: PushEventService) { 
    this.eventSource = pushEventService;

    this.eventSource.onConferenceStart.subscribe((ev: IConferenceEvent) => {
      
    });
  }

  private getRoomById(id: string): IRoom {
    //$log.debug('Retrieving room by id [id=' + id + ']');
    var i;
    for (i = 0; i < this.rooms.length; i++) {
      if (this.rooms[i].id === id) {
        //$log.debug('Room found');
        return this.rooms[i];
      }
    }
    return null;
  }

  private hasHost(room: IRoom) {
    var i;
    if (room != null) {
      for (i = 0; i < room.participants.length; i++) {
        if (room.participants[i].host === true) {
          return true;
        }
      }
    }
    return false;
  }

  private getParticipantsCountByFilter(filter: Function): number {
    var i, e, count = 0, p;
    for (i = 0; i < this.rooms.length; i++) {
      for (e = 0; e < this.rooms[i].participants.length; e++) {
        p = this.rooms[i].participants[e];
        if (!filter || filter(p) === true) {
          count++;
        }
      }
    }
    return count;
  }

  public getTotalParticipantsByCommentRequested(value: boolean): number {
    return this.getParticipantsCountByFilter((participant: IParticipant) => {
      return participant.host !== true && participant.commentRequested === value;
    });
  }

  public getTotalParticipantsByMuted(value): number {
    return this.getParticipantsCountByFilter((participant: IParticipant) => {
      return participant.host !== true && participant.muted === value;
    });
  }

  public getTotalParticipants(): number {
    return this.getParticipantsCountByFilter((participant: IParticipant) => {
      return participant.host !== true;
    });
  }

  public getTotalRooms(): number {
    return this.rooms.length;
  }

  public getTotalParticipantsByType(type: CallType): number {
    return this.getParticipantsCountByFilter((participant: IParticipant) => {
      return participant.host !== true && participant.type === type;
    });
  }

  public findAllIds(): string[] {
    let ids = [], i;
    for (i = 0; i < this.rooms.length; i++) {
      ids.push(this.rooms[i].id);
    }
    return ids;
  }

  public hasRoom(id: string): boolean {
    return this.getRoomById(id) !== null;
  }

  public findRoom(id: string) {
    return this.getRoomById(id);
  }

  public kickByRoomAndChannel(room: string, participant: IParticipant) {
    this.participantService.kick(room, participant.channel);
  }

  public muteByRoomAndChannel(room: string, participant: IParticipant) {
    this.participantService.mute(room, participant.channel);
    participant.commentRequested = false;
  }

  public unmuteByRoomAndChannel(room: string, participant: IParticipant) {
    if (!this.hasHost(this.getRoomById(room))) {
      //$log.warn('Room \'' + room + '\' has no host. It is not possible to unmute participants in rooms without a host.')
      return;
    }

    this.participantService.unmute(room, participant.channel);
    participant.commentRequested = false;
  }

  public clear() {
    this.rooms = [];
  }
}
