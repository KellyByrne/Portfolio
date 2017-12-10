import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioProgressComponent } from './portfolio-progress.component';

describe('PortfolioProgressComponent', () => {
  let component: PortfolioProgressComponent;
  let fixture: ComponentFixture<PortfolioProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
