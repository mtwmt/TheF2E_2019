import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasklistComponent } from './masklist.component';

describe('MasklistComponent', () => {
  let component: MasklistComponent;
  let fixture: ComponentFixture<MasklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
