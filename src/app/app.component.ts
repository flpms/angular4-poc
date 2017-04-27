import { Component } from '@angular/core';

import { Note } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  model: Note = new Note(1, '', '', '');

  onSubmit(evt) {
    console.log("= = = = 14", evt);
    console.log(this.model);
  }
}
