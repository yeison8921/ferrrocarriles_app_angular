import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaCostaComponent } from './zona-costa.component';

describe('ZonaCostaComponent', () => {
  let component: ZonaCostaComponent;
  let fixture: ComponentFixture<ZonaCostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZonaCostaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonaCostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
