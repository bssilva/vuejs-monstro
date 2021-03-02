export default {
    data: () => ({
        valorJogador: 100,
        valorMonstro: 100,
        novoJogo: true,
        fimJogo: false
    }),

    updated(){
        if(this.novoJogo){
            this.valorJogador = 100;
            this.valorMonstro = 100;
        }
        if(this.valorJogador <= 0 || this.valorMonstro <= 0)
            this.fimJogo = true;
        else
            this.fimJogo = false;
    },
    methods:{
        ataque(){
            if(this.valorJogador >= 0)
                this.valorJogador -= (Math.floor(Math.random() * (15 - 7) + 7));
            
            if(this.valorMonstro >= 0)
                this.valorMonstro -= (Math.floor(Math.random() * (10 - 5) + 5));
        }
    }
}