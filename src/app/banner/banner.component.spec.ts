/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { BannerComponent } from './banner.component';

describe('Component: Banner', () => {
  it('should create an instance', () => {
    let component = new BannerComponent(null);
    expect(component).toBeTruthy();
  });
});
