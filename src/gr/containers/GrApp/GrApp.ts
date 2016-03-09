import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Store} from '@ngrx/store';
import {GrPatternMenu} from '../../components/GrPatternMenu/GrPatternMenu';
import {Observable} from 'rxjs/Observable';
import {PatternAttrs} from '../../decorators/Pattern';
import {Patterns, IPatterns} from '../../models/patterns';

@Component({
   selector: 'gr-app',
   directives: [GrPatternMenu, NgFor],
   template: `
      <div class="gr-col">
         <GrPatternMenu [patterns]="patterns$"></GrPatternMenu>
      </div>
   `
})
export class GrApp {
   patterns$: Observable<IPatterns>;

   constructor(public patterns: Patterns) {
      this.patterns$ = this.patterns.patterns$;
   }
}
