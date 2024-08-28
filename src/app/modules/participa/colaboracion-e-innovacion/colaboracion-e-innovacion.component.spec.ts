import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboracionEInnovacionComponent } from './colaboracion-e-innovacion.component';

describe('ColaboracionEInnovacionComponent', () => {
  let component: ColaboracionEInnovacionComponent;
  let fixture: ComponentFixture<ColaboracionEInnovacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaboracionEInnovacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColaboracionEInnovacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
