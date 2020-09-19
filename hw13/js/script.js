function Student(name,marks) {
  this.name = name;
  this.marks = marks;
  
}
Student.prototype.averageMark = function(){
  let sum = this.marks.reduce((a, b) => a + b, 0);
  let result = sum / this.marks.length;
  console.log('Average Mark: ' + result);

}

Student.prototype.minMark = function(){
   let min = Math.min(...this.marks);
   console.log('Min Mark: ' + min);
}

Student.prototype.maxMark = function(){
   let max = Math.max(...this.marks);
   console.log('Max Mark: ' + max);
}

let student1 = new Student("Max", [10, 9, 8, 1, 10]);
student1.averageMark();
student1.minMark();
student1.maxMark();

let student2 = new Student("Dan", [10, 12, 6, 4, 9]);
student2.averageMark();
student2.minMark();
student2.maxMark();

let student3 = new Student("Meredit", [10, 9, 12, 11, 10]);
student3.averageMark();
student3.minMark();
student3.maxMark();

let student4 = new Student("Jane", [3, 9, 8, 1, 7]);
student4.averageMark();
student4.minMark();
student4.maxMark();

let student5 = new Student("Peter", [11, 7, 8, 9, 12]);
student5.averageMark();
student5.minMark();
student5.maxMark();

let students = [];
students.push(new Student("Max", [10, 9, 8, 1, 10]));
students.push(new Student("Dan", [10, 12, 6, 4, 9]));
students.push(new Student("Meredit", [10, 9, 12, 11, 10]));
students.push(new Student("Jane", [3, 9, 8, 1, 7]));
students.push(new Student("Peter", [11, 7, 8, 9, 12]));

// C функцией поиска студента в массиве не сложилось (((

// function findMaxMark(students) {
//   return  Math.max.apply(null, students);


// }

// findMaxMark();


console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);
console.log(student5);

console.log(students);
