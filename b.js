let cadena = '10';

// Conversion a Numeros
let conversionNumero = Number(cadena);
let conversionEntero = parseInt(cadena);
let conversionDecimal = parseFloat(cadena);

// Conversion a Cadenas (String)
let conversionCadena = conversionNumero.toString();

// Conversion a Booleano
let conversionBooleano = Boolean(conversionNumero);
conversionBooleano = Boolean(cadena);

// Tengo ganas de comer, entonces:
const ganasDeComer = true;

// No tengo sueño, entonces:
const tengoSuenio = false;

if (ganasDeComer) {
    console.log('Me como un pancho')
} else if (tengoSuenio) {
    console.log('Me voy a dormir')
} else {
    console.log('Me voy a dar una vuelta')
}

// Como tengo hambre me comería un pancho,
// si no tuviese hambre ni sueño entonces me iría a dar una vuelta
