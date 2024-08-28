import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanAdquisicionesComponent } from './plan-adquisiciones.component';

describe('PlanAdquisicionesComponent', () => {
  let component: PlanAdquisicionesComponent;
  let fixture: ComponentFixture<PlanAdquisicionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanAdquisicionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanAdquisicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
