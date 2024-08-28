import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneacionGestionYControlComponent } from './planeacion-gestion-y-control.component';

describe('PlaneacionGestionYControlComponent', () => {
  let component: PlaneacionGestionYControlComponent;
  let fixture: ComponentFixture<PlaneacionGestionYControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaneacionGestionYControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaneacionGestionYControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
