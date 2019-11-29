import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsprintComponent } from './detailsprint.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Params, Data, ActivatedRouteSnapshot, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';


class MockActivatedRoute {
  snapshot = {
    paramMap: convertToParamMap({
      id: '1'
    })
  }
  parent = {
    routeConfig: { children: { filter: () => {} } },
    params: { subscribe: jasmine.createSpy('subscribe')
    .and
    .returnValue(of(<Params>{id: 1}))
  }
  };
}

describe('DetailsprintComponent', () => {
  let component: DetailsprintComponent;
  let fixture: ComponentFixture<DetailsprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsprintComponent ],
      imports: [FormsModule, NgSelectModule, HttpClientTestingModule,
                RouterTestingModule],
      providers: [{
        provide: ActivatedRoute,
        useClass: MockActivatedRoute
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
