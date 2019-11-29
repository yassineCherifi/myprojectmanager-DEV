import { TestBed } from '@angular/core/testing';

import { DocumentationsService } from './documentations.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DocumentationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: DocumentationsService = TestBed.get(DocumentationsService);
    expect(service).toBeTruthy();
  });
});
