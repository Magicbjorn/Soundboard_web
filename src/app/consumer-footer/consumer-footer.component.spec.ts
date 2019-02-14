import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerFooterComponent } from './consumer-footer.component';

describe('ConsumerFooterComponent', () => {
  let component: ConsumerFooterComponent;
  let fixture: ComponentFixture<ConsumerFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
