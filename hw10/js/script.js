function structureUserInfo(name){
     return function (role) {
         return {role:`${role}`, name:`${name}`};
     }
 }
 let result = structureUserInfo('John')('admin');
 console.log(result);