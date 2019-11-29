import { TestBed } from '@angular/core/testing';

import { ContributorService } from './contributor.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ContributorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: ContributorService = TestBed.get(ContributorService);
    expect(service).toBeTruthy();
  });
});
