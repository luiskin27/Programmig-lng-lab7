//проверка номера
const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector('#phone_button');
const phoneSpan = document.querySelector('#phone_result');


//+996550644772
const kgPhoneReqExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.addEventListener('click', ()=>{
    if (kgPhoneReqExp.test(phoneInput.value)){
        phoneSpan.innerHTML = 'Этот номер существует';
        phoneSpan.style.color = 'green';
    }else {
        phoneSpan.innerHTML = 'Этот номер не существует';
        phoneSpan.style.color = 'red';
    }
})

const phoneInputRu = document.querySelector('#phone_input_ru');
const phoneButtonRu = document.querySelector('#phone_button_ru');
const phoneSpanRu = document.querySelector('#phone_result_ru');

const RussianPhoneReqExp = /^\+7 [9]\d{2} \d{3}-\d{2}-\d{2}$/

phoneButtonRu.addEventListener('click', ()=>{
    if (RussianPhoneReqExp.test(phoneInputRu.value)){
        phoneSpanRu.innerHTML = 'Этот номер существует';
        phoneSpanRu.style.color = 'green';
    }else {
        phoneSpanRu.innerHTML = 'Этот номер не существует';
        phoneSpanRu.style.color = 'red';
    }
})

