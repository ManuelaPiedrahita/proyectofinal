let Boton= document.getElementById("Boton")
let Nombre= document.getElementById("Nombre")
let Cedula= document.getElementById("Cedula")
let Fecha= document.getElementById("Fecha")
//detectando evento de click en el boton del formulario 
Boton.addEventListener("click",function(evento){
    evento.preventDefault()
    let errores=[]

    let valorNombre= Nombre.value
    if(!valorNombre){
        Nombre.classList.add("is-invalid")
        errores.push("El nombre es obligatorio")
    }
    let valorCedula= Cedula.value
    if(!valorCedula){
        Cedula.classList.add("is-invalid")
        errores.push("La cedula es obligatoria")
    }
    let valorFecha= Fecha.value
    if(!valorFecha){
        Fecha.classList.add("is-invalid")
        errores.push("La fecha es obligatoria")
    }
    if(errores.length>0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error, revisa los campos vacíos',
          })
    }else{
        let Datos={
            nombreUsuario: valorNombre,
            cedulaUsuario: valorCedula,
            fechaUsuario: valorFecha
            
        }
        let reservas 
        if(JSON.parse(localStorage.getItem("Memoria"))){
            reservas = JSON.parse(localStorage.getItem("Memoria"))
        }else{
            reservas=[]
        }
        //Almacenando datos en memoria 
        let reserva = Datos
        reservas.push(reserva)
        localStorage.setItem("Memoria" , JSON.stringify(reservas))

        Swal.fire(
            'Bien hecho',
            'You clicked the button!',
            'success'
          )
    }
})