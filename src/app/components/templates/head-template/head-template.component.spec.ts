import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadTemplateComponent } from './head-template.component';

describe('HeadTemplateComponent', () => {
  let component: HeadTemplateComponent;
  let fixture: ComponentFixture<HeadTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
