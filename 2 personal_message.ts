let personName :string = "";

personName = prompt ("what is your name?") || '';

if(personName !== null && personName !== ''){
    alert ('Hello shayan, would you like to learn some python today?')
}
else{
    alert ('you have to fill your name !')
}