import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsDropdownComponent } from './bs-dropdown.component';

describe('BsDropdownComponent', () => {
  let component: BsDropdownComponent;
  let fixture: ComponentFixture<BsDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
