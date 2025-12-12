import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Certificadoingresoyretenciones } from './certificadoingresoyretenciones';

describe('Certificadoingresoyretenciones', () => {
  let component: Certificadoingresoyretenciones;
  let fixture: ComponentFixture<Certificadoingresoyretenciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Certificadoingresoyretenciones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Certificadoingresoyretenciones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
