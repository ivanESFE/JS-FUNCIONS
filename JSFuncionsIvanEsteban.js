//Ex-14 Funcions


let posicio = (x,y) => {

    return (x.length-x.indexOf(y))
}
console.log(posicio('Bon dia noi','dia'));

let dividir = (x,y) => {

    return y.substr(x,y.length)
}

console.log(dividir(posicio('Bon dia noi','noi'),'bon dia noi'))





