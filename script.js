function validate(){
    let firstName = document.getElementById('first-name').value;
    let lastName  = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    let tNc = document.getElementById('t-and-c').checked;

    let err = false;


    if(firstName.length >= 3){
        document.getElementById('valid-first-name').style.display = 'block';
        document.getElementById('invalid-first-name').style.display = 'none';
    }
    else{
        err = true;
        document.getElementById('invalid-first-name').style.display = 'block';
        document.getElementById('valid-first-name').style.display = 'none';
    }


    if(lastName.length >= 3){
        document.getElementById('valid-last-name').style.display = 'block';
        document.getElementById('invalid-last-name').style.display = 'none';
    }
    else{
        err = true;
        document.getElementById('invalid-last-name').style.display = 'block';
        document.getElementById('valid-last-name').style.display = 'none';
    }

    if(email.includes('@') && 
        email.indexOf('@')>0 &&
        email.includes('.') &&
        email.substr(email.lastIndexOf('.')+1).length >=2
        ){
        document.getElementById('valid-email').style.display = 'block';
        document.getElementById('invalid-email').style.display = 'none';
    }
    else{
        err = true;
        document.getElementById('invalid-email').style.display = 'block';
        document.getElementById('valid-email').style.display = 'none';
    }

    if(password.length >= 8 &&
        (password.includes('$') || password.includes('#') || password.includes('@')) &&
        (password.includes('0') || password.includes('1') || password.includes('2') || password.includes('3') || password.includes('4'))
        ){
        document.getElementById('valid-password').style.display = 'block';
        document.getElementById('invalid-password').style.display = 'none';
    }
    else{
        err = true;
        document.getElementById('valid-password').style.display = 'none';
        document.getElementById('invalid-password').style.display = 'block';
    }

    if(confirmPassword === password){
        document.getElementById('valid-confirm-password').style.display = 'block';
        document.getElementById('invalid-confirm-password').style.display = 'none';
    }
    else{
        err = true;
        document.getElementById('valid-confirm-password').style.display = 'none';
        document.getElementById('invalid-confirm-password').style.display = 'block';
    }

    if(tNc===true){
        document.getElementById("invalid-tNc").style.display = 'none';
    }
    else{
        err = true;
        document.getElementById("invalid-tNc").style.display = 'block';
    }

    if(err===false){
        window.alert('Your details have been saved successfully!');
        clearFields();
    }
}

function clearFields(){
    document.getElementById('registration-form').reset();
    document.getElementById('valid-first-name').style.display = 'none'
	document.getElementById('valid-last-name').style.display = 'none'
	document.getElementById('valid-email').style.display = 'none'
	document.getElementById('valid-password').style.display = 'none'
	document.getElementById('valid-confirm-password').style.display = 'none'

}