/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { HistoryService } from './history.service';

describe('History Service', () => {
  beforeEachProviders(() => [HistoryService]);

  it('should ...',
      inject([HistoryService], (service: HistoryService) => {
    expect(service).toBeTruthy();
  }));
});
