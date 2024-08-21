import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriasCongresoComponent } from './memorias-congreso.component';

describe('MemoriasCongresoComponent', () => {
  let component: MemoriasCongresoComponent;
  let fixture: ComponentFixture<MemoriasCongresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoriasCongresoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoriasCongresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
