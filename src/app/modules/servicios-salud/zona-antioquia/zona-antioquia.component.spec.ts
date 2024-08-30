import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaAntioquiaComponent } from './zona-antioquia.component';

describe('ZonaAntioquiaComponent', () => {
  let component: ZonaAntioquiaComponent;
  let fixture: ComponentFixture<ZonaAntioquiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZonaAntioquiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonaAntioquiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
