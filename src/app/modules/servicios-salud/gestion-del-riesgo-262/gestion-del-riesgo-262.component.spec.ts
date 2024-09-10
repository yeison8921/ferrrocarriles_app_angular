import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDelRiesgo262Component } from './gestion-del-riesgo-262.component';

describe('GestionDelRiesgo262Component', () => {
  let component: GestionDelRiesgo262Component;
  let fixture: ComponentFixture<GestionDelRiesgo262Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionDelRiesgo262Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDelRiesgo262Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
