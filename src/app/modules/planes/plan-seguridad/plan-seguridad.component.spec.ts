import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanSeguridadComponent } from './plan-seguridad.component';

describe('PlanSeguridadComponent', () => {
  let component: PlanSeguridadComponent;
  let fixture: ComponentFixture<PlanSeguridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanSeguridadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
