import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDelRiesgo261Component } from './gestion-del-riesgo-261.component';

describe('GestionDelRiesgo261Component', () => {
  let component: GestionDelRiesgo261Component;
  let fixture: ComponentFixture<GestionDelRiesgo261Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionDelRiesgo261Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDelRiesgo261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
