import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanFortalecimientoComponent } from './plan-fortalecimiento.component';

describe('PlanFortalecimientoComponent', () => {
  let component: PlanFortalecimientoComponent;
  let fixture: ComponentFixture<PlanFortalecimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanFortalecimientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanFortalecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
