## CamelCase to snake_case Javascript

Convert all your objects with camelCase properties to snake_case 👀🎉

### Install
``` bash
npm install camelcase-to-snakecase

# Or
yarn add camelcase-to-snakecase

# CDN
unpkg
https://unpkg.com/camelcase-to-snakecase@1.0.5/src/index.js

jsdelivr
https://cdn.jsdelivr.net/npm/camelcase-to-snakecase@latest/src/index.min.js
```

### Import

``` bash
const { replaceCamelCaseObj, replaceCamelCaseObj } = require('camelcase-to-snakecase');
```

### Usage
``` bash
// Converting a camelCase object to snake_case
const objInCamelCase = {
    userName: 'Josué Ayala',
    username: 'josuemartinezz',
    userAge: 25
};

console.log(replaceCamelCaseObj(objInCamelCase));

/* returns
{
  user_name: 'Josué Ayala',
  username: 'josuemartinezz',
  user_age: 25
}   
*/

// Converting a string camelCase to snake_case
const camelCase = 'thisIsMyCamelCaseConst';

console.log(camelCaseToSnakeCase(camelCase));

/* returns
this_is_my_camel_case_const 
*/
```

### License

MIT
