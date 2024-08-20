import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanEstrategicoTecComponent } from './plan-estrategico-tec.component';

describe('PlanEstrategicoTecComponent', () => {
  let component: PlanEstrategicoTecComponent;
  let fixture: ComponentFixture<PlanEstrategicoTecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanEstrategicoTecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanEstrategicoTecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
