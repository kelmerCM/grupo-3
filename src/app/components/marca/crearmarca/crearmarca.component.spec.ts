import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearmarcaComponent } from './crearmarca.component';

describe('CrearmarcaComponent', () => {
  let component: CrearmarcaComponent;
  let fixture: ComponentFixture<CrearmarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearmarcaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearmarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
