import { Component } from '@angular/core';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons/faRupeeSign';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'it-edu';
  faRupeeSign = faRupeeSign;
}
