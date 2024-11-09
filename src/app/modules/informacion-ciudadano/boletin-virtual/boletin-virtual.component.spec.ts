import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletinVirtualComponent } from './boletin-virtual.component';

describe('BoletinVirtualComponent', () => {
  let component: BoletinVirtualComponent;
  let fixture: ComponentFixture<BoletinVirtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoletinVirtualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoletinVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
