import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranspareciaPublicaComponent } from './transparecia-publica.component';

describe('TranspareciaPublicaComponent', () => {
  let component: TranspareciaPublicaComponent;
  let fixture: ComponentFixture<TranspareciaPublicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranspareciaPublicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranspareciaPublicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
