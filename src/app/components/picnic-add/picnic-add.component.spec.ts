import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicnicAddComponent } from './picnic-add.component';

describe('PicnicAddComponent', () => {
  let component: PicnicAddComponent;
  let fixture: ComponentFixture<PicnicAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicnicAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicnicAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
