
let cor = document.getElementById("cor")
let teclaTexto = document.getElementById("tecla")

let cores ={
    vermelho: "R",
    verde : "G",
    azul : "B",
    amarelo: "Y",
    roxo: "P",
    escuro:"N",
    claro: "D"
}

document.addEventListener("keydown" , function(e){
    let tecla = e.key.toLowerCase();

    if(tecla === "r"){
        document.body.style.backgroundColor = "red"
         document.body.style.color= "white"
        cor.innerHTML = "Cor: Vermelho (Red)"
        teclaTexto.innerHTML = `Tecla: ${cores.vermelho}` 
        console.log(e.key + " -> rgb(255, 0, 0)")
        

     } else if (tecla === "g"){
         document.body.style.backgroundColor = "green"
          document.body.style.color= "white"
         cor.innerHTML = "Cor: Verde (Green)"
         teclaTexto.innerHTML = `Tecla: ${cores.verde}`
         console.log(e.key + " -> rgb(0, 255, 0)")

    }else if (tecla === "b"){
         document.body.style.backgroundColor= "blue"
          document.body.style.color= "white"
         cor.innerHTML = "Cor: Azul (Blue)"
         teclaTexto.innerHTML = `Tecla: ${cores.azul}`
         console.log(e.key + " -> rgb(0, 0, 255)")

    }else if(tecla === "y") {
        document.body.style.backgroundColor= "yellow"
         document.body.style.color= "black"
        cor.innerHTML = "Cor: Amarelo (Yellow)"
        teclaTexto.innerHTML = `Tecla: ${cores.amarelo}`
        console.log(e.key + " -> rgb(255, 255, 0)")

    } else if (tecla === "p"){
        document.body.style.backgroundColor= "purple"
        cor.innerHTML = "Cor: Roxo (purple)"
        teclaTexto.innerHTML = `Tecla: ${cores.roxo}`
        console.log(e.key + " -> rgb(128, 0, 128)")

    } else if (tecla === "n"){
        document.body.style.backgroundColor= "black"
        document.body.style.color= "white"
        cor.innerHTML = "Modo Escuro"
        teclaTexto.innerHTML = `Tecla: ${cores.escuro}`
        console.log(e.key + " -> rgb(0 , 0 , 0)")

    } else if (tecla === "d"){
        document.body.style.backgroundColor= "white"
         document.body.style.color= "black"
        cor.innerHTML = "Modo Claro"
        teclaTexto.innerHTML = `Tecla: ${cores.claro}`
        console.log(e.key + " -> rgb(255 , 255 , 255)")
    }
})


