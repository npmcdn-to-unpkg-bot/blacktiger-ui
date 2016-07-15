/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';

describe('Component: Navigation', () => {
  it('should create an instance', () => {
    let router: Router = null;
    let component = new NavigationComponent(router, null);
    expect(component).toBeTruthy();
  });
});
