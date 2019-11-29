import { TestBed } from '@angular/core/testing';

import { SprintService } from './sprint.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SprintService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: SprintService = TestBed.get(SprintService);
    expect(service).toBeTruthy();
  });
});
