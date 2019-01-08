import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicnicListComponent } from './picnic-list.component';

describe('PicnicListComponent', () => {
  let component: PicnicListComponent;
  let fixture: ComponentFixture<PicnicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicnicListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicnicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
