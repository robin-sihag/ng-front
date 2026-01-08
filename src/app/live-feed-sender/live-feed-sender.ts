import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-live-feed-sender',
  imports: [FormsModule],
  templateUrl: './live-feed-sender.html',
  styleUrl: './live-feed-sender.scss',
})

interface formFields {

  firstName: string
  lastName: string
  greetMessage: string
  submittedForm: boolean

}

export class LiveFeedSender {

  constructor() { }
  private form:formFields={
    firstName: '',
    lastName: '',
    greetMessage: '',
    submittedForm:false,

  }

  autoPopulate()
  onSubmit(submittedForm: NgForm) {
    this.form.submittedForm = true;
    console.log("loggging and changing firstname", this.firstName);
    form.controls['firstName'].setValue("changed " + this.firstName)
  }
}
