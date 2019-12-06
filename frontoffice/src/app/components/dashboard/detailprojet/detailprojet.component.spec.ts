import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailprojetComponent } from './detailprojet.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgSelectModule } from '@ng-select/ng-select';

describe('DetailprojetComponent', () => {
  let component: DetailprojetComponent;
  let fixture: ComponentFixture<DetailprojetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailprojetComponent, AppComponent ],
      imports: [ FormsModule, NgSelectModule, RouterTestingModule, HttpClientTestingModule ],
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
