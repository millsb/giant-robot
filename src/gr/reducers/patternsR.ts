import * as _ from 'lodash';
import { Store, Reducer, Action } from '@ngrx/store';
import { PatternAttrs } from '../decorators/Pattern';
import {makePatternData, IPatterns} from '../models/patterns';
import { ALL_PATTERNS } from '../../app/patterns/patterns';
import {
    FILTER_PATTERNS
} from '../models/patterns';

const initialState: any = {
    patterns: makePatternData(ALL_PATTERNS)
};

export const patternsR: Reducer<any> = (state = initialState, action: Action) => {
    switch ( action.type ) {
        case FILTER_PATTERNS:
             return _.filter(state, { type: action.payload.bucket });
        default:
            return state;
    }
};

