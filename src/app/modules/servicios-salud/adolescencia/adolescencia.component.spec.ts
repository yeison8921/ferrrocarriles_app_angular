import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdolescenciaComponent } from './adolescencia.component';

describe('AdolescenciaComponent', () => {
  let component: AdolescenciaComponent;
  let fixture: ComponentFixture<AdolescenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdolescenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdolescenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
