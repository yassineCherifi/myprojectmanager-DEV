import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorComponent } from './contributor.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { Params, convertToParamMap, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

class MockActivatedRoute {
  snapshot = {
    paramMap: convertToParamMap({
      id: '1'
    })
  };
  parent = {
    routeConfig: { children: { filter: () => {} } },
    params: { subscribe: jasmine.createSpy('subscribe')
    .and
    .returnValue(of(<Params> {id: 1}))}
  };
}

describe('ContributorComponent', () => {
  let component: ContributorComponent;
  let fixture: ComponentFixture<ContributorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributorComponent ],
      imports: [ FormsModule, NgSelectModule, HttpClientTestingModule, RouterTestingModule],
      providers: [{
        provide: ActivatedRoute,
        useClass: MockActivatedRoute
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
