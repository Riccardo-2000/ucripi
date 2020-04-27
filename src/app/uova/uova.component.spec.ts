import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UovaComponent } from './uova.component';

describe('UovaComponent', () => {
  let component: UovaComponent;
  let fixture: ComponentFixture<UovaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
