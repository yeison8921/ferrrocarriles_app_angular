import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaCesarSantanderComponent } from './zona-cesar-santander.component';

describe('ZonaCesarSantanderComponent', () => {
  let component: ZonaCesarSantanderComponent;
  let fixture: ComponentFixture<ZonaCesarSantanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZonaCesarSantanderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonaCesarSantanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
