import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaPacificoComponent } from './zona-pacifico.component';

describe('ZonaPacificoComponent', () => {
  let component: ZonaPacificoComponent;
  let fixture: ComponentFixture<ZonaPacificoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZonaPacificoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonaPacificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
