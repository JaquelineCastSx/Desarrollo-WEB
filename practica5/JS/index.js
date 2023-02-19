let formulario = document.getElementById("formulario");
let nombre = document.getElementById("nombre");
let fecha = document.getElementById("fecha");
let descripcion = document.getElementById("descripcion");

let boton = document.getElementById("btnGuardar");
let listaTareas = document.getElementById("tareas");

let tareas = [];

let agregarDatos = () => {
    //El push agrega la información al arreglo
    tareas.push({
        nombre: nombre.value,
        fecha: fecha.value,
        descripcion: descripcion.value

    });
    console.log(tareas);
}

let cerrarModal = () => {
    boton.setAttribute("data-bs-dismss", "modal");
    boton.click();
};

let resetarFormulario = () => {
    nombre.value = '';
    fecha.value = '';
    descripcion.value = '';
}

let mostrarTareas = () => {
    listaTareas.innerHTML = "";
    tareas.forEach((tarea, indice) => {
        listaTareas.innerHTML += `
        <div class='row' id=${indice}>
        <div class='col-3 border p-3'>
            <strong>${tarea.nombre}</strong>
        </div>
        <div class='col-3 border p-3'>
            <strong>${tarea.fecha}</strong>
        </div>
        <div class='col-3 border p-3'>
            <strong>${tarea.descripcion}</strong>
        </div>
        <div class='col-3 border p-3 text-center'>
            <button class='btn btn-danger' onClick ="borrarTarea(this,${indice});"><i class="bi bi-trash"></i> Borrar</button>
        </div>
    </div>
    `;
    });

}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    agregarDatos();
    cerrarModal();
    resetarFormulario();
    mostrarTareas();
})
