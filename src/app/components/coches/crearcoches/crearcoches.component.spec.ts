import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearcochesComponent } from './crearcoches.component';

describe('CrearcochesComponent', () => {
  let component: CrearcochesComponent;
  let fixture: ComponentFixture<CrearcochesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearcochesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearcochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
