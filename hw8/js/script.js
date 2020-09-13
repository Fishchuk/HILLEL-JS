myArray =[10, 20, 30, 40, 50];

myArray.myMap = function(callback){
	let results = [];

	for (i = 0; i < myArray.length; i++){
		results.push(callback(myArray[i]))
	}
	return results;

}

let newArray = myArray.myMap(item => item * 2) ;
  

console.log(newArray);