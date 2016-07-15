/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { InformationComponent } from './information.component';

describe('Component: Information', () => {
  it('should create an instance', () => {
    let component = new InformationComponent();
    expect(component).toBeTruthy();
  });
});
