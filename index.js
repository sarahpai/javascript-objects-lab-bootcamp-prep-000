var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, {[key]: value});
}

function deleteFromObjectByKey(object, key){
  var newObj = deleteFromObjectByKey(obj, 'prop')
  return Object.assign({}, object, key)
  delete object.key
  return newObj
}