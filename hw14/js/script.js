function Human(config) {
    this.name = config.name;
    this.surname = config.surname;
    this.age = config.age;
 } 

 Human.prototype = Object.assign(Human.prototype,{
 	getFullName() {
 		fullName = this.name + ' ' + this.surname;
 	return fullName;
 	},
 	setFullName(){
 		sliceName = fullName.split(' ');
 	return sliceName;
 	}
 });
 

  let h = new Human({
 	name: 'Meredit',
 	surname: 'Grey',
 	age: 30
 });
 h.getFullName();
 h.setFullName();
 console.log (h);

   function Teacher(config) {
     Human.call(this, config);
     
     this.group = config.group;
 }

 Teacher.prototype = Object.create(Human.prototype);
 Teacher.prototype.constructor = Teacher;

 //с методами Teacher не сложилось, не поняла как обратиться к оценкам

 Teacher.prototype = Object.assign(Teacher.prototype,{
          
          getListOfNamesByAverageMark(){ 
              
              this.group.marks.sort(function(a,b){
              	let sum = this.marks.reduce((a, b) => a + b, 0);
                let result = sum / this.marks.length;
                return result;
              console.log(group.marks);

          },
          getStudentByName(name){


          },
          removeStudentByName(name){


          },
          updateStudentByName(student, name){


          }



 });
 let teacher = new Teacher({
 	name: 'Anna',
 	surname: 'Brown',
 	age: 35,
 	group: [{
		name:'Max',
 	    surname: 'Doe',
 	    age: 18,
 	    marks: [10, 9, 8, 1, 10],
	},{
 	name:'Dan',
 	surname: 'Black',
 	age: 18,
 	marks: [10, 12, 6, 4, 9],
 },{
 	name:'Arisona',
 	surname: 'Robbins',
 	age: 19,
 	marks: [10, 9, 12, 11, 10],
 },{
 	name:'Emma',
 	surname: 'Swan',
 	age: 19,
 	marks: [3, 9, 8, 1, 7],
 },{
 	name:'Harry',
 	surname: 'Potter',
 	age: 17,
 	marks: [11, 7, 8, 9, 12],
 }
	]

 });
 teacher.getFullName();
 teacher.setFullName();
 teacher. getListOfNamesByAverageMark();
 console.log (teacher);


 function Student(config) {
  Human.call(this, config);
  this.marks = config.marks;
  
}

Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;

// не смогла сделать чтобы создавалось несколько Student

Student.createNewStudent = function(){
	return new Student({
		name:'Max',
 	    surname: 'Doe',
 	    age: 18,
 	    marks: [10, 9, 8, 1, 10],
	});
	
	
	
};


Student.prototype = Object.assign(Student.prototype,{

    getFullName() {
 		fullName = this.name + ' ' + this.surname + ' - student';
 	return fullName;
 	},

 	averageMark() {
 		let sum = this.marks.reduce((a, b) => a + b, 0);
        let result = sum / this.marks.length;
        return result;
 	},
 	
 	minMark(){
 	    return Math.min(...this.marks);;
 	},
 	maxMark(){
 	    return Math.max(...this.marks);;
 	},
 });



let student1 = new Student({
 	name:'Max',
 	surname: 'Doe',
 	age: 18,
 	marks: [10, 9, 8, 1, 10],
 });
student1.averageMark();
student1.minMark();
student1.maxMark();

let student2 = new Student({
 	name:'Dan',
 	surname: 'Black',
 	age: 18,
 	marks: [10, 12, 6, 4, 9],
 });

student2.averageMark();
student2.minMark();
student2.maxMark();

let student3 = new Student({
 	name:'Arisona',
 	surname: 'Robbins',
 	age: 19,
 	marks: [10, 9, 12, 11, 10],
 });


student3.averageMark();
student3.minMark();
student3.maxMark();

let student4 = new Student({
 	name:'Emma',
 	surname: 'Swan',
 	age: 19,
 	marks: [3, 9, 8, 1, 7],
 });


student4.averageMark();
student4.minMark();
student4.maxMark();

let student5 = new Student({
 	name:'Harry',
 	surname: 'Potter',
 	age: 17,
 	marks: [11, 7, 8, 9, 12],
 });

student5.averageMark();
student5.minMark();
student5.maxMark();



let group = Student.createNewStudent();

console.log(group);

// Брала реализацию с предыдущего дз, а оно тоже видимо костылями сделано, 
// а записи первой части урока нет ((

// let group = [];
// group.push(new Student({
//  	name:'Max',
//  	surname: 'Doe',
//  	age: 18,
//  	marks: [10, 9, 8, 1, 10],
//  }));
// group.push(new Student({
//  	name:'Dan',
//  	surname: 'Black',
//  	age: 18,
//  	marks: [10, 12, 6, 4, 9],
//  }));
// group.push(new Student({
//  	name:'Arisona',
//  	surname: 'Robbins',
//  	age: 19,
//  	marks: [10, 9, 12, 11, 10],
//  }));
// group.push(new Student({
//  	name:'Emma',
//  	surname: 'Swan',
//  	age: 19,
//  	marks: [3, 9, 8, 1, 7],
//  }));
// group.push(new Student({
//  	name:'Harry',
//  	surname: 'Potter',
//  	age: 17,
//  	marks: [11, 7, 8, 9, 12],
//  }));

// console.log(group);

// -- Функция поиска студента с наивысшей оценкой --

// function findMaxMark(arr) {
//     let res; 
//     let prev; 
//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i];
//         let max = element.maxMark(); 
//         if (max > prev) { 
//             res = element.name;
//         }
//         prev = max;
//     }
//     return res;
// }

// let MaxMarkInStudents = findMaxMark(group);
// console.log("This student " +  MaxMarkInStudents + " has high marks! " );

console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);
console.log(student5);

 