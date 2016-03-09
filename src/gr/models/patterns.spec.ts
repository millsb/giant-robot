import {provide, Inject} from 'angular2/core';
import {makePatternData} from './patterns';
import {Pattern, PatternAttrs} from './../decorators/Pattern';
import {patternsR} from './../reducers/patternsR';
import {Store, provideStore} from '@ngrx/store';
import {beforeEachProviders, inject, it, describe} from 'angular2/testing';
import {List} from 'immutable';
import {Patterns} from './patterns';

@Pattern({
    name: 'Test Atom 1',
    type: 'atoms'
})
class TestAtom1 {}

@Pattern({
    name: 'Test Atom 2',
    type: 'atoms'
})
class TestAtom2 {}

@Pattern({
    name: 'Test Molecule 1',
    type: 'molecule'
})
class TestMolecule1 {}

describe('PatternData', () => {
    beforeEachProviders(() => [
        provideStore({patternsR}, {patterns: makePatternData([TestAtom1, TestAtom2, TestMolecule1])}),
        Patterns
    ]);

    it('should filter patterns', inject([Patterns], (patterns: Patterns) => {
        patterns.filter('atoms');
        patterns.patterns$.subscribe( p => console.log(p) );
    }));

});

