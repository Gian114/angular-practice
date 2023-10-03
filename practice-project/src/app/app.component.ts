import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice-project';

  data = [ "ciao", "come", "stai"];

  onReceive(data: string) {
    console.log(data);
  }
  
}
