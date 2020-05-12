/**
* Copyright (c) Hidekazu Kubota
* This source code is licensed under the Mozilla Public License Version 2.0 found in the LICENSE file in the root directory of this source tree.
*/

/* Tested with tsc 3.8.3 with strict compiler options */

export {}

/**
 * Singleton (7)
 * Using Singleton Factory
 */
import { SingletonFactory } from './singleton07_2';

class Singleton07 {
    constructor(public id: string){}
    print: () => void = () => { console.log(this.id); };
}

const singleton07 = SingletonFactory(Singleton07, 'first'); // 'An instance has been created.'
singleton07.print(); // 'first' -- OK.
singleton07.id = 'singleton07';

const alreadyCreated07 = SingletonFactory(Singleton07, 'second'); // 'The instance has already been created.'
singleton07.print(); // 'singleton07' -- OK.
