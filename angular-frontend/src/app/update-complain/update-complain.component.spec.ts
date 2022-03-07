import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComplainComponent } from './update-complain.component';

describe('UpdateComplainComponent', () => {
  let component: UpdateComplainComponent;
  let fixture: ComponentFixture<UpdateComplainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateComplainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
