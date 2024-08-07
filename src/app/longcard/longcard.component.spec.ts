import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongcardComponent } from './longcard.component';

describe('LongcardComponent', () => {
  let component: LongcardComponent;
  let fixture: ComponentFixture<LongcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LongcardComponent]
    });
    fixture = TestBed.createComponent(LongcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
