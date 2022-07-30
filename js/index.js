let today = new Date ();
let thisYear = today.getFullYear();
let footer = document.querySelector('footer');
let copyright = document.createElement('p');
copyright.innerHTML = `Rinata ${thisYear}`
footer.append(copyright);
let skills = ['Agile','JavaScript', 'HTML'];
let skillsSection = document.querySelector('#skills')
let skillsList = skillsSection.querySelector('ul');
for (i=0; i<skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill); 

}
//select element by name
const messageForm = document.querySelector('[name="leave_message"]');
const nameInput = messageForm.querySelector('[name="name"]');
const emailInput = messageForm.querySelector('[name="email"]');
const messageInput = messageForm.querySelector('[name="message"]');
const messageSection = document.getElementById('messages');
const messageList = messageSection.querySelector('ul');
const removeButton = document.createElement ('button');
const editButton = document.createElement ('button');

function hide () {
    if (messageList.childElementCount == 0) {
        messageSection.style.display= "none";
    } else {
        messageSection.style.display= "block";
    }
}

hide();
//add a new message
messageForm.addEventListener('submit',(e) => {
 e.preventDefault();
 const nameInputValue = nameInput.value;
 const emailInputValue = emailInput.value;
 const messageInputValue = messageInput.value;
 const newMessage = document.createElement ('li');
 newMessage.innerHTML = `<a href = mailto: ${emailInputValue}> ${nameInputValue} </a> wrote: <span> ${messageInputValue} </span>`;
 //const removeButton = document.createElement ('button');
 removeButton.textContent = 'remove';
 removeButton.type = 'button'
 newMessage.appendChild(removeButton)
 removeButton.addEventListener('click', (e) => {
    let entry = e.target.parentNode;
    entry.remove(); 
    hide () ;
})

editButton.textContent = 'edit';
editButton.type = 'button';
newMessage.appendChild(editButton)

editButton.addEventListener('click', (e) => {
    if (editButton.textContent==="edit") {
        editButton.textContent = 'save';
        //get reference to the li node of the message
        const li = e.target.parentNode;
        //get reference to the span node within li
        const span = li.querySelector('span');
        //create an input element 
        const input = document.createElement('input');
        input.value = span.textContent;
        li.insertBefore(input,span);
        span.remove();
        
    } else if (editButton.textContent==="save") {
        editButton.textContent = 'edit'; 
        const li = e.target.parentNode;
        const input = li.querySelector('input');
        const span = document.createElement('span');
        span.textContent = input.value + ' ';
        li.insertBefore(span,input);
        input.remove();

    }
    
})

messageList.appendChild(newMessage);
messageForm.reset();
hide () ;


});


