import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportePensionadosFallecidosComponent } from './reporte-pensionados-fallecidos.component';

describe('ReportePensionadosFallecidosComponent', () => {
  let component: ReportePensionadosFallecidosComponent;
  let fixture: ComponentFixture<ReportePensionadosFallecidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportePensionadosFallecidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportePensionadosFallecidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
