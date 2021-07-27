const camelCaseToSnakeCase = (str) => {
  return str.replace(/([A-Z])/g, '_$1').toLowerCase();
}

const replaceCamelCaseObj = (obj) => {
  let json = "";
  Object.keys(obj).forEach((key) => {
    json += `"${camelCaseToSnakeCase(key)}"` + ": " + (`"${obj[key]}"` || null) + ","
  });
  json = json.substring(0, json.length - 1);
  return JSON.parse(`{${json}}`);
}

module.exports = { camelCaseToSnakeCase, replaceCamelCaseObj };