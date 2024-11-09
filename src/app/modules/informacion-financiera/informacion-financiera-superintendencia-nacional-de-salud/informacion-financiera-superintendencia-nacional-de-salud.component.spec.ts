import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionFinancieraSuperintendenciaNacionalDeSaludComponent } from './informacion-financiera-superintendencia-nacional-de-salud.component';

describe('InformacionFinancieraSuperintendenciaNacionalDeSaludComponent', () => {
  let component: InformacionFinancieraSuperintendenciaNacionalDeSaludComponent;
  let fixture: ComponentFixture<InformacionFinancieraSuperintendenciaNacionalDeSaludComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacionFinancieraSuperintendenciaNacionalDeSaludComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionFinancieraSuperintendenciaNacionalDeSaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
