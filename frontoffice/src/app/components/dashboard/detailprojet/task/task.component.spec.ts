import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponent } from './task.component';
import { FormsModule} from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { convertToParamMap, Params, ActivatedRoute } from '@angular/router';
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
    .returnValue(of(<Params>{id: 1}))}
  };
}


describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskComponent ],
      imports: [HttpClientTestingModule, FormsModule, RouterTestingModule, NgSelectModule],
      providers: [{
        provide: ActivatedRoute,
        useClass: MockActivatedRoute
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
