class Human{
  constructor(config) {
        this.name = config.name;
        this.surname = config.surname;
        this.age = config.age;
    }

    getFullName() {
       fullName = this.name + ' ' + this.surname;
       return fullName;
  }

    setFullName(){
       sliceName = fullName.split(' ');
       return sliceName;
  }

}

class Student extends Human{

  constructor(config) {
        super(config);
        this.marks = config.marks;
    }

    getFullName() {
        fullName = this.name + ' ' + this.surname + ' - student';
        return fullName;
  }

    averageMark() {
        let sum = this.marks.reduce((a, b) => a + b, 0);
        let result = sum / this.marks.length;
        return result;
  }
  
    minMark(){
        return Math.min(...this.marks);
  }

    maxMark(){
        return Math.max(...this.marks);
  }

}

class Teacher extends Human{

  constructor(config) {
        super(config);
        this.group = config.group;
    }

    getListOfNamesByAverageMark(){ 
              
        return this.group.sort((a, b) => b.averageMark() - a.averageMark()).map(item => item.name);

    }

    getStudentByName(name){

        return this.group.find(item => item.name === name);

    }

    removeStudentByName(name){

        let tempName = this.getStudentByName(name);
        return this.group.splice(this.group.indexOf(tempName), 1);

    }

    updateStudentByName(student, name){

        this.group.splice(this.group.indexOf(this.getStudentByName(name)), 1,  new Student(student));
    }

}

let group = [

     new Student({
        name:'Max',
        surname: 'Doe',
        age: 18,
        marks: [10, 9, 8, 1, 10],
     }),
     new Student({
        name:'Dan',
        surname: 'Black',
        age: 18,
        marks: [10, 12, 6, 4, 9],
    }),
     new Student({
        name:'Arisona',
        surname: 'Robbins',
        age: 19,
        marks: [10, 9, 12, 11, 10],
    }),
     new Student({
        name:'Emma',
        surname: 'Swan',
        age: 19,
        marks: [3, 9, 8, 1, 7],
    }),
     new Student({
        name:'Harry',
        surname: 'Potter',
        age: 17,
        marks: [11, 7, 8, 9, 12],
    })
     
  ] 

   let human = new Human({
      name: 'Meredit',
      surname: 'Grey',
      age: 30
 });

   let student = new Student({
      name:'Max',
      surname: 'Doe',
      age: 18,
      marks: [10, 9, 8, 1, 10],
 });

   let teacher = new Teacher({
      name: 'Fernando',
      surname: 'Alonso',
      age: 39,
      group,
});

// console.log(human);
// console.log(teacher);
// console.log(student);
// console.log(teacher.getListOfNamesByAverageMark());
// console.log(teacher.getStudentByName('Emma')) 