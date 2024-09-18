import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaInternaComponent } from './noticia-interna.component';

describe('NoticiaInternaComponent', () => {
  let component: NoticiaInternaComponent;
  let fixture: ComponentFixture<NoticiaInternaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticiaInternaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiaInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
