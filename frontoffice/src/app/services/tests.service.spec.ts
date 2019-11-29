import { TestBed } from '@angular/core/testing';

import { TestsService } from './tests.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('TestsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: TestsService = TestBed.get(TestsService);
    expect(service).toBeTruthy();
  });
});
