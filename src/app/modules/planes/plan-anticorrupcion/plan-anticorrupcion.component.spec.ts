import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanAnticorrupcionComponent } from './plan-anticorrupcion.component';

describe('PlanAnticorrupcionComponent', () => {
  let component: PlanAnticorrupcionComponent;
  let fixture: ComponentFixture<PlanAnticorrupcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanAnticorrupcionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanAnticorrupcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
