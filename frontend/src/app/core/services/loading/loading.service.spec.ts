import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('set Loading', () => {
    const resultLoading = service.setLoading(true);
    expect(resultLoading).toBeUndefined();
  });

  it('set Loading and get loading status', () => {
    service.setLoading(true);
    const getLoadinStatus = service.getLoading();

    expect(getLoadinStatus).toBe(true);
  });
});
