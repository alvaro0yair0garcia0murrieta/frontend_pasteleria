var URL_BASE = "https://backendpasteleria-production.up.railway.app"
      //var URL_BASE = "https://backend-production-1432.up.railway.app"
      var prod
          axios.get(URL_BASE + "/productos")
              .then(function (response) {
                const dt = response.data
                var text = ""
                for(i in dt){

                  text += '<div class="proyecto">' +
                            //'<img src="'+dt[i].link+'" alt="Proyecto" class="imagen-proyecto"> '+
                            '<figcaption> '+'ID:'+dt[i].idProducto+' </figcaption>'+
                            '<figcaption> '+dt[i].categoria_+' </figcaption> '+
                            '<figcaption> '+dt[i].cantidad_+' </figcaption> '+
                            
                            '<div class="coloca">'+
                              '<figcaption class="price">'+'$'+dt[i].precio+'</figcaption>'+
                            '</div>'+
                          '</div>'
                  tabla(text);
                }
              })
              .catch(function (error) {
                  console.log(error);
              });
      
              var URL_BASE ="https://backendpasteleria-production.up.railway.app"
              var bBorrar = document.getElementById("btnborra");
              var bEditar = document.getElementById("actualizar");
              var bCrear = document.getElementById("registrar");
             bCrear.addEventListener("click", function () {
                  //let id_ = document.getElementById("id").value
                  let categoria_ = document.getElementById("categoria").value
                  let sabor_ = document.getElementById("sabor").value
                  let cantidad_ = document.getElementById("cantidad").value
                  let precio_= 500
                  let id_=2
                  console.log(categoria_+"/"+ sabor_+"/"+categoria_+"/")
                  axios.post(URL_BASE + "/creaProductos", {
                      categoria_: categoria_,
                      sabor: sabor_,
                      cantidad: cantidad_,
                      precio: precio_,
                      id:id_
                    })
                      .then(function (response) {

                        alert("mensaje: producto creado "+response.data.status+" con id: "+response.data.id);
                        id = response.data.id;
                        estado=response.data.status;
                        window.location.reload();
                      })
                      .catch(function (error) {
                          console.log(error);
                      });
              })
        
             /*bBorrar.addEventListener("click", function(){
                let id_=document.getElementById("Borrarid").value
                axios.get(URL_BASE+"/borrarProducto",{
                  params:{
                   id : id_
                  }
                }
                ).then(function (response){
                  console.log(response.data);
                  alert(response.data);
                  window.location.reload();
                }).catch(function (error){
                  
                  console.log(error);
                })
              })
        
        
             bEditar.addEventListener("click", function(){
                let iid=document.getElementById("id2").value
                let nnombre=document.getElementById("nombre2").value
                let pprecio=document.getElementById("precio2").value
                let llink=document.getElementById("link2").value
              
                axios.post(URL_BASE+"/actualizarProducto", {
                    id: iid,
                    nombre: nnombre,
                    precio: pprecio,
                    link: llink
                  
                }).then((result) => {
            alert(result.data);
           window.location.reload();
          });
              })*/
        
        
               
             
          
            