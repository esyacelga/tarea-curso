import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorPantallaComponent } from './contenedor-pantalla.component';

describe('ContenedorPantallaComponent', () => {
  let component: ContenedorPantallaComponent;
  let fixture: ComponentFixture<ContenedorPantallaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenedorPantallaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContenedorPantallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
