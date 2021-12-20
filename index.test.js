import {sum} from './index.js';
 const actual = sum(4,2);
 const expected = 6;

if(actual !== expected){
throw new Error(`${actual} was not equal to ${expected}`);
}
