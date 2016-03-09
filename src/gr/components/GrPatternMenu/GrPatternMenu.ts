import {Component, Input} from 'angular2/core';
import {Observable} from 'rxjs';
import {NgFor} from 'angular2/common';
import {IPatterns} from '../../models/patterns';
import {GrPatternDetail} from '../../components/GrPatternDetail/GrPatternDetail';

@Component({
    selector: 'GrPatternMenu',
    directives: [GrPatternDetail, NgFor],
    styles: [require('./GrPatternMenu.css')],
    template: require('./GrPatternMenu.html'),
})
export class GrPatternMenu {
    @Input() patterns: Observable<IPatterns>;
}
