//Ex-5 Funcions

function contarVocales(texto){
    let contVocales = 0;
    let vocales =['a','e','i','o','u'];

    for(let i = 0; i< texto.length; ++i){
        if (vocales.indexOf(texto[i]) >= 0) {
            ++contVocales;
        }
    }
    return contVocales;
}
console.log(contarVocales('catedral'));