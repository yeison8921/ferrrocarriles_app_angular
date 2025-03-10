import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrosDirectivosComponent } from './nuestros-directivos.component';

describe('NuestrosDirectivosComponent', () => {
  let component: NuestrosDirectivosComponent;
  let fixture: ComponentFixture<NuestrosDirectivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuestrosDirectivosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuestrosDirectivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
