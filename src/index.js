const camelCaseToSnakeCase = (str) => {
  return str.replace(/([A-Z])/g, '_$1').toLowerCase();
}

const replaceCamelCaseObj = (obj) => {
  const snakeCased = {}
  for( key in obj ) {
    let keyValue   = obj[key]
    const isArray  =  Array.isArray(keyValue)
    const isObject =  typeof keyValue === 'object' && !isArray
    
    if ( isArray )
      keyValue = keyValue.map( kv => typeof kv === 'object' ? replaceCamelCaseObj( kv ) : kv  )
    
    snakeCased[camelCaseToSnakeCase(key)] = isObject ? replaceCamelCaseObj( keyValue ) : keyValue
  }
  
  return snakeCased
}

module.exports = { camelCaseToSnakeCase, replaceCamelCaseObj };


