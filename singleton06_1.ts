/**
* Copyright (c) Hidekazu Kubota
* This source code is licensed under the Mozilla Public License Version 2.0 found in the LICENSE file in the root directory of this source tree.
*/

/* Tested with tsc 3.8.3 with strict compiler options */

export {}

/**
 * Singleton (6)
 * Defining interfaces for Singleton class
 *
 * It requires tricks because a static property cannot be defined on an interface in TypeScript. 
 * Many different ways exist. See https://canal874.github.io/typescript/2020/05/11/shibungi-interface-for-static.html
 */
import { SingletonInterface, SingletonInterfaceStatic } from './singleton06_2';

const Singleton06: SingletonInterfaceStatic = class SingletonClass implements SingletonInterface{
    // private properties cannot be defined in an interface.
    private _id: string = 'default';
    private constructor(){}
    private static instance: SingletonClass;


    public print: () => void = () => { console.log(this._id); };

    // public property 'id' is defined in the interface.
    get id(): string{ return this._id; }
    set id(val: string){ this._id = val; }

    public static getInstance(){
        if(SingletonClass.instance === undefined){
            SingletonClass.instance = new SingletonClass();
            console.log('An instance has been created.');            
        }
        else{
            console.log('The instance has already been created.');
        }
        return SingletonClass.instance;
    }
}

const singleton06 = Singleton06.getInstance(); // 'An instance has been created.'
singleton06.print(); // 'default' -- OK.
singleton06.id = 'singleton06';

const alreadyCreated06 = Singleton06.getInstance(); // 'The instance has already been created.'
alreadyCreated06.print(); // 'singleton06' -- OK.
