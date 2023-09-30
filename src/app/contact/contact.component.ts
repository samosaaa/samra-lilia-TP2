import {Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [ContactService],
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private contactService: ContactService,private router: Router) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: [null],
      hideEmail: [false],
      email: ['', [Validators.required, Validators.email]],
      comment: ['', Validators.required]
    });
  }


  onSubmit() {
    if (this.contactForm.valid) {
      this.contactService.addContact(this.contactForm.value);
      alert('Le formulaire est valide');
    } else {
      alert('Le formulaire n\'est pas valide');
    }
    this.router.navigate(['/']);
  }
}
