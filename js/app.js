// Tu clave de API
const apiKey = '6d16a8b80b36b577a387eba3';
// URL de la API
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

// Función para obtener las tasas de conversión
function getExchangeRates() {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la red');
            }
            return response.json();
        })
        .then(data => {
            displayRates(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('rates').textContent = 'Error al obtener datos.';
        });
}

// Función para mostrar las tasas en la página
function displayRates(data) {
    const ratesDiv = document.getElementById('rates');
    ratesDiv.innerHTML = ''; // Limpiar contenido anterior

    for (const [currency, rate] of Object.entries(data.conversion_rates)) {
        const p = document.createElement('p');
        p.textContent = `${currency}: ${rate}`;
        ratesDiv.appendChild(p);
    }
}

// Llamar a la función al cargar la página
window.onload = getExchangeRates;
