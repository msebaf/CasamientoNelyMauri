

//===
// VARIABLES
//===
const DATE_TARGET = new Date('10/12/2024 7:30 PM');
// DOM for render
const SPAN_DAYS = document.querySelector('span#days');
const SPAN_HOURS = document.querySelector('span#hours');
const SPAN_MINUTES = document.querySelector('span#minutes');
const SPAN_SECONDS = document.querySelector('span#seconds');
// Milliseconds for the calculations
const MILLISECONDS_OF_A_SECOND = 1000;
const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24

//===
// FUNCTIONS
//===

/**
 * Method that updates the countdown and the sample
 */
function updateCountdown() {
    // Calcs
    const NOW = new Date()
    const DURATION = DATE_TARGET - NOW;
    const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
    const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
    const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
    const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);
    // Thanks Pablo Monteserín (https://pablomonteserin.com/cuenta-regresiva/)

    // Render
    SPAN_DAYS.textContent = REMAINING_DAYS;
    SPAN_HOURS.textContent = REMAINING_HOURS;
    SPAN_MINUTES.textContent = REMAINING_MINUTES;
    SPAN_SECONDS.textContent = REMAINING_SECONDS;
}

//===
// INIT
//===
updateCountdown();
// Refresh every second
setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);



function ejVestimentaFormal(){
    console.log("Esta es la vestimenta formal");
    document.getElementById("ejemploVestimenta").src = "iconos/formal.jpg";
    document.getElementById("imagenVestimentaContainer").style.display = "flex";
  
}


function ejVestimentaFormalSport(){
    console.log("Esta es la vestimenta formal sport");
    document.getElementById("ejemploVestimenta").src = "iconos/EleganteSport.jpg";
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