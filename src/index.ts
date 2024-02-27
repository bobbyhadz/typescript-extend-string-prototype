export {};

// EXAMPLE 1 - Extend String.prototype in TypeScript

import './string.extensions';

const str = 'world';

console.log(str.prefix('hello ')); // 👉️ "hello world"

// ---------------------------------------------------

// EXAMPLE 2 - Extend Object.prototype in TypeScript

import './object.extensions';

const obj = {
  name: 'Tom',
  age: 30,
};

obj.log();

// ---------------------------------------------------

// EXAMPLE 3 - Extend Date.prototype in TypeScript

import './date.extensions';

const date = new Date('2022-09-24');

// 👇️ 1663977600000
console.log(date.getTimestamp());

// ---------------------------------------------------

// EXAMPLE 4 - Extend Number.prototype in TypeScript

import './number.extensions';

const num = 100;

console.log(num.sum(5000)); // 👉️ 5100
