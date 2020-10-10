var driver = {}

function updateDriverWithKeyAndValue(driver, object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateDriverWithKeyAndValue(driver, object, key, value) {
  object[key] = value
  return object
}

function deleteFromDriverByKey(driver, object, key) {
  const newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromDriverByKey(object, key) {
  delete object[key]
  return object
}