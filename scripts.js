// console.log('saudades giuliana')
document.querySelectorAll("button").forEach(function(botao){
    botao.addEventListener("clik", function(){
        document.querySelectorAll.body.classList.toggle("popup--aberto");
    })
})