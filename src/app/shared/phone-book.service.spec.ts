/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { PhoneBookService } from './phone-book.service';

describe('PhoneBook Service', () => {
  beforeEachProviders(() => [PhoneBookService]);

  it('should ...',
      inject([PhoneBookService], (service: PhoneBookService) => {
    expect(service).toBeTruthy();
  }));
});
