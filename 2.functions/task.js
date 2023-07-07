function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let avg = 0,
    sum = 0;
  
  if (arr.length === 0) {
    avg = 0;
  } else {
    min = Math.min(...arr);
    max = Math.max(...arr);
    sum = arr.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue
    })
    avg = sum / arr.length;
    avg = Number.parseFloat(avg.toFixed(2));
  }
  return { min: min, max: max, avg: avg };
}
getArrayParams(-99, 99, 10);
getArrayParams(1, 2, 3, -100, 10);
getArrayParams(5);

function summElementsWorker(...arr) {
  let sum = 0;
  if (!arr.length) {
    return 0;
  } else {
    sum = arr.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue
    });
    return sum;
  }
}
summElementsWorker();
summElementsWorker(10, 10, 11, 20, 10);
summElementsWorker(0, 0, 0, -1, -100);

function differenceMaxMinWorker(...arr) {
  let max = arr[0];
  let min = arr[0];
  let difMaxMin = 0;

  if (!arr.length) {
    return 0;
  } else {
    max = Math.max(...arr);
    min = Math.min(...arr);
    difMaxMin = max - min;
  }
  return difMaxMin;
}
differenceMaxMinWorker();
differenceMaxMinWorker(10, 10, 11, 20, 10);
differenceMaxMinWorker(0, 0, 0, -1, -100);

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let difEvenOdd = 0;

  if (!arr.length) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }
    difEvenOdd = sumEvenElement - sumOddElement;
    return difEvenOdd;
  }
}
differenceEvenOddWorker();
differenceEvenOddWorker(1, 2, 3, 4, 5, 6, 7, 8, 9);
differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17);
differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35);

function averageEvenElementsWorker(...arr) {
  let sumEvenElements = 0;
  let countEvenElements = 0;
  let avgEvenElements = 0;

  if (!arr.length) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] % 2 === 0) {
        sumEvenElements += arr[i];
        countEvenElements += 1;
      }
    }
    if (countEvenElements) {
      avgEvenElements = sumEvenElements / countEvenElements;
      avgEvenElements = Number.parseFloat(avgEvenElements.toFixed(2));
    } else {
      return 0;
    }
  }
  return avgEvenElements;
}
averageEvenElementsWorker();
averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9);
averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35);

function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);
  for (let i = 0; i < arrOfArr.length; i += 1) {
    const workerResult = func(...arrOfArr[i]);
    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult;
    }
  }
  return maxWorkerResult;
}
makeWork([[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43],  [30, 41, 55, 96, 62]], summElementsWorker);

makeWork([[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43],  [30, 41, 55, 96, 62]], differenceMaxMinWorker);

makeWork([[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43],  [30, 41, 55, 96, 62]], differenceEvenOddWorker);

makeWork([[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43],  [30, 41, 55, 96, 62]], averageEvenElementsWorker);
