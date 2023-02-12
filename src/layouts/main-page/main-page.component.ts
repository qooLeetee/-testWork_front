import { Component, ViewChild } from '@angular/core';
import { Message } from 'src/models/Message';
import { Theme } from 'src/models/Theme';
import { DataService } from 'src/app/data.service';
import { FormBuilder, NgModel, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  themes: Theme[] = [];
  message = new Message();
  humanTestStat = false;

  @ViewChild('name') private name?: NgModel;
  @ViewChild('email') private email?: NgModel;
  @ViewChild('phone') private phone?: NgModel;
  @ViewChild('content') private content?: NgModel;

  constructor(private dataService: DataService, private formBuilder: FormBuilder){
    this.dataService.getThemes().subscribe({next:(data) => {
      this.themes = data;
      if (this.themes.length){
        this.message.theme = this.themes[0];
      }
    }});

    this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }

  /*для большей эффективности необходимо учитывать ввод через paste*/
  changeNumberFieldKeyDown(event:KeyboardEvent) {
    if(event.key?.match(/\D/) &&
      !['Backspace', 'ArrowLeft','ArrowRight','Delete'].includes(event.key)){
      event.preventDefault();
    }
  }

  submit() {
    if (this.humanTestStat && this.name?.valid && this.email?.valid && this.phone?.valid && this.content?.valid) {
      this.dataService.createMessage(this.message).subscribe((response: any) => {console.log("response:", response)});
    }
    else{
      alert('Условия отправки не соблюдены.')
    }
  }

  humanTestSuccess() {
    this.humanTestStat = true;
  }
}
