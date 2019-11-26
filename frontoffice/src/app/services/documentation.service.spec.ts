import { TestBed } from '@angular/core/testing';

import { DocumentationsService } from './documentations.service';

describe('ProjetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentationsService = TestBed.get(DocumentationsService);
    expect(service).toBeTruthy();
  });
});
