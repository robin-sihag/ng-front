import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';




interface formFields {

  firstName: string
  lastName: string
  greetMessage: string
  submittedForm: boolean

}
@Component({
  selector: 'app-live-feed-sender',
  imports: [FormsModule,CommonModule],
  templateUrl: './live-feed-sender.html',
  styleUrl: './live-feed-sender.scss',
})
export class LiveFeedSender {

  constructor() { }
   form:formFields={
    firstName: '',
    lastName: '',
    greetMessage: '',
    submittedForm:false,

  }

  autoPopulate(){

  }
  onSubmit(submittedForm: NgForm) {
    this.form.submittedForm = true;
    console.log("loggging the form data", this.form);
   
  }
}
