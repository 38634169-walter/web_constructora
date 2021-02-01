document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('#solicitar').onclick = send;
});


function send(){
    var nombre = document.querySelector('#nombre').value;
    var apellido = document.querySelector('#apellido').value;
    var dni = document.querySelector('#dni').value;
    var telefono = document.querySelector('#telefono').value;
    var mensaje = document.querySelector('#mensaje').value;
    
    Email.send({
        Host : "smtp.mailtrap.io",
        Username : "a4d955d72fcb6c",
        Password : "bbc73bc28a2e4b",
        To : 'walterdiaz9414@gmail.com',
        From : "Solicitud_Financiacion@gmail.com",
        Subject : "Solicitud de financiacion",
        Body : `${mensaje} <br> <br> DNI: ${dni} <br> TELEFONO: ${telefono} <br> NOMBRE: ${nombre} <br> APELLIDO: ${apellido}`
    })
        .then(function(response){
            if (response == 'OK'){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Tu solicitud se envio con exito',
                    showConfirmButton: true,
                    timer: 5500
                  })

            }
            else{
                throw new Error("Error: " + response.statusText);
            }
        });
}