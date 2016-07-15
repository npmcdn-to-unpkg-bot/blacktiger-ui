/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { CommentRequestCancelService } from './comment-request-cancel.service';

describe('CommentRequestCancel Service', () => {
  beforeEachProviders(() => [CommentRequestCancelService]);

  it('should ...',
      inject([CommentRequestCancelService], (service: CommentRequestCancelService) => {
    expect(service).toBeTruthy();
  }));
});
