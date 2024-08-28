import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanPoliticaComponent } from './plan-politica.component';

describe('PlanPoliticaComponent', () => {
  let component: PlanPoliticaComponent;
  let fixture: ComponentFixture<PlanPoliticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanPoliticaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanPoliticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
