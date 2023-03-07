
function ingresarData(){

    
    let usuario = document.querySelector('#usuario').value  
    let clave =  document.querySelector('#contrasenia').value 
    let error = document.querySelector('.error')   
 
    var miUsuario = "miUsuario";
    var miClave = "miClave";


    if(usuario == miUsuario && clave === miClave){
        mostrarPerfil()
    } else{
         
            error.style.display = 'block';
            error.innerHTML = "Datos incorrectos, volvé a intentar";

    }
}

function mostrarPerfil() {
    
    let cajaPerfil = document.querySelector('#main');
    
    
    
    
     cajaPerfil.innerHTML = 
     "<div id='caja'>" + 
         "<h3>" + miPerfil[0] + "</h3>" +
        "<p>" + miPerfil[1] + " años </p>" +
         "<img alt= 'mi imagen de perfil' src=" + miPerfil[3] + ">" +
        "<h4>" + miPerfil[4] +"</h4>" +
        "<hr>" +
        "<p>" + miPerfil[2] + "</p>" +
        "<button id='agregarInfo'>Agregar Info</button>" + 
        "<div id='info'></div>" +
        "</div>";
        



        document.querySelector('#agregarInfo').addEventListener('click', fnAgregarInfo)
        
}

let miPerfil = [
    "Matias", 
    32, 
    "mondra920@gmail.com",  
    "./chico2.jpg",         
    "Programador Web Frontend"
]


function fnAgregarInfo(){
    let parrafo1 = prompt("Que desea agregar a su perfil");
    let  info = document.getElementById('info');
    info.innerHTML= "<p>" + parrafo1 + "</p>"   

}


