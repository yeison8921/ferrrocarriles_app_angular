import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDelRiesgo263Component } from './gestion-del-riesgo-263.component';

describe('GestionDelRiesgo263Component', () => {
  let component: GestionDelRiesgo263Component;
  let fixture: ComponentFixture<GestionDelRiesgo263Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionDelRiesgo263Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDelRiesgo263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
