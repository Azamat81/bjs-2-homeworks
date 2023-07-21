//Задача № 1
function cachingDecoratorNew(func) {
  let cache = {};
  return (...args) => {
    const hash = md5(args);

    if (hash in cache) {
      return 'Из кэша: ' + cache[hash];
    }
    const result = func(...args);
    if (Object.keys(cache).length > 4) {
      cache[hash] = result;
      let firstCall = Object.keys(cache)[0];
      delete cache[firstCall];
      return 'Вычисляем: ' + result;
    }
    cache[hash] = result;
    return 'Вычисляем: ' + result;
  }
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timerId;

  function functionToAddProperties(...args) {
    if (!timerId) {
      func(...args);
      functionToAddProperties.count += 1;
    }

    functionToAddProperties.allCount += 1;

    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func(...args);
      functionToAddProperties.count += 1;
    }, delay)
  }

  functionToAddProperties.count = 0;
  functionToAddProperties.allCount = 0;

  return functionToAddProperties;
}
let decorated = debounceDecoratorNew((...args) => console.log('DU-HAST', ...args), 3000);
decorated();
