/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { SipAccountService } from './sip-account.service';

describe('SipUser Service', () => {
  beforeEachProviders(() => [SipAccountService]);

  it('should ...',
      inject([SipAccountService], (service: SipAccountService) => {
    expect(service).toBeTruthy();
  }));
});
