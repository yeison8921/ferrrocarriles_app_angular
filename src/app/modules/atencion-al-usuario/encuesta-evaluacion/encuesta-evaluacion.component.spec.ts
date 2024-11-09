import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaEvaluacionComponent } from './encuesta-evaluacion.component';

describe('EncuestaEvaluacionComponent', () => {
  let component: EncuestaEvaluacionComponent;
  let fixture: ComponentFixture<EncuestaEvaluacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncuestaEvaluacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncuestaEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
