import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpFromComponent } from './pop-up-from.component';

describe('PopUpFromComponent', () => {
  let component: PopUpFromComponent;
  let fixture: ComponentFixture<PopUpFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
