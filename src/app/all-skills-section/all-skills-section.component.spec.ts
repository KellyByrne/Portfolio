import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSkillsSectionComponent } from './all-skills-section.component';

describe('AllSkillsSectionComponent', () => {
  let component: AllSkillsSectionComponent;
  let fixture: ComponentFixture<AllSkillsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSkillsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSkillsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
