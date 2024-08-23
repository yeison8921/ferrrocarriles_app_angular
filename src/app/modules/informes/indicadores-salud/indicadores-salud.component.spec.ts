import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadoresSaludComponent } from './indicadores-salud.component';

describe('IndicadoresSaludComponent', () => {
  let component: IndicadoresSaludComponent;
  let fixture: ComponentFixture<IndicadoresSaludComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndicadoresSaludComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicadoresSaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
