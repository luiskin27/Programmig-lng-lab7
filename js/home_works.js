const gmailInput = document.getElementById('gmail_input');
const gmailButton = document.getElementById('gmail_button');
const gmailResult = document.getElementById('gmail_result');


const gmailRegExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;


gmailButton.addEventListener('click', ()=>{
    const value = gmailInput.value.trim();
    if (gmailRegExp.test(value)){
        gmailResult.textContent = 'Почта верна';
        gmailResult.style.color = 'green';
    }else{
         gmailResult.textContent = 'Почта не верна';
         gmailResult.style.color = 'red';
    }
});


const iinInput = document.querySelector('#iin_input');
const iinButton = document.querySelector('#iin_button');
const iinResult = document.querySelector('#iin_result');

const iinRegExp = /^\d{12}$/;

iinButton.addEventListener('click', () => {
    if (iinRegExp.test(iinInput.value)) {
        iinResult.innerHTML = 'ИИН верный';
        iinResult.style.color = 'green';
    } else {
        iinResult.innerHTML = 'ИИН неверный';
        iinResult.style.color = 'red';
    }
});