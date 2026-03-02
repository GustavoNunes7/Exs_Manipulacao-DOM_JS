
let cor = document.getElementById("cor")
let teclaTexto = document.getElementById("tecla")


document.addEventListener("keydown" , function(e){
    let tecla = e.key.toLowerCase();

    if(tecla === "r"){
        document.body.style.backgroundColor = "red"
        cor.innerHTML = "Cor: Vermelho (Red)"
        teclaTexto.innerHTML = "Tecla: R"
        console.log(e.key + " -> rgb(255, 0, 0)")
        

     } else if (tecla === "g"){
         document.body.style.backgroundColor = "green"
         cor.innerHTML = "Cor: Verde (Green)"
         teclaTexto.innerHTML = "Tecla: g"
         console.log(e.key + " -> rgb(0, 255, 0)")

    }else if (tecla === "b"){
         document.body.style.backgroundColor= "blue"
         cor.innerHTML = "Cor: Azul (Blue)"
         teclaTexto.innerHTML = "Tecla: b"
         console.log(e.key + " -> rgb(0, 0, 255)")

    }else if(tecla === "y") {
        document.body.style.backgroundColor= "yellow"
        cor.innerHTML = "Cor: Amarelo (Yellow)"
        teclaTexto.innerHTML = "Tecla: y"
        console.log(e.key + " -> rgb(255, 255, 0)")

    } else if (tecla === "p"){
        document.body.style.backgroundColor= "purple"
        cor.innerHTML = "Cor: Roxo (purple)"
        teclaTexto.innerHTML = "Tecla: p"
        console.log(e.key + " -> rgb(128, 0, 128)")
    }
        
})
//Ex.7??????????????????
let cores ={
    vermelho: "r",
    verde : "g",
    azul : "b",
    amarelo: "y",
    roxo: "p"
}



