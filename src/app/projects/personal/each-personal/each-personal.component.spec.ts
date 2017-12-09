import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EachPersonalComponent } from './each-personal.component';

describe('EachPersonalComponent', () => {
  let component: EachPersonalComponent;
  let fixture: ComponentFixture<EachPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EachPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
