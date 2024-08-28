import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanGestionHumanaComponent } from './plan-gestion-humana.component';

describe('PlanGestionHumanaComponent', () => {
  let component: PlanGestionHumanaComponent;
  let fixture: ComponentFixture<PlanGestionHumanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanGestionHumanaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanGestionHumanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
