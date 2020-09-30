window.onload = init;



class Human{
  constructor({name, surname, age}) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    getFullName() {
       fullName = this.name + ' ' + this.surname;
       return fullName;
  }

 }



 class Student extends Human{

  
   
  constructor({name, surname, age, marks}) {
        super({name, surname, age});
        
        this.marks = marks;

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

  constructor({name, surname, age, group}) {
        super({name, surname, age});
        this.group = group;
    }

    getListOfNamesByAverageMark(){ 
              
        return this.group.sort((a, b) => b.averageMark() - a.averageMark()).map(item => {
          return '<li>' + item.name + ' ' + item.surname + ' - ' + item.averageMark() + '</li>';
        });

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

    addToGroup(student) {
    return this.group.push(student);
  }

}
   

   let teacher = new Teacher({
      name: 'Fernando',
      surname: 'Alonso',
      age: 39,
      group: [],
});

function init() {
  let add = document.querySelector('#add');
  let update = document.querySelector('#update');
  

  add.onclick = function(event){

     event.preventDefault();

      let studentName = document.querySelector('#name');
      let studentSurname = document.querySelector('#surname');
      let studentAge = document.querySelector('#age');
      let studentMarks = document.querySelector('#marks');


      let name = studentName.value,
          surname = studentSurname.value,
          age = studentAge.value,
          marks = studentMarks.value.split(',').map(item => +item);

      let createStudent = new Student({
          name,
          surname,
          age: +age,
          marks, 
      
      }) 

      teacher.addToGroup(createStudent);

      studentName.value = '';
      studentSurname.value = '';
      studentAge.value = '';
      studentMarks.value = '';  
  }

  update.onclick = function(event){
    event.preventDefault();

    let list = document.querySelector('#list');
    let result = teacher.getListOfNamesByAverageMark().join('')
    list.innerHTML = result;
  }
}