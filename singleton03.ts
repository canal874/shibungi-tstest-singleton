/**
* Copyright (c) Hidekazu Kubota
* This source code is licensed under the Mozilla Public License Version 2.0 found in the LICENSE file in the root directory of this source tree.
*/

/* Tested with tsc 3.8.3 with strict compiler options */

export {}

/**
 * Singleton (3)
 * Modifying constructor to return a unique instance
 */
class Singleton03 {
    private static instance: Singleton03;

    private _id: string = 'default';
    get id(): string{ return this._id; }
    set id(val: string){ this._id = val; }

    public constructor(){
        if(!Singleton03.instance){
            Singleton03.instance = this;
            console.log('An instance has been created.');
        }
        else{
            console.log('The instance has already been created.');
        }
        // constructor is allowed to contain return statements.
        // https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#83-constructor-declarations
        return Singleton03.instance;
    }
}

const singleton03 = new Singleton03(); // 'An instance has been created.'
console.log(singleton03.id); // 'default' -- OK.
singleton03.id = 'singleton03';

const alreadyCreated03 = new Singleton03(); // 'The instance has already been created.' -- OK.
console.log(alreadyCreated03.id); // 'singleton03' -- OK.
