import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerHeaderComponent } from './consumer-header.component';

describe('ConsumerHeaderComponent', () => {
  let component: ConsumerHeaderComponent;
  let fixture: ComponentFixture<ConsumerHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
