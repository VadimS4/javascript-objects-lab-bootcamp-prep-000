var recipes = new Object({});

function updateObjectWithKeyAndValue(object, key, value){
  Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  var recipes = {prop: 1};
  return recipes;
}

function deleteFromObjectByKey(object, key){
  
}