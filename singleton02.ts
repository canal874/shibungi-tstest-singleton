/**
* Copyright (c) Hidekazu Kubota
* This source code is licensed under the Mozilla Public License Version 2.0 found in the LICENSE file in the root directory of this source tree.
*/

/* Tested with tsc 3.8.3 with strict compiler options */

export {}

/**
 * Singleton (2)
 * Adding a class method that returns a unique instance
 * and setting constructor to private
 * 
 * Singleton pattern generally has private or protected constructor
 * and has a class method that can access to only one insntace of the class.
 */
class Singleton02 {
    private static instance: Singleton02;

    private _id: string = 'default';
    get id(): string{ return this._id; }
    set id(val: string){ this._id = val; }

    // private / protected constructor has been implemented in TypeScript 2.0
    // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#private-and-protected-constructors
    // A class with private constructor cannot be instantiated outside the class body, and cannot be extended. 
    // A class with protected constructor cannot be instantiated outside the class body, but can be extended.
    private constructor(){
        console.log('An instance has been created.');
    }

    public static getInstance(){
        if(Singleton02.instance === undefined){
            Singleton02.instance = new Singleton02();
        }
        else{
            console.log('The instance has already been created.');
        }
        return Singleton02.instance;
    }
}

const singleton02 = Singleton02.getInstance(); // 'An instance has been created.'
console.log(singleton02.id); // 'default' -- OK.
singleton02.id = 'singleton02';

const alreadyCreated02 = Singleton02.getInstance(); // 'The instance has already been created.' -- OK.
console.log(alreadyCreated02.id); // 'singleton02' -- OK.

const accessError = new Singleton02(); // Compile error. Compiler says that constructor of class 'Singleton02' is private and only accessible within the class declaration.
