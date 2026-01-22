import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-live-feed-rec',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './live-feed-rec.html',
  styleUrl: './live-feed-rec.scss',
})
export class LiveFeedRec {
  constructor(private fb: FormBuilder) {}
  formModel!: FormGroup;

  ngOnInit() {
    this.formModel = this.fb.group({
      firstName: [
        'Default value',
        [Validators.required, Validators.minLength(3), Validators.maxLength(10)],
      ],
      lastName: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(10)],
      ],
      waveGreeting: [false],
    });
  }

  onSubmit(){}
}
