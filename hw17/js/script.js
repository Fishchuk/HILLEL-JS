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
        
        this.mark1 = mark1;
        this.mark2 = mark2;
        this.mark3 = mark3;
        this.mark4 = mark4;
        this.mark5 = mark5;

    }

    averageMark() {
        let sum = this.mark1 + this.mark2 + this.mark3 + this.mark4 + this.mark5;
        let result = sum / 5;
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
  let errorSpan = document.createElement('span');
  errorSpan.classList.add('message');
  

  add.onclick = function(){

    

      let studentName = document.querySelector('#name');
      let studentSurname = document.querySelector('#surname');
      let studentAge = document.querySelector('#age');
      let studentMark1 = document.querySelector('#mark1');
      let studentMark2 = document.querySelector('#mark2');
      let studentMark3 = document.querySelector('#mark3');
      let studentMark4 = document.querySelector('#mark4');
      let studentMark5 = document.querySelector('#mark5');
      console.log('validate - ', validateFormOnRequired(studentMark1,studentMark2,studentMark3,studentMark4,studentMark5));
      
      if(!validateFormOnRequired(elementsForms)) {
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
          marks = [studentMark1.value,studentMark2.value,studentMark3.value,studentMark4.value,studentMark5.value];

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
      studentMark1.value = ''; 
      studentMark2.value = '';
      studentMark3.value = '';
      studentMark4.value = '';
      studentMark5.value = ''; 
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

