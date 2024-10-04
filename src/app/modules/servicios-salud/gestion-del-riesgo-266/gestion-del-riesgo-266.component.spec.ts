import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDelRiesgo266Component } from './gestion-del-riesgo-266.component';

describe('GestionDelRiesgo266Component', () => {
  let component: GestionDelRiesgo266Component;
  let fixture: ComponentFixture<GestionDelRiesgo266Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionDelRiesgo266Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDelRiesgo266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
