document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('#enviar').onclick = send_mail;
});


function send_mail(){
    var email = document.querySelector("#mail").value;
    var mensaje = document.querySelector("#mensaje").value;
    var asunto = document.querySelector("#asunto").value;
    
    Email.send({
        Host : "smtp.mailtrap.io",
        Username : "a4d955d72fcb6c",
        Password : "bbc73bc28a2e4b",
        To : 'walterdiaz9414@gmail.com',
        From : email,
        Subject : asunto,
        Body : mensaje
    })
        .then(function(response){
            if (response == 'OK'){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Tu mail fue enviado con exito',
                    showConfirmButton: true,
                  })

            }
            else{
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Hubo un error al enviar el email',
                    text:'Recorda completar todos tus los datos y que sean correctos',
                    showConfirmButton: true,
                  })
            }
        });
}