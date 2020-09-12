let randomNumber = Math.floor(Math.random() * 100);


function getUserNumber(message) {
    let number = prompt(message);

    if(validateUserNumber(number)) {
        return +number;
    }
    
}


function validateUserNumber(userNumber) {
    let valid = false;

    if(isNaN(userNumber)) {
        console.error("Введите число!");
    } else if (userNumber == null) {
        console.error("Вы отменили");
    } else {
        valid = true;
    }

    return valid;
}


function getTry() {
    let fail = true;
    let tryCount = 5;

    for (let i = tryCount; i > 0; i--) {
        let userNumber = getUserNumber("Попробуй угадать число");
        console.log(userNumber);

        if (userNumber == randomNumber) {
            alert("Верный ответ!");
            fail = false;
            break;
        } else if (userNumber > randomNumber) {
            console.log("Попробуйте ввести меньшее число");
        } else if (userNumber < randomNumber) {
            console.log("Попробуйте ввести число больше");
        }

        console.log("Осталось попыток " + (i - 1));

    }

    if (fail == true) {
        alert("Вы не угадали число " + randomNumber);
    }
    
}
getTry();