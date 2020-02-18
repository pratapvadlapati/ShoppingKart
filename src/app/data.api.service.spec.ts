import { TestBed } from '@angular/core/testing';

import { Data.ApiService } from './data.api.service';

describe('Data.ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Data.ApiService = TestBed.get(Data.ApiService);
    expect(service).toBeTruthy();
  });
});
