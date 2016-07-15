/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { STOMPService } from './stomp.service';

describe('STOMP Service', () => {
  beforeEachProviders(() => [STOMPService]);

  it('should ...',
      inject([STOMPService], (service: STOMPService) => {
    expect(service).toBeTruthy();
  }));
});
