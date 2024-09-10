import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDelRiesgo264Component } from './gestion-del-riesgo-264.component';

describe('GestionDelRiesgo264Component', () => {
  let component: GestionDelRiesgo264Component;
  let fixture: ComponentFixture<GestionDelRiesgo264Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionDelRiesgo264Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDelRiesgo264Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
