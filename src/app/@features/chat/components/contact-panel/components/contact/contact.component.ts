import { Component, Input } from '@angular/core';
import { ContactDTO } from '../../models/contact.dto';

@Component({
  selector: 'matcha-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @Input() contact!: ContactDTO;
  constructor() {}
}
