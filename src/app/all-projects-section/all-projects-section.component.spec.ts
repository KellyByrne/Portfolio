import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProjectsSectionComponent } from './all-projects-section.component';

describe('AllProjectsSectionComponent', () => {
  let component: AllProjectsSectionComponent;
  let fixture: ComponentFixture<AllProjectsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllProjectsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProjectsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
