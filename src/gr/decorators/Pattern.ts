import 'reflect-metadata';

export interface PatternAttrs {
    name: string;
    type: string;
    description?: string;
    doc?: string;
}

export function Pattern(value: PatternAttrs) {
    return function(target: Function) {
        Reflect.defineMetadata('pattern', value, target);
    };
}
