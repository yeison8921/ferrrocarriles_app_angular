import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeMedicionSatisfaccionCiudadanoComponent } from './informe-medicion-satisfaccion-ciudadano.component';

describe('InformeMedicionSatisfaccionCiudadanoComponent', () => {
  let component: InformeMedicionSatisfaccionCiudadanoComponent;
  let fixture: ComponentFixture<InformeMedicionSatisfaccionCiudadanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformeMedicionSatisfaccionCiudadanoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformeMedicionSatisfaccionCiudadanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
