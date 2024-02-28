let botao = document.querySelector("button");
botao.addEventListener("click", () => {
    let input = document.querySelector("input").value
    parImpar(input)})

    let input = document.querySelector("input")
    input.addEventListener("keypress", (event) => {
        if(event.key === "Enter"){
            let input = document.querySelector("input").value
            parImpar(input)
        }
    })

    function parImpar(n){
        if (n % 2 === 0){
            document.write(`<h1>${n} é par</h1>`)
        } else {
            document.write(`<h1>${n} é ímpar</h1>`)
        }
    }
    parImpar(input)
