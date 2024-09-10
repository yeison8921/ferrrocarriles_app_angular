import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivosinstComponent } from './objetivosinst.component';

describe('ObjetivosinstComponent', () => {
  let component: ObjetivosinstComponent;
  let fixture: ComponentFixture<ObjetivosinstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjetivosinstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjetivosinstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
