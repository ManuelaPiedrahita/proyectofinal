let memoria = JSON.parse(localStorage.getItem("Memoria"))
console.log(memoria)
let contenedor = document.getElementById("contenedor")
//Usando la memoria 
memoria.forEach(function(reserva){
    let fila = document.createElement("div")
    fila.classList.add("row" , "my-5" , "shadow")
    let columna = document.createElement("div")
    columna.classList.add("col-4")
    let columna2 = document.createElement("div")
    columna2.classList.add("col-8")
    let nombre = document.createElement("h3")
    nombre.textContent = reserva.nombreUsuario
    let titulo = document.createElement("h2")
    titulo.classList.add("text-center")
    titulo.textContent = "Reserva Asignada"
    let cedula = document.createElement("h5")
    cedula.classList.add("text-center")
    cedula.textContent = reserva.cedulaUsuario
    let fecha = document.createElement("p")
    fecha.classList.add("text-center")
    fecha.textContent = reserva.fechaUsuario
    //Pintando desde js
    columna.appendChild(titulo)
    columna2.appendChild(nombre)
    columna2.appendChild(cedula)
    columna2.appendChild(fecha)
    fila.appendChild(columna)
    fila.appendChild(columna2)
    contenedor.appendChild(fila)
})