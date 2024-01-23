document.getElementById('btn-submit').addEventListener('click', function(){
    // Get Email address from User
    const emailFiled = document.getElementById('email');
    const email = emailFiled.value;
    console.log(email);
    emailFiled.value = '';

    // Get password from user
    const passwordFiled = document.getElementById('password');
    const password = passwordFiled.value;
    passwordFiled.value = '';

    if(email === 'galib.mia@gsit.com' || email === 'admin@gsit.com' && password ==='123'){
        window.location.href = 'main.html';
    }
    else{
        alert("You are not a Valid User");
    }

});