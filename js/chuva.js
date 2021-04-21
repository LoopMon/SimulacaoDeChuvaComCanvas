function Gota(cor){
    //definindo posições aleatórias em X e Y
    this.posX = Math.floor(Math.random() * cnv.width)
    this.posY = Math.floor(Math.random() * -cnv.height)
    //definindo dimensões aleatórias
    this.largura = Math.floor(Math.random() * 3) + 3
    this.altura = Math.floor(Math.random() * 9) + 7

    this.cor = cor
    this.velocidadeY = 10

    this.move = ()=> {
        // this.velocidadeY += gravidade
        this.posY += this.velocidadeY
    }
}