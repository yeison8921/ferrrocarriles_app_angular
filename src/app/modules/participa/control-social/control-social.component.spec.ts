import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlSocialComponent } from './control-social.component';

describe('ControlSocialComponent', () => {
  let component: ControlSocialComponent;
  let fixture: ComponentFixture<ControlSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlSocialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
