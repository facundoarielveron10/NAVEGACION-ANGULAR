import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    FormsModule, // Formularios de tipo plantilla
    ReactiveFormsModule, // Formularios de tipo reactivo
    NgIf,
    NgClass,
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent implements OnInit {
  formContact: FormGroup;
  user: any = {
    name: 'Facundo',
    email: 'facundoarielveron5@gmail.com',
  };

  constructor(private form: FormBuilder) {
    this.formContact = this.form.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {
    this.formContact.patchValue({
      name: this.user.name,
      email: this.user.email,
    });
    this.formContact.get('name')?.disable();
    this.formContact.get('email')?.disable();

    this.formContact.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  hasErrors = (controlName: string, errorType: string) => {
    return (
      this.formContact.get(controlName)?.hasError(errorType) &&
      this.formContact.get(controlName)?.touched
    );
  };

  submit = () => {
    console.log(this.formContact);
  };
}
