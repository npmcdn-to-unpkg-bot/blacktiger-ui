/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { MeetingService } from './meeting.service';

describe('Meeting Service', () => {
  beforeEachProviders(() => [MeetingService]);

  it('should ...',
      inject([MeetingService], (service: MeetingService) => {
    expect(service).toBeTruthy();
  }));
});
