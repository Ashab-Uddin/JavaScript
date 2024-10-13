function clickNow(){
    const handleStatus = document.getElementById('handale-status');
    handleStatus.innerText = 'WoW! You are Successfully Complelete';
}
document.getElementById('addEventLisener').addEventListener('click' ,function(){
const handleStatus = document.getElementById('handale-status');
handleStatus.innerText = 'Wow ! You are Succsessfully Completed by AddEventListener';
})

document.getElementById('btn-send').addEventListener('click',function(){
    const inputTexts = document.getElementById('inputText');
    const inputFieldText = inputTexts.value;
    const p = document.getElementById('defaulText');
    p.innerText = inputFieldText;
    inputTexts.value = '';
})