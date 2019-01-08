import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerI18n, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { Picnic } from '../../models/picnic';
import { PicnicService } from '../../services/picnic.service';

const I18N_VALUES = {
  'fr': {
    weekdays: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
    months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc'],
  }
  // other languages you would support
};

// Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
// use the Angular LOCALE_ID value
@Injectable()
export class I18n {
  language = 'fr';
}

// Define custom service providing the months and weekdays translations
@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {

  constructor(private _i18n: I18n) {
    super();
  }

  getWeekdayShortName(weekday: number): string {
    return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
  }
  getMonthShortName(month: number): string {
    return I18N_VALUES[this._i18n.language].months[month - 1];
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }

  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
}

function padNumber(value: number) {
    if (isNumber(value)) {
        return `0${value}`.slice(-2);
    } else {
        return '';
    }
}

function isNumber(value: any): boolean {
    return !isNaN(toInteger(value));
}

function toInteger(value: any): number {
    return parseInt(`${value}`, 10);
}

@Injectable()
export class NgbDateFRParserFormatter extends NgbDateParserFormatter {
    parse(value: string): NgbDateStruct {
        if (value) {
            const dateParts = value.trim().split('.');
            if (dateParts.length === 1 && isNumber(dateParts[0])) {
                return {year: toInteger(dateParts[0]), month: null, day: null};
            } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
                return {year: toInteger(dateParts[1]), month: toInteger(dateParts[0]), day: null};
            } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
                return {year: toInteger(dateParts[2]), month: toInteger(dateParts[1]), day: toInteger(dateParts[0])};
            }
        }
        return null;
    }

    format(date: NgbDateStruct): string {
        let stringDate = '';
        if (date) {
            stringDate += isNumber(date.day) ? padNumber(date.day) + '.' : '';
            stringDate += isNumber(date.month) ? padNumber(date.month) + '.' : '';
            stringDate += date.year;
        }
        return stringDate;
    }
}

@Component({
  selector: 'app-picnic-add',
  templateUrl: './picnic-add.component.html',
  styleUrls: ['./picnic-add.component.scss'],
  providers: [I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n},
              {provide: NgbDateParserFormatter, useClass: NgbDateFRParserFormatter}] // define custom NgbDatepickerI18n provider
})
export class PicnicAddComponent {

  title: string;
  today = new Date();
  date = {year: this.today.getFullYear(), month: this.today.getMonth() + 1, day: this.today.getDate()};
  time = {hour: 12, minute: 0};
  location: string;

  constructor(public activeModal: NgbActiveModal,
              private readonly _router: Router,
              private readonly _picnic: PicnicService) { }

  addPicnic() {
    const picnic: Picnic = {
      title: this.title,
      date: new Date(this.date.year, this.date.month - 1, this.date.day, this.time.hour, this.time.minute, 0),
      location: this.location || '',
      participants: []
    };
    this._picnic.add(picnic).then(p => {
      this._router.navigate([`picnic/${p.id}/view`]);
      this.activeModal.close();
    });
  }

}
