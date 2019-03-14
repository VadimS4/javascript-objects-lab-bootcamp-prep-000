var recipes = new Object({});

function updateObjectWithKeyAndValue(object, key, value){
  recipes['prop2'] = 2;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  recipes = []
}