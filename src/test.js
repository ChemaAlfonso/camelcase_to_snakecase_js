const { replaceCamelCaseObj } = require('./index');

const obj = {
  userName: 'Josué Ayala',
  username: 'josuemartinezz',
  userAge: 25
}

console.log(replaceCamelCaseObj(obj))