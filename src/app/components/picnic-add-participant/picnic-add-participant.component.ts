import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Picnic } from '../../models/picnic';
import { PicnicService } from '../../services/picnic.service';

@Component({
  selector: 'app-picnic-add-participant',
  templateUrl: './picnic-add-participant.component.html',
  styleUrls: ['./picnic-add-participant.component.scss']
})
export class PicnicAddParticipantComponent implements OnInit {

  participant = {
    present: '',
    name: '',
    meal: '',
    surprise: false,
    saltyplate: '',
    sweetplate: '',
    beverage: '',
  };

  eventID = '';
  event$: Observable<{}>;

  constructor (private readonly picnicService: PicnicService,
               private readonly _router: Router,
               private readonly _route: ActivatedRoute) {}

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.eventID = params.id;
      this.event$ = this.picnicService.getPicnic(params.id)
        .pipe(
          map(p => {
            if (p['date']['seconds']) {
              p['date'] = new Date(p['date']['seconds'] * 1000);
            }
            return p;
          })
        );
    });
  }

  get validPlates() {
    if (this.participant.meal === 'sweet' && this.participant.sweetplate) {
      return true;
    }
    if (this.participant.meal === 'salty' && this.participant.saltyplate) {
      return true;
    }
    if (this.participant.meal === 'both' && this.participant.sweetplate  && this.participant.saltyplate) {
      return true;
    }
    if (this.participant.meal === 'beverage' && this.participant.beverage) {
      return true;
    }
  }

  save(event) {
    event.id = this.eventID;
    if (!event.participants) {
      event.participants = [];
    }
    event.participants.push(this.participant);
    this.picnicService.update(event);
    this.goto();
  }

  goto() {
    this._router.navigate([`picnic/${this.eventID}/view`]);
  }

}
