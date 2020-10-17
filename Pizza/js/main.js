import{doOrder,noOrder,fillForOutForm,messageCancel,yesOrder,cooking,body,feedback,
    like,dislike,checkboxElements,errorMessage,radioValue,seafood,prosciutto,mozzarella,olive,green} from 'script.js';
import{cookingMessage,hideCancelOrderMessage,travelMessage,deliveryMessage,
    feedbackMessage,thanksMessage} from 'service.js' ;
import{validateCheckbox}  from 'validate.js';     
class Order {
    static store = [];
    constructor({
        small,
        medium,
        big,
        seafood,
        prosciutto,
        mozzarella,
        olive,
        green
    }) {
        this.small = small,
        this.medium = medium,
        this.big = big,
        this.seafood = seafood,
        this.prosciutto = prosciutto,
        this.mozzarella = mozzarella,
        this.olive = olive,
        this.green = green
    }
    static describeOrder(data) {
        Order.setOrder(new Order(data))
    }
    static setOrder(order) {
         console.log(order);
        Order.store.push(order)
        console.log(Order.store)
    }

}

doOrder.onclick = function () {
    if (!validateCheckbox(checkboxElements)) {
        errorMessage.hidden = false;
        fillForOutForm.style.marginBottom = '0px';
        doOrder.removeAttribute('data-toggle')
        return false;
    } else {
        errorMessage.hidden = true;
        fillForOutForm.style.marginBottom = '30px';
        doOrder.setAttribute('data-toggle', "modal");
    };

}

noOrder.onclick = function () {

    fillForOutForm.hidden = true;
    doOrder.hidden = true;
    messageCancel.hidden = false;
    setTimeout(hideCancelOrderMessage, 2000)
}

yesOrder.onclick = function () {

    Order.describeOrder({
        small: radioValue == 'small',
        medium: radioValue == 'medium',
        big: radioValue == 'big',
        seafood : seafood .checked == true,
        prosciutto: prosciutto.checked == true,
        mozzarella: mozzarella.checked == true,
        olive: olive.checked == true,
        green : green .checked == true
    })

    fillForOutForm.hidden = true;
    doOrder.hidden = true;
    body.classList.add('center')
    setTimeout(cookingMessage, 1000);
    setTimeout(travelMessage, 3000);
    setTimeout(deliveryMessage, 6000);
    setTimeout(feedbackMessage, 9000);
}

like.onclick = function () {

    setTimeout(thanksMessage, 500);
}
dislike.onclick = function () {
    setTimeout(thanksMessage, 500);
}    