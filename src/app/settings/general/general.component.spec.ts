/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { GeneralComponent } from './general.component';

describe('Component: General', () => {
  it('should create an instance', () => {
    let component = new GeneralComponent();
    expect(component).toBeTruthy();
  });
});
