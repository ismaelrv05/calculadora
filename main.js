const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".bt");
const cleanButton = document.getElementById("clean");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const content = button.textContent; //Guardamos el contenido del botón apretado

        //Borrar toda la pantalla al seleccionar el botón C
        if (button.id === "delete") {
            screen.textContent = "0";
            return;
        }

        //Borrar el último caracter de la pantalla
        if (button.id === "delete_last") {
            if (screen.textContent.length === 1 || screen.textContent === "ERROR")
                screen.textContent = "0";
            else
                screen.textContent = screen.textContent.slice(0, -1);
            return;
        }

        if (screen.textContent === "0" || screen.textContent === "ERROR")
            screen.textContent = content //Eliminar el 0 inicial
        else
            screen.textContent += content;


    })
});


function guardarHistorial() {
    // Realizar las operaciones
    try {
        let res = eval(screen.textContent);
        screen.textContent = res;
        localStorage.setItem('historial', res);
    } catch {
        screen.textContent = "ERROR";
    }

    mostrarHistorial();
}

function mostrarHistorial() {
    if (typeof (Storage) !== "undefined") {

        // Recuperar el historial de LocalStorage
        const historial = localStorage.getItem('historial');

        // Mostrar el historial
        let resultado = document.getElementById('result');
        
        //resultado.innerHTML = '';
        resultado.innerHTML += `<p>${historial}</p>`;
    }
}

cleanButton.addEventListener("click", () => {
    // Vacía el contenido del historial
    document.getElementById("result").innerHTML = "";
    
    // Borra el LocalStorage
    localStorage.removeItem('historial');
});