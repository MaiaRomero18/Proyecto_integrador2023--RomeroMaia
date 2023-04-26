import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperineciaComponent } from './experinecia.component';

describe('ExperineciaComponent', () => {
  let component: ExperineciaComponent;
  let fixture: ComponentFixture<ExperineciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperineciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperineciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
