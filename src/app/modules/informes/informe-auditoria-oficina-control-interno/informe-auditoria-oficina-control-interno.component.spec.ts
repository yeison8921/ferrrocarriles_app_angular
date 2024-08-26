import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeAuditoriaOficinaControlInternoComponent } from './informe-auditoria-oficina-control-interno.component';

describe('InformeAuditoriaOficinaControlInternoComponent', () => {
  let component: InformeAuditoriaOficinaControlInternoComponent;
  let fixture: ComponentFixture<InformeAuditoriaOficinaControlInternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformeAuditoriaOficinaControlInternoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformeAuditoriaOficinaControlInternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
