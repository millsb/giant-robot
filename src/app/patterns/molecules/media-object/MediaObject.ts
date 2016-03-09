import {Input} from "angular2/core";
declare var require: any;

import { Component } from 'angular2/core';
import { Pattern } from '../../../../gr/decorators/Pattern'
import { NgIf, NgClass } from 'angular2/common';

@Pattern({
    name: 'Media Object',
    type: 'molecules',
    description: 'A media object'
})
@Component({
    selector: 'media-object',
    directives: [NgIf, NgClass],
    template: require('./media-object.html')
})

export class MediaObject {
    @Input() orientation: string;
    @Input('media-url') mediaUrl: string;

    orientationClass() {
        let klass;
        switch(this.orientation) {
            case "left":
                klass = "is-left";
                break;
            case "right":
                klass = "is-right";
                break;
            default:
                klass = "is-left";
                break;
        }

        return klass;
    }
}