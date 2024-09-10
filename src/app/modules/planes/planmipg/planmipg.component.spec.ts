import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanmipgComponent } from './planmipg.component';

describe('PlanmipgComponent', () => {
  let component: PlanmipgComponent;
  let fixture: ComponentFixture<PlanmipgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanmipgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanmipgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
