import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAttandanceComponent } from './add-attandance.component';

describe('AddAttandanceComponent', () => {
  let component: AddAttandanceComponent;
  let fixture: ComponentFixture<AddAttandanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAttandanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAttandanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
