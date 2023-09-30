import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import {ContactForm} from "../contact/contact-form.model";

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss'],
})
export class GestionComponent {
  latestContactData: ContactForm | null;

  constructor(private contactService: ContactService) {
    this.latestContactData = this.contactService.getLatestContact();
  }
}
