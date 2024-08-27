import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanParticipacionComponent } from './plan-participacion.component';

describe('PlanParticipacionComponent', () => {
  let component: PlanParticipacionComponent;
  let fixture: ComponentFixture<PlanParticipacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanParticipacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanParticipacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
