import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionCiudadanoComponent } from './informacion-ciudadano.component';

describe('InformacionCiudadanoComponent', () => {
  let component: InformacionCiudadanoComponent;
  let fixture: ComponentFixture<InformacionCiudadanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacionCiudadanoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionCiudadanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
