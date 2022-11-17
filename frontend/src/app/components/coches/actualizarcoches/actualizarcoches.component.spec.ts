import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarcochesComponent } from './actualizarcoches.component';

describe('ActualizarcochesComponent', () => {
  let component: ActualizarcochesComponent;
  let fixture: ComponentFixture<ActualizarcochesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarcochesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarcochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
