import { TestBed } from '@angular/core/testing';

import { EmpService } from './empservice.service';
describe('Empservice', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpService= TestBed.get(EmpService);
    expect(service).toBeTruthy();
  });
});
