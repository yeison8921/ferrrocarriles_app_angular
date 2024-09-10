import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VejezComponent } from './vejez.component';

describe('VejezComponent', () => {
  let component: VejezComponent;
  let fixture: ComponentFixture<VejezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VejezComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VejezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
