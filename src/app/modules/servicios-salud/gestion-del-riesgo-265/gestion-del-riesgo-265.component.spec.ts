import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDelRiesgo265Component } from './gestion-del-riesgo-265.component';

describe('GestionDelRiesgo265Component', () => {
  let component: GestionDelRiesgo265Component;
  let fixture: ComponentFixture<GestionDelRiesgo265Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionDelRiesgo265Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDelRiesgo265Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
