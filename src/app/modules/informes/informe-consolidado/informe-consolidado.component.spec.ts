import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeConsolidadoComponent } from './informe-consolidado.component';

describe('InformeConsolidadoComponent', () => {
  let component: InformeConsolidadoComponent;
  let fixture: ComponentFixture<InformeConsolidadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformeConsolidadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformeConsolidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
