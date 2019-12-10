import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from 'src/app/app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap, Params } from '@angular/router';
import { of } from 'rxjs';
import { NgSelectModule } from '@ng-select/ng-select';


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
    .returnValue(of({id: 1} as Params))}
  };
}
describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent, AppComponent ],
      imports: [FormsModule,
                NgbModule,
                RouterTestingModule,
                HttpClientTestingModule,
                NgSelectModule],
      providers: [{
                provide: ActivatedRoute,
                useClass: MockActivatedRoute
                }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
