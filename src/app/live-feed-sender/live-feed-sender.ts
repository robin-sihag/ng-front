import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';




interface formFields {

  firstName: string
  lastName: string
  greetMessage: string
  rememberMe: boolean

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
    rememberMe:false,

  }

  autoPopulate(){

  }
  onSubmit(submittedForm: NgForm) {
    console.log("loggging the form data", this.form);
   
  }
}
