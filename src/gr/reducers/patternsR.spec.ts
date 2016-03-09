import 'reflect-metadata';
import {patternsR} from './patternsR';
import {IPatterns, makePatternData} from '../models/patterns';
import {Pattern} from './../decorators/Pattern';
import {Map, List, fromJS} from 'immutable';

@Pattern({
   name: 'Test Atom 1',
   type: 'atom'
})
class TestAtom1 {}

@Pattern({
   name: 'Test Atom 2',
   type: 'atom'
})
class TestAtom2 {}

@Pattern({
   name: 'Test Molecule 1',
   type: 'molecule'
})
class TestMolecule1 {}

describe('Patterns Reducer', () => {
   beforeEach(() => {
      let patternData = makePatternData([TestAtom1, TestAtom2, TestMolecule1]);
      this.initialState = Map<string, any>({ patterns: patternData });
   });
   it('should filter patterns by bucket type', () => {
      let state = patternsR(this.initialState, { type: 'FILTER_PATTERNS', payload: { bucket: 'molecule'} });
      expect(state.size).toEqual(1);
   });
});