import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  fontColor = '#55ACEE';

  greeting = 'Welcome! Enter your name: ';

  name = '';

  show = true;
  hide = false;

  onKeyUp() {
    console.log(this.name);
  }

  sayMessage() {
    alert();
  }


}
