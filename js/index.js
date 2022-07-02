let today = new Date ();
let thisYear = today.getFullYear();
let footer = document.querySelector('footer');
let copyright = document.createElement('p');
copyright.innerHTML = `Rinata ${thisYear}`
footer.append(copyright);
let skills = ['Agile','JavaScrip', 'HTML'];
let skillsSection = document.querySelector('#skills')
let skillsList = skillsSection.querySelector('ul');
for (i=0; i<skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill); 

}

console.log(today);
console.log(thisYear);
console.log(footer);
console.log(copyright);
console.log(skills);
console.log(skillsSection);
console.log(skillsList);
