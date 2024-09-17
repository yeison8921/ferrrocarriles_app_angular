import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrasOficinasComponent } from './nuestras-oficinas.component';

describe('NuestrasOficinasComponent', () => {
  let component: NuestrasOficinasComponent;
  let fixture: ComponentFixture<NuestrasOficinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuestrasOficinasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuestrasOficinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
