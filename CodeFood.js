const botao = document.getElementById("btnAction");

botao.addEventListener("mouseover", function()
{
    botao.innerText = botao.dataset.textHover;
});

botao.addEventListener("mouseout", function(){
    botao.innerText = "Selecione 1 item de cada categoria"
});

console.log(botao);
