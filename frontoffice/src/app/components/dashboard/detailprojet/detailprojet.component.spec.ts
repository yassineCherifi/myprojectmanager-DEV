import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailprojetComponent } from './detailprojet.component';

describe('DetailprojetComponent', () => {
  let component: DetailprojetComponent;
  let fixture: ComponentFixture<DetailprojetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailprojetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
