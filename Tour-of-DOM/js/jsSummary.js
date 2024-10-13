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

//step-1: add event listener to the post button.
document.getElementById('postBtn').addEventListener('click',function(){

    //step-2: get comment text.
    const commentBox = document.getElementById('newComment');
    const commentText = commentBox.value;
    
    //step-3: set the comment text at the comment container
    /*
    1. get the comment container
    2. create a new comment Element (p tag)
    3. set the comment text at the p tag
    4. add the p tag using appendChild(p)
    */
    const commentContainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText = commentText;
    commentContainer.appendChild(p);

    //Step-4: clear the text area.
    commentBox.value = '';
})

document.getElementById('text-field').addEventListener('keyup',function(event){
    const text = event.target.value;
    const DeleteBtn = document.getElementById('btn-delete');
    if(text === 'delete'){
        DeleteBtn.removeAttribute('disabled');
    }
    else{
        DeleteBtn.setAttribute('disabled',true);
    }

})
document.getElementById('btn-delete').addEventListener('click',function(){
    const sectreatInfo = document.getElementById('secreat-info');
    sectreatInfo.style.display = 'none';
    
    const textClear = document.getElementById('text-field');
    textClear.value = '';
})