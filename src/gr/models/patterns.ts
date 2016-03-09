import 'reflect-metadata';
import { Injectable } from 'angular2/core';
import { Reducer, Store, Action } from '@ngrx/store';

import {PatternAttrs} from '../decorators/Pattern';
import {Observable, BehaviorSubject} from 'rxjs/Rx';
import { fromJS, List } from 'immutable';

export interface IPatterns extends Map<string, any> {
    patterns: Array<PatternAttrs>;
}

export function makePatternData(components: Array<Function>): Array<PatternAttrs> {
    return <Array<PatternAttrs>> components.map( c => Reflect.getMetadata('pattern', c));
}

export const FILTER_PATTERNS = 'FILTER_PATTERNS';

@Injectable()
export class Patterns {
    patterns$: Observable<IPatterns>;
    private actions$ = new BehaviorSubject<Action>({ type: null, payload: null });

    constructor(private _store: Store<any>) {
        this.patterns$ = this._store.select<IPatterns>('patterns');

        let filter = this.actions$
            .filter(action => action.type === FILTER_PATTERNS);

        Observable
            .merge(filter)
            .subscribe((action: Action) => _store.dispatch(action));
    }

    filter(bucket) {
       this.actions$.next({ type: FILTER_PATTERNS, payload: { bucket: bucket }});
    }
}

