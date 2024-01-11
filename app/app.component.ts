import { Component, OnInit, ComponentRef } from '@angular/core';
import { HelloEnComponent, HelloTwComponent } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular 4';
  component: any;
  inputs = {
    hello: 'world from input',
    something: () => 'can be really complex'
  };
  outputs = {
    onSomething: (type) => alert(type)
  }

  ngOnInit() {
    setInterval(() => { 
      this.component = Math.random() > 0.5 ? HelloEnComponent : HelloTwComponent; 
    }, 2000);
  }
}
