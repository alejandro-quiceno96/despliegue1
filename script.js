// Variable que almacena el número de clics
let contador = 0;

// ================================
//  ELEMENTOS DEL DOM
// ================================
const contadorDisplay = document.getElementById('contador');  // Muestra el número de clics
const btnClick = document.getElementById('btn-click');        // Botón para aumentar el contador
const btnReset = document.getElementById('btn-reset');        // Botón para reiniciar el contador
const fechaElemento = document.getElementById('fecha');       // Muestra la fecha actual

// ================================
//  FUNCIÓN PARA ACTUALIZAR CONTADOR
// ================================
function actualizarContador() {
    contador++;  // Incrementa el contador
    contadorDisplay.textContent = contador;  // Actualiza el valor en pantalla

    // Animación simple para dar efecto al contador
    contadorDisplay.style.transform = 'scale(1.2)';
    setTimeout(() => {
        contadorDisplay.style.transform = 'scale(1)';
    }, 200);
}

// ================================
//  FUNCIÓN PARA RESETEAR CONTADOR
// ================================
function resetearContador() {
    contador = 0;  // Reinicia el contador
    contadorDisplay.textContent = contador;  // Refresca el valor mostrado
}

// ================================
//  EVENT LISTENERS
// ================================
btnClick.addEventListener('click', actualizarContador);  // Suma 1 al contador
btnReset.addEventListener('click', resetearContador);    // Reinicia el contador

// ================================
//  INICIALIZACIÓN AL CARGAR LA PÁGINA
// ================================
document.addEventListener('DOMContentLoaded', function () {
    // Coloca la fecha actual en el elemento correspondiente
    const ahora = new Date();
    fechaElemento.textContent = ahora.toLocaleString('es-CO'); // Formato colombiano
});

// ================================
//  FUNCIÓN PARA CAMBIAR EL ENTORNO
// ================================
// Cambia el texto y color del entorno mostrado en la tarjeta de estado
function cambiarEntorno(nuevoEntorno) {
    document.getElementById('entorno').textContent = nuevoEntorno;

    // Cambia el color lateral de la tarjeta dependiendo del entorno
    const statusCard = document.querySelector('.status-card');
    switch (nuevoEntorno) {
        case 'Desarrollo':
            statusCard.style.borderLeftColor = '#4ECDC4';
            break;
        case 'Pruebas':
            statusCard.style.borderLeftColor = '#FFD93D';
            break;
        case 'Producción':
            statusCard.style.borderLeftColor = '#6BCF7F';
            break;
    }
}
