import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicnicHomeComponent } from './picnic-home.component';

describe('PicnicHomeComponent', () => {
  let component: PicnicHomeComponent;
  let fixture: ComponentFixture<PicnicHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicnicHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicnicHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
