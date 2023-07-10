function compareArrays(arr1, arr2) {
  return (arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]));
}
compareArrays([1, 2, 3], [1, 2, 3]);
compareArrays([1, 2], [1, 2, 3]);
compareArrays([1, 2, 3], [3, 2, 1]);
compareArrays([0, 1, 2], [0, 1]);
compareArrays([0, 1], [0, 1, 2]);
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]);

const users = [{
  firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской"
  },
  {
  firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской"
  },
  {
  firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский"
  },
  {
  firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский"
  },
  {
  firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский"
  },
  {
  firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский"
  },
  {
  firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской"
  },
  {
  firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской"
  },
  {
  firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской"
  },
  {
  firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский"
  },
  {
  firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской"
  },
  {
  firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской"
  },
  {
  firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской"
  },
  {
  firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской"
  }
]

function getUsersNamesInAgeRange(users, gender) {
  return users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, item, index, filteredUserAges) => acc + item / filteredUserAges.length, 0);
}
getUsersNamesInAgeRange(users, "мужской");
getUsersNamesInAgeRange(users, "женский");
getUsersNamesInAgeRange([], "мужской");
getUsersNamesInAgeRange(users, "инопланетянин");