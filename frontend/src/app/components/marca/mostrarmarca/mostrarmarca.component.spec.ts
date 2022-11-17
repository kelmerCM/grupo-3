import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarmarcaComponent } from './mostrarmarca.component';

describe('MostrarmarcaComponent', () => {
  let component: MostrarmarcaComponent;
  let fixture: ComponentFixture<MostrarmarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarmarcaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarmarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
