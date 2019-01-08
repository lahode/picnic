import { Participant } from './participant';

export interface Picnic {
  id?: string;
  title: string;
  date: Date;
  location: string;
  participants: Participant[];
}
