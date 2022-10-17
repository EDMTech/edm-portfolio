var botao = document.getElementsByClassName("botao");
var slide = document.getElementById("slide");

botao[0].onclick = function(){
    slide.style.transform = "translateX(0px)";
    for(i=0; i<4; i++){
        botao[i].classList.remove("ativar");
    }
    this.classList.add("ativar");
}
botao[1].onclick = function(){
    slide.style.transform = "translateX(-800px)";
    for(i=0; i<4; i++){
        botao[i].classList.remove("ativar");
    }
    this.classList.add("ativar");
}
botao[2].onclick = function(){
    slide.style.transform = "translateX(-1600px)";
    for(i=0; i<4; i++){
        botao[i].classList.remove("ativar");
    }
    this.classList.add("ativar");
}
botao[3].onclick = function(){
    slide.style.transform = "translateX(-2400px)";
    for(i=0; i<4; i++){
        botao[i].classList.remove("ativar");
    }
    this.classList.add("ativar");
}

// Slider Skills
var botao = document.getElementsByClassName("botao");
var slide = document.getElementById("carousels");

botao[0].onclick = function(){
    slide.style.transform = "translateX(0px)";
    for(i=0; i<4; i++){
        botao[i].classList.remove("ativar");
    }
    this.classList.add("ativar");
}
botao[1].onclick = function(){
    slide.style.transform = "translateX(-800px)";
    for(i=0; i<4; i++){
        botao[i].classList.remove("ativar");
    }
    this.classList.add("ativar");
}
botao[2].onclick = function(){
    slide.style.transform = "translateX(-1600px)";
    for(i=0; i<4; i++){
        botao[i].classList.remove("ativar");
    }
    this.classList.add("ativar");
}
botao[3].onclick = function(){
    slide.style.transform = "translateX(-2400px)";
    for(i=0; i<4; i++){
        botao[i].classList.remove("ativar");
    }
    this.classList.add("ativar");
}

