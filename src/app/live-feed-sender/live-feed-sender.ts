import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-live-feed-sender',
  imports: [FormsModule],
  templateUrl: './live-feed-sender.html',
  styleUrl: './live-feed-sender.scss',
})
export class LiveFeedSender {

  private firstName:string="";
  private lasstName:string="";
  private greetMessage:string="";
  private submittedForm:boolean=false;
constructor(){}

onSubmit(){
  this.submittedForm=true;
}
}
