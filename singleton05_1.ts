/**
* Copyright (c) Hidekazu Kubota
* This source code is licensed under the Mozilla Public License Version 2.0 found in the LICENSE file in the root directory of this source tree.
*/

/* Tested with tsc 3.8.3 with strict compiler options */

export {}

/**
 * Singleton (5)
 * Using module
 *
 * This is not usually called Singleton pattern because it does not use OOP, but sometimes useful.
 * Single module file 'singleton05_2.ts' encapsulates private property '_id' and public methods.
 * This usage is introduced in TypeScript Deep Dive https://basarat.gitbook.io/typescript/main-1/singleton
 */
import { getId, setId } from './singleton05_2';

console.log(getId()); // 'default'
setId('singleton05');
console.log(getId()); // 'singleton05' -- OK.
