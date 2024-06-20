const DATE_TARGET = new Date('2024-10-12T00:00:00-03:00');
const SPAN_DAYS = document.querySelector('span#days');
const SPAN_HOURS = document.querySelector('span#hours');
const SPAN_MINUTES = document.querySelector('span#minutes');
const SPAN_SECONDS = document.querySelector('span#seconds');

const MILLISECONDS_OF_A_SECOND = 1000;
const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24;

function updateCountdown() {
    // Obtener la fecha y hora actual en la zona horaria de Argentina
    const now = new Date();
    const offset = now.getTimezoneOffset() * 60 * 1000; // Convertir el offset de minutos a milisegundos
    const currentDateTime = now.getTime() - offset;

    // Calcular la diferencia de tiempo en milisegundos
    const duration = DATE_TARGET.getTime() - currentDateTime;
    
    if (duration < 0) {
        // Si la fecha objetivo ya ha pasado, mostrar todos los valores en 0 o algo así
        SPAN_DAYS.textContent = '0';
        SPAN_HOURS.textContent = '0';
        SPAN_MINUTES.textContent = '0';
        SPAN_SECONDS.textContent = '0';
        return;
    }
    
    // Calcular los días, horas, minutos y segundos restantes
    const remainingDays = Math.floor(duration / MILLISECONDS_OF_A_DAY);
    const remainingHours = Math.floor((duration % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
    const remainingMinutes = Math.floor((duration % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
    const remainingSeconds = Math.floor((duration % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);

    // Actualizar el contenido en el DOM
    SPAN_DAYS.textContent = remainingDays;
    SPAN_HOURS.textContent = remainingHours;
    SPAN_MINUTES.textContent = remainingMinutes;
    SPAN_SECONDS.textContent = remainingSeconds;
}

// Iniciar el contador regresivo y actualizar cada segundo
updateCountdown();
setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);



function ejVestimentaFormalSport(){
    console.log("Esta es la vestimenta formal sport");
    document.getElementById("imagenVestimenta1").src = "iconos/elgspt2.jpg";
    document.getElementById("imagenVestimenta2").src = "iconos/elgspt3.jpg";
    document.getElementById("imagenVestimentaContainer").style.display = "flex";
}


function cerrarImagen(){
    console.log("Se cerro la imagen");
    document.getElementById("imagenVestimentaContainer").style.display = "none";
}



let hospedajeVisible=false;
function mostrarHospedajes() {
    const hospedajes = document.getElementById("hospedajes");
    hospedajeVisible = !hospedajeVisible;

    if (hospedajeVisible) {
        // Primero, asegúrate de que el elemento se pueda ver con opacidad 0
        hospedajes.style.display = 'flex';
        setTimeout(() => {
            hospedajes.classList.add('visible');
        }, 10); // Un pequeño retraso para permitir que el navegador aplique el cambio de display antes de la transición
    } else {
        // Transición de opacidad a 0 antes de ocultar completamente
        hospedajes.classList.remove('visible');
        setTimeout(() => {
            hospedajes.style.display = 'none';
        }, 500); // El tiempo debe coincidir con la duración de la transición de opacidad
    }
}


let datosVisibles=false;

function verDatosCuenta(){
    const datosCuenta = document.getElementById("datos-transferencia");
    const textboton = document.getElementById("boton-datos-cuenta-texto");
    if (datosVisibles == false) {
        datosCuenta.style.display = 'flex';

        textboton.textContent = 'Ocultar datos de cuenta';

    } else {
        datosCuenta.style.display = 'none';

        textboton.textContent = 'Ver datos de cuenta';
    }

    datosVisibles = !datosVisibles;
}

function validarFormulario() {
    // Obtener los valores de los campos
    var cancion = document.getElementById('cancion').value;
    
    // Verificar si los campos requeridos están completos
    if (cancion.trim() === "") {
        alert("Por favor escriba el nombre de una cancion.");
        return false; // Evitar el envío del formulario
    }

    // Puedes agregar más validaciones si es necesario

    return true; // Permitir el envío del formulario
}
