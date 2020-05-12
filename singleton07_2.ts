/**
* Copyright (c) Hidekazu Kubota
* This source code is licensed under the Mozilla Public License Version 2.0 found in the LICENSE file in the root directory of this source tree.
*/

/* Tested with tsc 3.8.3 with strict compiler options */

export {}

/**
 * Singleton Factory
 */

const instances = new Map();
export const SingletonFactory = <T>(cls: { new (...args: any[]): T }, ...args: any[]): T => {
    if(!instances.has(cls)){
        instances.set(cls, new cls(...args));
        console.log('An instance has been created.');            
    }
    else{
        console.log('The instance has already been created.');
    }
    return instances.get(cls);
}
