import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesEstadoControlInternoComponent } from './informes-estado-control-interno.component';

describe('InformesEstadoControlInternoComponent', () => {
  let component: InformesEstadoControlInternoComponent;
  let fixture: ComponentFixture<InformesEstadoControlInternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformesEstadoControlInternoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformesEstadoControlInternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
