
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { Picnic } from '../models/picnic';
import { Participant } from '../models/participant';

import { Observable } from 'rxjs';

@Injectable()
export class PicnicService {
  picnicCollection: AngularFirestoreCollection<Picnic>;
  picnic: Observable<Picnic[]>;
  picnicDoc: AngularFirestoreDocument<Picnic>;

  constructor(public afs: AngularFirestore) {
    this.picnicCollection = this.afs.collection(`/picnic`);
  }

  getPicnic(id) {
    return this.afs.doc('picnic/' + id).valueChanges();
  }

  add(picnic: Picnic): Promise<any> {
    return new Promise((resolve, reject) => {
      this.picnicCollection.add(picnic)
        .then((res) => {
          console.log('dataService: createOne success: res: ', res);
          resolve(res);
        }).catch(err => {
          console.error('dataService: createOne: error: ', err);
          reject(err);
        });
    });
  }

  delete(picnic: Picnic) {
    this.picnicDoc = this.afs.doc(`picnic/${picnic.id}`);
    this.picnicDoc.delete();
  }

  update(picnic: Picnic) {
    this.picnicDoc = this.afs.doc(`picnic/${picnic.id}`);
    this.picnicDoc.update(picnic);
  }
}
