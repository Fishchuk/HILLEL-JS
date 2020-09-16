  
function filterUpperCase(str) {
    
    return str
        .split('')
        .filter((i) => {
            return i == i.toUpperCase() && i !== ' ' ? true : false;
        })
}

    
console.log(filterUpperCase('ПриВЕт'));
		
	

 

