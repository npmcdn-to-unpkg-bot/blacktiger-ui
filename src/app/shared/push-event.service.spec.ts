/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { PushEventService } from './push-event.service';

describe('PushEvent Service', () => {
  beforeEachProviders(() => [PushEventService]);

  it('should ...',
      inject([PushEventService], (service: PushEventService) => {
    expect(service).toBeTruthy();
  }));
});
