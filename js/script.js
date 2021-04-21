const cnv = document.getElementById('cnv')
const ctx = cnv.getContext('2d')

cnv.width = window.innerWidth
cnv.height = window.innerHeight

const gravidade = 0.1
const gotas = []
const maxGotas = 500

for(let i = 0; i < maxGotas; i++){
    gotas.push(new Gota('#0f0'))
}

//iniciar
executar()
