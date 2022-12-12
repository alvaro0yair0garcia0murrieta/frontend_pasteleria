var btnRegistrar = document.getElementById("ingresar")
btnRegistrar.addEventListener("click", function () {
    axios.post("https://backendpasteleria-production.up.railway.app/usuarioB", {
        email : document.getElementById("email").value,
        password : document.getElementById("password").value
    }).then(function(){
        if(email == document.getElementById("email").value && password == document.getElementById(password).value){
            return login();
        }else{
            return "Datos equivocados";
        }
    })


})



function login(){
    window.location.href="index.html";
}


