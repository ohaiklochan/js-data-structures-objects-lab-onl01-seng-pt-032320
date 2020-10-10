var driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  return Driver.assign({}, object, { [key]: value })
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  object[key] = value
  return object
}

function deleteFromDriverByKey(driver, object, key) {
  const newObj = Driver.assign({}, object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromDriverByKey(object, key) {
  delete object[key]
  return object
}