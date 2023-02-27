import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalalCardComponent } from './halal-card.component';

describe('HalalCardComponent', () => {
  let component: HalalCardComponent;
  let fixture: ComponentFixture<HalalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalalCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HalalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
