import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuventudComponent } from './juventud.component';

describe('JuventudComponent', () => {
  let component: JuventudComponent;
  let fixture: ComponentFixture<JuventudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuventudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuventudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
