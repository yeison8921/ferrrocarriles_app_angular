import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesEmpalmeComponent } from './informes-empalme.component';

describe('InformesEmpalmeComponent', () => {
  let component: InformesEmpalmeComponent;
  let fixture: ComponentFixture<InformesEmpalmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformesEmpalmeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformesEmpalmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
