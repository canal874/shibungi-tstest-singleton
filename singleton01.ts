/**
* Copyright (c) Hidekazu Kubota
* This source code is licensed under the Mozilla Public License Version 2.0 found in the LICENSE file in the root directory of this source tree.
*/

/* Tested with tsc 3.8.3 with strict compiler options */

export {}

/**
 * Singleton (1)
 * Adding a class method that returns a unique instance
 */
class Singleton01 {
    private static instance: Singleton01;

    private _id: string = 'default';
    get id(): string{ return this._id; }
    set id(val: string){ this._id = val; }

    public constructor(){
        console.log('An instance has been created.');
    }

    // Class method
    public static getInstance(){
        if(Singleton01.instance === undefined){
            Singleton01.instance = new Singleton01();
        }
        else{
            console.log('The instance has already been created.');
        }
        return Singleton01.instance;
    }
}

const singleton01 = Singleton01.getInstance(); // 'An instance has been created.'
console.log(singleton01.id); // 'default' -- OK.
singleton01.id = 'singleton01';

const alreadyCreated01 = Singleton01.getInstance(); // 'The instance has already been created.' -- OK.
console.log(alreadyCreated01.id); // 'singleton01' -- OK.

// 'new' is still allowed to create a new instance.
const callConstructor01 = new Singleton01(); // 'An instance has been created.' Oops! The insntace is created twice.
console.log(callConstructor01.id); // Actual behavior prints 'default'. Expected behavior prints 'singleton01'.