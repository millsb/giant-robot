import {Component, Input, DynamicComponentLoader, ElementRef} from 'angular2/core';
import {PatternAttrs} from '../../decorators/Pattern';

@Component({
    selector: 'GrPatternDetail',
    template: require('./GrPatternDetail.html')
})
export class GrPatternDetail {
    @Input() patternData: PatternAttrs;
}

