import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PicnicAddComponent } from '../picnic-add/picnic-add.component';

@Component({
  selector: 'app-picnic-home',
  templateUrl: './picnic-home.component.html',
  styleUrls: ['./picnic-home.component.scss']
})
export class PicnicHomeComponent {

  constructor(private readonly _modalService: NgbModal) {}

  create() {
    const modalRef = this._modalService.open(PicnicAddComponent);
    modalRef.componentInstance.name = 'World';
  }

}
