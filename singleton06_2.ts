/**
* Copyright (c) Hidekazu Kubota
* This source code is licensed under the Mozilla Public License Version 2.0 found in the LICENSE file in the root directory of this source tree.
*/

/* Tested with tsc 3.8.3 with strict compiler options */

/**
 * Interfaces for both static side and instance side of a class
 *
 * a static method is separated from instance methods.
 * See https://canal874.github.io/typescript/2020/05/11/shibungi-interface-for-static.html
 */
export interface SingletonInterfaceStatic {
    getInstance(): SingletonInterface;
}

export interface SingletonInterface {
    print(): void;
    
    // You can specify the property on the interface, but you can't enforce whether getters and setters are used.
    // See https://stackoverflow.com/questions/12838248/is-it-possible-to-use-getters-setters-in-interface-definition
    id: string;
}
