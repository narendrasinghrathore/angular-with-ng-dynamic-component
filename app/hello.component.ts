import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hello-en',
  template: `<h1>Hello {{name}}!{{hello}}</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloEnComponent  {
  @Input() name: string;
  @Input() hello: string;
  @Input() something: Function;
  @Output() onSomething = new EventEmitter<string>();
}

@Component({
  selector: 'hello-tw',
  template: `<h1>哈囉 {{name}}!{{hello}}</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloTwComponent  {
  @Input() name: string;
  @Input() hello: string;
  @Input() something: Function;
  @Output() onSomething = new EventEmitter<string>();
}
