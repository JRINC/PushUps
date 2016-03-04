$(function(){

	var loginForm = $(".loginForm"),
		nickName = $("#nickName"),
        chatScreen = $(".chatscreen"),
        chatForm = $(".chatform"),
        loginScreen = $(".connected")

    loginForm.on('submit', function(e){

        e.preventDefault();
        
        $.nombreUsuario = $.trim(nickName.val());
        
        if($.nombreUsuario.length < 1){
            alert("Please enter a nick name longer than 1 character!");
            return;
        }

       // call the server-side function 'login' and send user's parameters
        // enviar(name);
         LeerArchivoJson();
        loginScreen.css('display','none');
        chatScreen.css('display','block');
        chatForm.css('display','block');

       
    //    socket.emit('news', {
    //             data: 'HOLA ' + name,
    //             color: $.color,
    //             user: name});
       // }

    });
});