import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanillaVirtualComponent } from './ventanilla-virtual.component';

describe('VentanillaVirtualComponent', () => {
  let component: VentanillaVirtualComponent;
  let fixture: ComponentFixture<VentanillaVirtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentanillaVirtualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentanillaVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
