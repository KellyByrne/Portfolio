import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustratorComponent } from './illustrator.component';

describe('IllustratorComponent', () => {
  let component: IllustratorComponent;
  let fixture: ComponentFixture<IllustratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IllustratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IllustratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
