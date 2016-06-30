/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TreeViewComponent } from './tree-view.component';

describe('Component: TreeView', () => {
  it('should create an instance', () => {
    let component = new TreeViewComponent();
    expect(component).toBeTruthy();
  });
});
