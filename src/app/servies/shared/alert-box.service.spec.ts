/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlertBoxService } from './alert-box.service';

describe('Service: AlertBox', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertBoxService]
    });
  });

  it('should ...', inject([AlertBoxService], (service: AlertBoxService) => {
    expect(service).toBeTruthy();
  }));
});
