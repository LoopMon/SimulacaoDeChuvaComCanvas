function executar(){
    atualizar()
    renderizar()
    window.requestAnimationFrame(executar)
}

function atualizar(){
    //limpar o canvas
    ctx.clearRect(0, 0, cnv.width, cnv.height)
    //movimentar as gotas e verificar se colidiu
    for(gota of gotas){
        //colisão
        colidirComCanvas(gota)
        //movimento
        gota.move()
    }
}

//renderizar cada gota
function renderizar(){
    for(gota of gotas){
        desenhar(gota)
    }
}

//desenhar uma gota
function desenhar(obj){
    ctx.fillStyle = obj.cor
    ctx.fillRect(obj.posX, obj.posY, obj.largura, obj.altura)
}

//verificar se a gota colidiu com o canvas
function colidirComCanvas(obj){
    if(obj.posY + obj.altura > cnv.height){
        //redefinir posições X e Y
        obj.posX = Math.floor(Math.random() * cnv.width)
        obj.posY = Math.floor(Math.random() * -cnv.height)
        //resetar velocidadeY
        // obj.velocidadeY = 0
    }
}