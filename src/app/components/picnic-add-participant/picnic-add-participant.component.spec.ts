import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicnicAddParticipantComponent } from './picnic-add-participant.component';

describe('PicnicAddParticipantComponent', () => {
  let component: PicnicAddParticipantComponent;
  let fixture: ComponentFixture<PicnicAddParticipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicnicAddParticipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicnicAddParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
