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
        
        this.mark = mark;

    }

    averageMark() {
        return Math.round(this.mark.reduce( (acc, item) => acc += item, 0) / this.mark.length);
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
  let fillOutForm = document.querySelector('.fill-out-form');
  let list = document.querySelector('.list'); 
  let arrStudents = Array.from(fillOutForm.elements);

  let errorSpan = document.createElement('span');
  errorSpan.classList.add('message');
  

  add.onclick = function(){

    

      let studentName = document.querySelector('#name');
      let studentSurname = document.querySelector('#surname');
      let studentAge = document.querySelector('#age');
      let studentMarks = arrStudents.reduce((pre, cur) => cur.name === "mark" ?
                pre += cur.value + ' ' : pre += '', '');

      

      
      console.log('validate - ', validateFormOnRequired(arrStudents));
      
      if(!validateFormOnRequired(arrStudents)) {
            errorSpan.classList.add('error');
            errorSpan.textContent = 'Поставьте корректную оценку';
            fillOutForm.append(errorSpan);
            return false;
        }else {
            errorSpan.classList.remove('error');
        }

      let name = studentName.value,
          surname = studentSurname.value,
          age = studentAge.value,
          marks = studentMarks.trim().split(' ').map((item) => Number.parseInt(item));
          
      let createStudent = new Student({
          name,
          surname,
          age: +age,
          mark: marks, 
      
      }) 

      teacher.addToGroup(createStudent);

      studentName.value = '';
      studentSurname.value = '';
      studentAge.value = '';
      
  }

  update.onclick = function(){
   

    let list = document.querySelector('#list');
    let result = teacher.getListOfNamesByAverageMark().join('')
    list.innerHTML = result;
  }
}

  function validateFormOnRequired(elements) {
    let valid = true;
    let validTypes = [ 'number'];
    
    for (const elem of elements) {
        if(validTypes.includes(elem.type)){
            if(!elem.value.length) {
                valid = false;
                elem.classList.add('error');
                elem.classList.remove('success');

            } else {
                elem.classList.add('success');
                elem.classList.remove('error');


            }
        }

    }
    return valid;

  }

