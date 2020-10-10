function updateDriverWithKeyAndValue(object, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
  object[key] = value;
 
  return object;
}

function deleteFromDriverByKey() {}

function destructivelyDeleteFromDriverByKey() {}