import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanEstrategicoComponent } from './plan-estrategico.component';

describe('PlanEstrategicoComponent', () => {
  let component: PlanEstrategicoComponent;
  let fixture: ComponentFixture<PlanEstrategicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanEstrategicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanEstrategicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
