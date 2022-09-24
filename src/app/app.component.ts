import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Simple Quote Designer';
  quote = 'This is a short quote.';
  boardWidth = 400;
  boardHeight = 400;
  cardColor = 'cyan';
  fontSize = 20;
  fontColor = 'black';
}
