import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDelRiesgo260Component } from './gestion-del-riesgo-260.component';

describe('GestionDelRiesgo260Component', () => {
  let component: GestionDelRiesgo260Component;
  let fixture: ComponentFixture<GestionDelRiesgo260Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionDelRiesgo260Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDelRiesgo260Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
