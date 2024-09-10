import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultezComponent } from './adultez.component';

describe('AdultezComponent', () => {
  let component: AdultezComponent;
  let fixture: ComponentFixture<AdultezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdultezComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdultezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
