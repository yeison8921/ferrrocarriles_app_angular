import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoIntegridadComponent } from './codigo-integridad.component';

describe('CodigoIntegridadComponent', () => {
  let component: CodigoIntegridadComponent;
  let fixture: ComponentFixture<CodigoIntegridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodigoIntegridadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodigoIntegridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
