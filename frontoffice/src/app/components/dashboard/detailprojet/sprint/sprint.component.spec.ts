import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintComponent } from './sprint.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { convertToParamMap, Params, ActivatedRoute } from '@angular/router';
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

describe('SprintComponent', () => {
  let component: SprintComponent;
  let fixture: ComponentFixture<SprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintComponent ],
      imports: [ FormsModule,
                 NgbModule,
                 RouterTestingModule,
                 HttpClientTestingModule ],
      providers: [{
                 provide: ActivatedRoute,
                 useClass: MockActivatedRoute
                }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
