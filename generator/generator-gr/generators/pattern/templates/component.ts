declare var require: any;

import { Component } from 'angular2/core';

@Component({
  selector: '<%= selectorName %>',
  directives: [],
  template: require('./<%= htmlFile %>')
})
export class <%= componentName %> { }
