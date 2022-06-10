function cambiarColor(){
    const inputColor = document.getElementById("inputColor");
    const bodyColor = document.getElementById("bodyColor");
    const titulo = document.getElementById("titulo");
    const btn = document.getElementById("btn");

    titulo.innerHTML = inputColor.value;
    bodyColor.style.backgroundColor = inputColor.value;

    convertirValores(inputColor.value);
}

function convertirValores(valor){
    const valores1 = parseInt(valor[1] + valor[2],16);
    const valores2 = parseInt(valor[3] + valor[4],16);
    const valores3 = parseInt(valor[5] + valor[6],16);

    if(valores1 < 125 && valores2 < 125 && valores3 < 125){
        titulo.style.color = "#ffffff";
        inputColor.value = "#ffffff";
        btn.className = "blanco"
    }else{
        titulo.style.color = "#000000";
        inputColor.value = "#000000";
        btn.className = "negro";
    }
    
}