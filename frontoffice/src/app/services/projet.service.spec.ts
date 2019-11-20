import { TestBed } from '@angular/core/testing';

import { ProjetService } from './projet.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ProjetService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      HttpClientModule
    ],
    providers: [ProjetService]
  }));

  it('should be created', () => {
    const service: ProjetService = TestBed.get(ProjetService);
    expect(service).toBeTruthy();
  });
});
