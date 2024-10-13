//console.log("hello world")
//const generateRandomNumber = require('./utils')

//console.log(`Random number: ${generateRandomNumber()}`)

import getPosts, { getPostsLenght } from './postController.js';

console.log(getPosts());
console.log(`Post lenght: ${getPostsLenght()}`);

