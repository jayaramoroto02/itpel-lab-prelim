const fnameInput = document.querySelector('#input-fname');
const numInput = document.querySelector('#input-num');
const cancelButton = document.querySelector('#btn-clear');
const addButton = document.querySelector('#btn-add');
const totalButton = document.querySelector('#btn-total');
const contactList = document.querySelector('#clist');
const totalContactOutput = document.querySelector('#TNAC');
const alertInputControl = document.querySelector('ion-alert-controller');

let myTotalContacts = 0;

const clear =() => {
    fnameInput.value = '';
    numInput.value = '';
};

cancelButton.addEventListener('click', clear);

addButton.addEventListener('click', () => {
    console.log("ADded!");
    const fnameEntered = fnameInput.value;
    const numEntered = numInput.value;
    
    if (fnameEntered.trim().length <= 0 || numEntered <= 0 ||
        numEntered.trim().length <= 0){
            alert("Alert Input!")
           
            return;
        }   

        myTotalContacts ++;
        console.log(fnameEntered, numEntered);
        totalContactOutput.textContent = myTotalContacts;
        clear();
});