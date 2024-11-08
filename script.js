function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const formattedDateTime = now.toLocaleDateString('es-ES', options);
    document.getElementById('datetime').textContent = formattedDateTime;
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById('location').textContent = "La geolocalización no es soportada por este navegador.";
    }
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    document.getElementById('location').textContent = `Latitud: ${latitude}, Longitud: ${longitude}`;
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('location').textContent = "Usuario denegó la solicitud de geolocalización.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('location').textContent = "La información de ubicación no está disponible.";
            break;
        case error.TIMEOUT:
            document.getElementById('location').textContent = "La solicitud para obtener la ubicación del usuario expiró.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById('location').textContent = "Un error desconocido ocurrió.";
            break;
    }
}

// Actualizar fecha y hora cada segundo
setInterval(updateDateTime, 1000);

// Obtener ubicación al cargar la página
window.onload = getLocation;