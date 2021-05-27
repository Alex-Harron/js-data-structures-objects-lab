// Write your solution in this file!

const driver = {}

function updateDriverWithKeyAndValue(obj, key, value) {
    return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    return Object.assign(driver, {[key]: value})
}

function deleteFromDriverByKey(obj, key) {
    const newObj = Object.assign({}, driver);
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
    delete driver[key];
    return driver
}
