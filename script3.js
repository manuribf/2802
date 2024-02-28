function stringCincoCaracteres(array){
    let novoArray = []
    for(let i = 0; i < array.lenght; i++){
        if(array[i].replace(/\s/g,'').length > 5){
            novoArray.push(array[i])
        }
    }
    return novoArray
}
const arrayOriginal = ["banana", "maçã", "abacaxi", "laranja", "uva", "morango"]
const arrayFiltrada = stringCincoCaracteres (arrayOriginal);
console.log(arrayFiltrada);