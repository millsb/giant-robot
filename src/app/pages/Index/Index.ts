import {Component} from 'angular2/core';
import {CoverSheet} from '../CoverSheet/CoverSheet';
import {GrApp} from '../../../gr/containers/GrApp/GrApp';

@Component(({
    selector: 'index',
    directives: [GrApp, CoverSheet],
    template: `
            <cover-sheet></cover-sheet>
    `
}))
export class Index {}

