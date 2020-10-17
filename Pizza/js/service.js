import{doOrder,fillForOutForm,messageCancel,cooking,body,feedback} from 'script.js';
function cookingMessage() {
    cooking.hidden = false;
}
function hideCancelOrderMessage(){
    messageCancel.hidden=true;
    fillForOutForm.hidden = false;

    doOrder.hidden = false;
}
function travelMessage() {
    cooking.innerHTML = 'Курьер напрвляется к вам! Ожидайте';
   
}
function deliveryMessage() {
    cooking.innerHTML = 'Пицца доставлена!';
    
}
function feedbackMessage() {
    cooking.hidden = true;
    feedback.hidden = false;

}
function thanksMessage() {
    feedback.hidden = true;
    body.innerHTML = '<b>Спасибо за ваш отзыв!<b>'
}
export{cookingMessage,hideCancelOrderMessage,travelMessage,deliveryMessage,
    feedbackMessage,thanksMessage};