/**
* Copyright (c) Hidekazu Kubota
* This source code is licensed under the Mozilla Public License Version 2.0 found in the LICENSE file in the root directory of this source tree.
*/

/* Tested with tsc 3.8.3 with strict compiler options */

export {}

/**
 * Singleton (4)
 * Using namespace
 *
 * This is not usually called Singleton pattern because it does not use OOP, but sometimes useful.
 * Single namespace name 'Singleton04' encapsulates private property '_id' and public methods.
 * This usage is introduced in TypeScript Deep Dive https://basarat.gitbook.io/typescript/main-1/singleton
 */
namespace Singleton04 {
    let _id: string = 'default';
    // getter and setter cannot be used in namespace
    // get id(): string{ return this._id; }
    // set id(val: string){ this._id = val; }
    export const getId = () => { return _id; }
    export const setId = (val: string) => { _id = val; }
}

console.log(Singleton04.getId()); // 'default'
Singleton04.setId('singleton04');
console.log(Singleton04.getId()); // 'singleton04' -- OK.

console.log(Singleton04._id); // Compile error. Compiler says that property '_id' does not exist on type 'typeof Singleton04'.
