import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Picnic } from '../../models/picnic';
import { PicnicService } from '../../services/picnic.service';

@Component({
  selector: 'app-picnic-list',
  templateUrl: './picnic-list.component.html',
  styleUrls: ['./picnic-list.component.scss']
})
export class PicnicListComponent implements OnInit {

  eventID = '';
  event$: Observable<{}>;

  constructor (private picnicService: PicnicService,
               private _router: Router,
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

  addParticipant() {
    this._router.navigate([`picnic/${this.eventID}/add`]);
  }

}
