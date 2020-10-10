var randomThings = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  return Driver.assign({}, object, { [key]: value })
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  object[key] = value
  return object
}

function deleteFromDriverByKey(driver, object, key) {
  const newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}