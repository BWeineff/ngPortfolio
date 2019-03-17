import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import {MatSnackBar} from '@angular/material';



@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit{
  contact: FormGroup;

  constructor(private fb: FormBuilder, private af: AngularFireDatabase, public snackbar: MatSnackBar) {
  }
  ngOnInit() {
      this.contact = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        subject: ['', Validators.required],
        message: ['', Validators.required]
      });
    }
    isSubmitted$:Boolean=false;


  
    onSubmit() {
      const {name, email, subject, message} = this.contact.value;
      const date = Date();
      const html = `
        <div>From: ${name}</div>
        <div>Email: <a href="mailto:${email}">${email}</a></div>
        <div>Date: ${date}</div>
        <div>Subject: ${subject}</div>
        <div>Message: ${message}</div>
      `;
      let formRequest = { name, email, subject, message, date, html };
      this.af.list('/messages').push(formRequest);
      let snackBarMessage = 'Your message was submitted succesfully, thank you!';
      let snackBarAction = 'Close'
      const snackBarFunc = (message: string, action: string) => {
        this.snackbar.open(message, action, {
          duration:2050,
        });
      };
      snackBarFunc(snackBarMessage, snackBarAction);
      
      this.contact.reset();
    }
  
  }


