function postLogin(){
    const formData = {
            'user_name' : $('input[name=Username]').val(),
            'password': $('input[name=Password]').val()
        };
        $.ajax({
            url: 'http://localhost:8080/authentication/login/',
            type: 'POST', 
            data:formData,
            cache: false,
            async:false,
            dataType : 'json'
        })
        .done(function(user) {
            top.location.href="profile.html"//toFIX
        })
        .fail(function(jqXHR, textStatus, message){  
            alert(`Error - Login - ${textStatus} ,  ${message}`); 
        });
}
function postRegister(){
    const formData = {
            'user_name' : $('input[name=user_name]').val(),
            'email': $('input[name=email]').val(),
            'password': $('input[name=password]').val(),
        };
        console.log(formData);
        $.ajax({
            url: 'http://localhost:8080/authentication/signup/',
            type: 'POST', 
            data:formData,
            cache: false,
            dataType : 'json'
        })
        .done(function(message) {
            console.log(`Success - Register - ${message}`);
            top.location.href="profile.html"
        })
        .fail(function(jqXHR, textStatus, message){  
            alert(`Error - Register - ${textStatus} ,  ${message}`); 
        });
}

$(document).on('click', '#Register', function(e){
    e.preventDefault();
    postRegister();
});
$(document).on('click', '#Login', function(e){
    e.preventDefault();
    postLogin();
});