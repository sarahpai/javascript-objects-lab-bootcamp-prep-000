var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, {[key]: value});
}

function deleteFromObjectByKey(object, key){
    var newObj = object.assign()
    delete obj.key
  return newObj
  }

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object)
  delete newObj.key
  return key 
}