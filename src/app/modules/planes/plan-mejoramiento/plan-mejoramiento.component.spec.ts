import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanMejoramientoComponent } from './plan-mejoramiento.component';

describe('PlanMejoramientoComponent', () => {
  let component: PlanMejoramientoComponent;
  let fixture: ComponentFixture<PlanMejoramientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanMejoramientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanMejoramientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
