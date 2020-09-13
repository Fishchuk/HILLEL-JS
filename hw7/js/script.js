let array = [10, 'Hello world', null, true , '', false, 255];
function explainer(array){
	let newArr = array.slice();
console.log(newArr);
	for(let i = 0; i < array.length; i++){
		const element = array[i];

		if(!element){
			array.splice(i--, 1)[0];
		}else{
			createObjectByType(typeof element, element)
		}
	}
	return array;
}

function createObjectByType(type,item){
	if(typeof item == 'string'){
		return{
			type,
			value: item,
			length: item.length
		}
	}return{
		type,
		value:item,
	}
}
console.log(explainer(array));