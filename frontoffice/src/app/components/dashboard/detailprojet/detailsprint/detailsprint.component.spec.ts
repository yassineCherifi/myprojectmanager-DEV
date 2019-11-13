import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsprintComponent } from './detailsprint.component';

describe('DetailsprintComponent', () => {
  let component: DetailsprintComponent;
  let fixture: ComponentFixture<DetailsprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
