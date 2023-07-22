
let boxOferta = document.querySelectorAll('div.boxOferta')

for(let card of boxOferta){
    let exibirDetalhes = card.querySelector('p.exibirDetalhes')
    let ocultarDetalhes = card.querySelector('p.ocultarDetalhes')
    let listaSecundaria = card.querySelector('ul.info-secundaria')
    let tipoOferta = card.querySelector('p.tipoOferta')
    let botaoAcao = card.querySelector('button.botaoAcao')
    
    console.log(botaoAcao)

    if(tipoOferta.innerText == 'Compra'){
        tipoOferta.setAttribute('class', 'tipoOferta compra')
        botaoAcao.innerText = 'Vender'
    }else{
        tipoOferta.setAttribute('class', 'tipoOferta venda')
        botaoAcao.innerText = 'Comprar'
    }

    exibirDetalhes.addEventListener('click', ()=>{
        listaSecundaria.style.display = 'flex';
        exibirDetalhes.style.display = 'none';
        ocultarDetalhes.style.display = 'flex';
    })

    ocultarDetalhes.addEventListener('click', ()=>{
        listaSecundaria.style.display = 'none';
        exibirDetalhes.style.display = 'flex';
        ocultarDetalhes.style.display = 'none';
    })

}


