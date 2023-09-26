function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let item of collection) {
      callback(item);
    }
    return collection
  }
  for (let item in collection) {
    callback(collection[item]);
  }
  return collection
}

function myMap(collection, callback) {
  let result = []
  if (Array.isArray(collection)) {
    for (let item of collection) {
      result.push(callback(item));
    }
    return result;
  }
  for (let item in collection) {
    result.push(callback(collection[item]));
  }
  return result;
}

function myReduce(collection, callback, acc) {
  let init = acc;
  
  if (Array.isArray(collection)) {
    if (init === undefined) {
      init = collection[0]
      collection = collection.slice(1)
    }
    for (let item of collection) {
      init = callback(init, item)
    }
    return init;
  }
  let newKeys;
  if (init === undefined) {
    init = Object.values(collection)[0]
    newKeys = Object.values(collection).slice(1);
  }
  for (let item of newKeys) {
    init = callback(init, item);
  }

  return init;
}

function myFind(collection, predicate) {
  if (Array.isArray(collection)) {
    for (let item of collection) {
      if (predicate(item)) return item;
    }
    return undefined;
  }
  for (let item in collection) {
    if (predicate(collection[item])) return collection[item]
  }
  return undefined;
}

function myFilter(collection, predicate) {
  let result = []
  if (Array.isArray(collection)) {
    for (let item of collection) {
      if (predicate(item)) result.push(item)
    }
    return result;
  }
  for (let item in collection) {
    if (predicate(collection[item])) result.push(collection[item]);
  }
  return result;
}

function mySize(collection) {
  let length = 0;

  if (Array.isArray(collection)) {
    for (let item of collection) {
      length++
    }
    return length;
  }
  for (let item in collection) {
    length++;
  }
  return length;
}

function myFirst(array, n) {
  if (n === undefined) return array[0]
  return array.slice(0, n);
}

function myLast(array, n) {
  if (n === undefined) return array[array.length - 1];
  return array.slice(array.length - n);
}

function mySortBy(array, callback) {
  const copy = array.slice()
  if (typeof array[0] === 'number') {
    return copy.sort((a, b) => callback(a) - callback(b));
  }
  if (typeof array[0] === 'string') {
    return copy.sort((a, b) => callback(a).localeCompare(callback(b)));
  }
}

function myFlatten(array, shallow, newArr = []) {
  for (let item of array) {
    if (Array.isArray(item)) {
      if (!shallow) newArr.push(...myFlatten(item))
      else newArr.push(...item)
    } else {
      newArr.push(item);
    }
  }
  return newArr;
}

function myKeys(object) {
  let result = [];
  for (let key in object) {
    result.push(key);
  }
  return result;
}

function myValues(object) {
  let result = [];
  for (let key in object) {
    result.push(object[key]);
  }
  return result;
}
