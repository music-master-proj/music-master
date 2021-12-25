const logger = require("../../utils/logs");

const parseQueryString = function( queryString ) {
    let params = {}, queries, temp, i, l;
    queries = queryString.split("&");
    for ( i = 0, l = queries.length; i < l; i++ ) {
        temp = queries[i].split('=');
        params[temp[0]] = decodeURI(temp[1]);
    }

    return params;
};



function getBeteles() {
        $.ajax({
        url: 'https://movies-smart.herokuapp.com/api/movies/IMDB',
        type: 'GET',
        async: false,
        contentType: "application/json; charset=utf-8",
        data: formData,
        success: function(message) {
            localStorage.setItem(name,JSON.stringify(message));
        },
        error: function() {
            alert('Error - getIMDB');
            top.location.href="404.html";
        }
    });
};



function getQuestAns(){
    const queryString = $("#Test").serialize();
    console.log(queryString);
    const vals = parseQueryString(queryString);
    const formData = {
        'vals' : vals
    };
    $.ajax({
        url: 'http://localhost:8080/playlist/spotify/',
        type: 'POST', 
        data:formData,
        cache: false,
        async:false,
        dataType : 'json',
        success: function(playlist) {

             top.location.href="madeforyou.html";
            
           
        },  
        error:function(jqXHR, textStatus, message){  
        }
    })   
}









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


$(document).on('click', '#Submit', function(e){
    e.preventDefault();
    getQuestAns();
});

