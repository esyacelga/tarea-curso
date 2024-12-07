import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPantallaComponent } from './grid-pantalla.component';

describe('GridPantallaComponent', () => {
  let component: GridPantallaComponent;
  let fixture: ComponentFixture<GridPantallaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridPantallaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridPantallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
