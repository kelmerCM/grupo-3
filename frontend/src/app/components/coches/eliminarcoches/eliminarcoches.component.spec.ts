import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarcochesComponent } from './eliminarcoches.component';

describe('EliminarcochesComponent', () => {
  let component: EliminarcochesComponent;
  let fixture: ComponentFixture<EliminarcochesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarcochesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarcochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
