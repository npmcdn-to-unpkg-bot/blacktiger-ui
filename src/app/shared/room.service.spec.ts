/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { RoomService } from './room.service';

describe('Room Service', () => {
  beforeEachProviders(() => [RoomService]);

  it('should ...',
      inject([RoomService], (service: RoomService) => {
    expect(service).toBeTruthy();
  }));
});
