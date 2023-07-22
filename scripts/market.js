
let boxOferta = document.querySelectorAll('div.boxOferta')

console.log(boxOferta)

for(let card of boxOferta){
    let exibirDetalhes = card.querySelector('p.exibirDetalhes')
    let ocultarDetalhes = card.querySelector('p.ocultarDetalhes')
    let listaSecundaria = card.querySelector('ul.info-secundaria')

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

let tipoOfertas = document.querySelectorAll('p.tipoOferta')

tipoOfertas.forEach((oferta)=>{
    if(oferta.innerText == 'Compra'){
        oferta.setAttribute('class', 'tipoOferta compra')
    }else{
        oferta.setAttribute('class', 'tipoOferta venda')
    }
})