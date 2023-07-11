function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}
let student = new Student("Василиса", "женский", 19);
student.name;
student.gender;
student.age;
student.marks;

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}
student.setSubject("Algebra");
student.subject;
student.setSubject("Geometry");
student.subject;

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty('marks')) {
    this.marks.push(...marks);
  }
}
student.marks;
student.addMarks(5, 4, 5);
student.marks;
student.addMarks(5, 4, 5);
student.marks;

Student.prototype.getAverage = function () {
  let result = 0;
  if (this.hasOwnProperty('marks') === false || this.marks.length === 0) {
    return result;
  } else {
    result = this.marks.reduce((acc, item, i, arr) => {
      acc += item;
      if (i === arr.length - 1) {
        return acc / arr.length;
      }
      return acc
    }, 0);
    return result;
  }
}
student.marks = [];
student.getAverage();
student.addMarks(5, 5, 5);
student.getAverage();
student.marks = [3, 4, 5];
student.getAverage();

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}
student.exclude('прогулы');
student.excluded;
student.subject;
student.marks;

student.exclude('прогулы');
student.excluded;
student.addMarks(5, 5, 5);
student.marks;
student.getAverage();
