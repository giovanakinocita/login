function login(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if(email == ""){
        alert('Insert a e-mail to login!');
    }

    if(password == ""){
        alert('Insert a password to login!');
    }
}