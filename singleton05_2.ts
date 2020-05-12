/**
* Copyright (c) Hidekazu Kubota
* This source code is licensed under the Mozilla Public License Version 2.0 found in the LICENSE file in the root directory of this source tree.
*/

/* Tested with tsc 3.8.3 with strict compiler options */

let _id: string = 'default';

// getter and setter cannot be used in module
// get id(): string{ return this._id; }
// set id(val: string){ this._id = val; }
export const getId = () => { return _id; }
export const setId = (val: string) => { _id = val; }
