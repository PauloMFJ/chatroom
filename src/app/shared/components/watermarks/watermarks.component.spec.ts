import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatermarksComponent } from './watermarks.component';

describe('WatermarksComponent', () => {
  let component: WatermarksComponent;
  let fixture: ComponentFixture<WatermarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatermarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatermarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
