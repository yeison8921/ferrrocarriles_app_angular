import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanRiesgosComponent } from './plan-riesgos.component';

describe('PlanRiesgosComponent', () => {
  let component: PlanRiesgosComponent;
  let fixture: ComponentFixture<PlanRiesgosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanRiesgosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanRiesgosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
