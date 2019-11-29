import { TestBed } from '@angular/core/testing';

import { ReleasesService } from './releases.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ReleasesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: ReleasesService = TestBed.get(ReleasesService);
    expect(service).toBeTruthy();
  });
});
