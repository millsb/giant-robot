import { Component } from 'angular2/core';
import { NgIf, NgClass } from 'angular2/common';
import {Pattern} from '../../../gr/decorators/Pattern';

@Pattern({
    name: 'PrimaryButton',
    type: 'atoms',
    description: 'The Button'
})
@Component({
    selector: 'PrimaryButton',
    directives: [NgIf, NgClass],
    template: `<button class="button">Test Button</button>`
})

export class PrimaryButton { }
