import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaCafeteraComponent } from './zona-cafetera.component';

describe('ZonaCafeteraComponent', () => {
  let component: ZonaCafeteraComponent;
  let fixture: ComponentFixture<ZonaCafeteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZonaCafeteraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonaCafeteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
