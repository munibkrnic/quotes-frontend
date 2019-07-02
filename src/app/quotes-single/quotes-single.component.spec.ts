import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesSingleComponent } from './quotes-single.component';

describe('QuotesSingleComponent', () => {
  let component: QuotesSingleComponent;
  let fixture: ComponentFixture<QuotesSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
