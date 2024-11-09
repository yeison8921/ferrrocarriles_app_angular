import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosExcluidosComponent } from './servicios-excluidos.component';

describe('ServiciosExcluidosComponent', () => {
  let component: ServiciosExcluidosComponent;
  let fixture: ComponentFixture<ServiciosExcluidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosExcluidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosExcluidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
