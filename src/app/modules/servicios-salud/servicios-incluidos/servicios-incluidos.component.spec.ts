import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosIncluidosComponent } from './servicios-incluidos.component';

describe('ServiciosIncluidosComponent', () => {
  let component: ServiciosIncluidosComponent;
  let fixture: ComponentFixture<ServiciosIncluidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosIncluidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosIncluidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
