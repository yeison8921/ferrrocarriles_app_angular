import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesPercepcionComponent } from './informes-percepcion.component';

describe('InformesPercepcionComponent', () => {
  let component: InformesPercepcionComponent;
  let fixture: ComponentFixture<InformesPercepcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformesPercepcionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformesPercepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
